import { useState, useEffect } from 'react';

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
    threshold: number;
  }
  
export const PassportGate = ({ SCORER_ID, headers, currentAddress, threshold}: Props) => {
    const [score, setScore] = useState<string>('')
    const [noScoreMessage, setNoScoreMessage] = useState<string>('') 

    const [newScore, setNewScore] = useState<number>(0)
    
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
                setNewScore(roundedScore);
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

    if (newScore >= threshold) {
        return (
            <div>
                <h2>Congrats! You can view the secret message</h2>
            </div>
        )
    }

    if (noScoreMessage != '') {
        return (
            <div>
                <h2>hey</h2>
            </div>
        )
    }

    return (
    <div>
        <h2 style={styles.h2}>{noScoreMessage}</h2>
    </div>
    )
}

const styles = {
    h2: {
        fontSize: 12,
        fontWeight: 'normal'
    }
}