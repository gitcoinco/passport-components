import { useState, useEffect } from 'react';


interface Props {
    SCORER_ID?: string;
    headers?: Record<string, string>;
    currentAddress?: string; 
  }
  
export const CheckScore = ({ SCORER_ID, headers, currentAddress}: Props) => {
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
        <h2>Your passport score is {score}</h2>
    </div>
    )
}

const styles = {
    h2: {
        fontSize: 12,
        fontWeight: 'normal'
    }
}