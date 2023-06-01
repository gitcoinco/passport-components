import { Gorditas } from 'next/font/google';
import { useState, useEffect } from 'react';
import CSS from 'csstype';


interface Props {
    headers?: Record<string, string>;
    currentAddress?: string; 
  }

interface Stamp {
    version: string,
    credential: Record<string, any>,
    metadata: Record<string, any>
}

export const DisplayStamps = ({ headers, currentAddress}: Props) => {
    const [stamps, setStamps] = useState<Stamp[]>([])
    const [noStampMessage, setNoStampMessage] = useState<string>('') 
    
    useEffect(() => {
        if(headers && currentAddress) {
            fetchScore();
        }
    }, [headers, currentAddress]);


    const fetchScore = async () => {
        const GET_PASSPORT_STAMPS_URI = `https://api.scorer.gitcoin.co/registry/stamps/${currentAddress}?limit=1000&include_metadata=true`;

        try {
            const response = await fetch(GET_PASSPORT_STAMPS_URI, {
                headers
            });

            const passportData = await response.json();

            if (passportData && passportData.items) {
                console.log(passportData.items)
                setStamps(passportData.items)
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
        <div style={styles.stampGrid}>
            {stamps.map((stamp, index) => (
                <div key={index} style={styles.stampBox}>
                    <h3>{stamp.metadata.name}</h3>
                    <p>{stamp.metadata.description}</p>
                    {/* {stamp.metadata.platform && <img src={stamp.metadata.platform.icon} alt='Platform Icon'/>} */}
                </div>
            ))}
        </div>
    )
}

const styles = {
    h2: {
        fontSize: 12,
        fontWeight: 'normal'
    },
    stampGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px'
    },
    stampBox: {
        border: '2px solid purple',
        background: 'white',
        padding: '20px',
    }
}
