import { useState, useEffect } from 'react';
import Image from 'next/image'
import { Roboto_Flex } from 'next/font/google';

//todo: add optional props label (boolean), theme (string),  hideInfo (boolean), theshold (number), style (object)
interface Props {
    SCORER_ID?: string;
    headers?: Record<string, string>;
    currentAddress?: string; 
    label?: boolean;
    theme?: string;
    hideInfo?: boolean;
    threshold?: number;
    style?: object;
  }


export const PassportScore = ({ 
    SCORER_ID, 
    headers, 
    currentAddress,
    label = true,
    theme = "light",
    hideInfo = false,
    threshold = 20,
    style
}: Props) => {
    const [score, setScore] = useState<string>('')
    const [certainty, setCertainty] = useState<string>('')
    const [noScoreMessage, setNoScoreMessage] = useState<string>('') 
    
    const themeStyle = theme === "dark" ? { color: "black" } : { color: "white" };
    const mergedStyle = { ...styles.h2, ...themeStyle, ...style };

    useEffect(() => {
        if(SCORER_ID && headers && currentAddress) {
            fetchScore();
        }
    }, []);

    const fetchScore = async () => {
        const GET_PASSPORT_SCORE_URI = `https://api.scorer.gitcoin.co/registry/score/${SCORER_ID}/${currentAddress}`;

        try {
            const response = await fetch(GET_PASSPORT_SCORE_URI, {headers});
            const passportData = await response.json();

            //todo: change threshold to prop
            if (passportData.score) {
                const roundedScore = Math.round(passportData.score * 100) / 100;
                setScore(roundedScore.toString());
                if (roundedScore <= threshold) {
                    setCertainty('Low Score')
                }
                else if (roundedScore > threshold) {
                    setCertainty('Passing Score')
                }
            } else {
                setNoScoreMessage('No score available, please submit your passport after you have added some stamps.');
            }
        } catch (err) {
            console.log('error: ', err);
        }
    };
    // If SCORER_ID or headers or currentAddress is undefined, display a message
    if (!SCORER_ID || !headers || !currentAddress) {
        return (
        <div>
            <h1>SCORER_ID, headers or currentAddress is undefined!</h1>
        </div>
        )
    }

    if (noScoreMessage != '') {
        return (
            <div>
                <h2>{noScoreMessage}</h2>
            </div>
        )
    }

    const certaintyColor = certainty === 'Low Score' ? 'orange'
    : 'green';

    return (
         <div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: 0}}>
                <h2 style={mergedStyle}>{score}</h2>
                { !hideInfo && <Image src="/hover.png" alt="Logo" width={15} height={15} style={{paddingLeft: 5, paddingTop: 20}}/> }
            </div>
            { label && <p style={{color: certaintyColor, marginTop: 0}}>{certainty}</p> }
        </div>
        
        // <div>
        //     <h2 style={mergedStyle}>{score}</h2>
        //     { !hideInfo && 
        //         <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: 0}}>
        //         <Image src="/hover.png" alt="Logo" width={15} height={15} style={{paddingLeft: 5, paddingTop: 20}}/> 
        //         { label && <p style={{color: certaintyColor, marginTop: 0}}>{certainty}</p> }
        //         </div>
        //     }
        // </div>

    // <div>
    //     <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: 0}}>
    //     <h2 style={styles.h2}>{score}</h2>
    //     <Image src="/hover.png" alt="Logo" width={15} height={15} style={{paddingLeft: 5, paddingTop: 20}}/>
    //     </div>
    //     <p style={{color: 'white', marginTop: 0}}>{certainty}</p>
    // </div>
    )
}

const styles = {
    h2: {
        fontSize: 24,
        fontWeight: 'normal',
        color: 'white',
        marginBottom: 5
    }
}