import { useState, useEffect } from 'react';


interface Props {
    headers?: Record<string, string>;
    currentAddress?: string; 
  }
  
export const DisplayStamps = ({ headers, currentAddress}: Props) => {
    const [stamps, setStamps] = useState<string>('')
    const [noStampMessage, setNoStampMessage] = useState<string>('') 
    
    useEffect(() => {
        if(headers && currentAddress) {
            fetchScore();
        }
    }, []);

    const fetchScore = async () => {
        const GET_PASSPORT_STAMPS_URI = `https://api.scorer.gitcoin.co/registry/stamps/${currentAddress}`;

        try {
            const response = await fetch(GET_PASSPORT_STAMPS_URI, {
                headers
            });

            const passportData = await response.json();

            if (passportData) {
                console.log(passportData)
                setStamps(JSON.stringify(passportData.items[0]))
            } else {
                setNoStampMessage('No stamps available, please submit your passport after you have added some stamps.');
            }
        } catch (err) {
            console.log('error: ', err);
        }
    };
    // If SCORER_ID or headers or currentAddress is undefined, display a message
    if ( !headers || !currentAddress) {
        return (
        <div>
            <h1>headers or currentAddress is undefined!</h1>
        </div>
        )
    }

    if (noStampMessage != '') {
        return (
            <div>
                <h2>{noStampMessage}</h2>
            </div>
        )
    }

    return (
    <div>
        <h2 style={styles.h2}>{stamps}</h2>
    </div>
    )
}

const styles = {
    h2: {
        fontSize: 12,
        fontWeight: 'normal'
    }
}
