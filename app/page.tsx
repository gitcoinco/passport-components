// import the necessary packages
'use client'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { DisplayStamps } from '@/components/DisplayStamps'
import { PassportGate } from '../components/PassportGate'
import { PassportScore } from '../components/PassportScore'
import Image from 'next/image'

//import { logo } from '../public/gitcoing-logo.png'

// these lines read the API key and scorer ID from your .env.local file
const APIKEY = process.env.NEXT_PUBLIC_GC_API_KEY
const SCORER_ID = process.env.NEXT_PUBLIC_GC_SCORER_ID

// these lines add the corretc header information to the request
const headers = APIKEY ? ({
  'Content-Type': 'application/json',
  'X-API-Key': APIKEY
}) : undefined

// enable wallet interactions
declare global {
  interface Window{
    ethereum?: any
  }
}

export default function Passport() {
  // here we deal with any local state we need to manage
  const [address, setAddress] = useState<string>('')
  const [connected, setConnected] = useState<boolean>(false)

  /* todo check user's connection when the app loads */
  async function connect() {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setAddress(accounts[0])
      setConnected(true)
    } catch (err) {
      console.log('Error connecting wallet...', err)
    }
  }

  useEffect(() => {
    async function checkConnection() {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const accounts = await provider.listAccounts()
        // if the user is connected, set their account and fetch their score
        if (accounts && accounts[0]) {
          setConnected(true)
          setAddress(accounts[0].address)
        }
      } catch (err) {
        console.log('No wallet connection detected...', err)
      }
    }
    checkConnection()
  }, [])
  

  return (
    /* this is the UI for the app */
    <div style={styles.main}>
      <div style={styles.header}>
        <Image src="/logo.png" alt="Logo" style={styles.image} width={106} height={19} />
        <Image src="/passportLogo.png" alt="Logo" style={styles.image} width={342} height={93} />
        <Image src="/info.png" alt="Logo" style={styles.image} width={637} height={32} />
        <Image src="/paragraph.png" alt="Logo" style={styles.image} width={597} height={76} />
        {/* <p style={styles.p}>Gitcoin Passport is an identity verification application that enables users to collect verifiable credentials, proving their identity and trustworthiness. It provides access to secure web3 experiences and enhances secure participation in various online platforms.</p> */}
      </div>
      {/* <h1 style={styles.heading}>Gitcoin Passport Components</h1> */}
      

      <div style={styles.buttonContainer}>
      {
        !connected && (
          <div>
            <h2 style={styles.h2}>Connect Wallet Component</h2>
            <button style={styles.buttonStyle} onClick={connect}>Connect Wallet</button>
          </div>
        )
      }
      {
        connected && (
          <div>
            <div style={styles.componentContainer}>
              <h2 style={styles.h2}>Display score component</h2>
              <PassportScore SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} />
            </div>
            
            {/* <div style={styles.componentContainer}>
              <h2 style={styles.h2}>Secret message component</h2>
              <PassportGate SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} threshold={15}/>
            </div> */}

            <div style={styles.componentContainer}>
              <h2 style={styles.h2}>Display stamps component</h2>
              <DisplayStamps headers={headers} currentAddress={address} />
            </div>
          </div>
        )
      }
      </div>
    </div>
  )
}

const styles = {
  main: {
    width: '900px',
    margin: '0 auto',
    paddingTop: 90,
    backgroundColor: '#0B110F'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  heading: {
    fontSize: 60,
    color: 'white'
  },
  image: {
    margin: 10,
  },
  intro: {
    fontSize: 18,
    color: 'white'
  },
  h2: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white'
  },
  p: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 1.5
  },
  configurePassport: {
    marginTop: 20,
  },
  linkStyle: {
    color: '#008aff'
  },
  buttonContainer: {
    marginTop: 20
  },
  buttonStyle: {
    padding: '10px 30px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
    background: "#6935FF",
    borderRadius: "4px",
    color: "#ffffff"


    //borderBottom: '2px solid rgba(0, 0, 0, .2)',
    //borderRight: '2px solid rgba(0, 0, 0, .2)'
  },
  componentContainer: {
    marginTop: 15
  },
  noScoreMessage: {
    marginTop: 20
  }
}