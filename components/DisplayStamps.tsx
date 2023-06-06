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

const ONCHAIN_GROUPS = ["Lens Handle", "zkSync 1.0", "NFT Holder", "Self GTC Staking", "Snapshot Voter", "Transactions", "Contributed to...", "Gas fees spent", "GTC possessions", 'Lens', 'POAP', 'Ens', 'NFT', 'EthGTEOneTxnProvider', 'FirstEthTxnProvider',  ]
const ONCHAIN_STAMP_NAMES = ['Ens', 'POAP']

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
        <div>
        <div style={styles.stampGrid}>
            {stamps.map((stamp, index) => (
                <div key={index} style={styles.stampBox}>
                    {stamp.metadata.platform && <img style={{width: 50}} src={stamp.metadata.platform.icon} alt='Platform Icon'/>}
                    <h3 style={styles.h3}>{stamp.metadata.platform.id}</h3>
                    <p  style={styles.p}>{stamp.metadata.group}</p>
                    <ul>
                        <li style={styles.p}>{stamp.metadata.description}</li>
                    </ul>
                </div>
            ))}
        </div>
        </div>
    )
}

const styles = {
    h2: {
        fontSize: 12,
        fontWeight: 'normal',
        color: 'white'
    },
    h3: {
        color: 'white'
    },
    p: {
        color: 'white'
    },
    li: {
        color: 'white'
    },
    stampGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: 20
    },
    stampBox: {
        border: '2px solid #19393F',
        background: '#0C110F',
        padding: '20px',
    },
    a: {
        color: '#6F3FF5'
    }
}
