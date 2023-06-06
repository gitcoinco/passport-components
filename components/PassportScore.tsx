import { useState, useEffect } from 'react';
import Image from 'next/image'
import { Roboto_Flex } from 'next/font/google';

//component fetches passport score and displays it

//required props: scorer_id, headers, address

//optional props: label, hideLabel, hideInfo, style

//states: score, no score

//todo: design noScore state
//todo: add optional prop functionality

interface Props {
    SCORER_ID?: string;
    headers?: Record<string, string>;
    currentAddress?: string; 
  }
  
export const PassportScore = ({ SCORER_ID, headers, currentAddress}: Props) => {
    const [score, setScore] = useState<string>('')
    const [noScoreMessage, setNoScoreMessage] = useState<string>('') 
    
    useEffect(() => {
        if(SCORER_ID && headers && currentAddress) {
            fetchScore();
        }
    }, []);

    const fetchScore = async () => {
        const GET_PASSPORT_SCORE_URI = `https://api.scorer.gitcoin.co/registry/score/${SCORER_ID}/${currentAddress}`;

        try {
            const response = await fetch(GET_PASSPORT_SCORE_URI, {
                headers
            });

            const passportData = await response.json();

            if (passportData.score) {
                const roundedScore = Math.round(passportData.score * 100) / 100;
                setScore(roundedScore.toString());
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

    return (
    <div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', }}>
        <h2 style={styles.h2}>{score}</h2>
        <Image src="/hover.png" alt="Logo" width={15} height={15} style={{paddingLeft: 5, paddingTop: 20}}/>
        </div>
    </div>
    )
}

const styles = {
    h2: {
        fontSize: 24,
        fontWeight: 'normal',
        color: 'white'
    }
}