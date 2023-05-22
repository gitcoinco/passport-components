// import the necessary packages
'use client'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { CheckScore } from '../components/CheckScore'
import { SecretMessage } from '../components/SecretMessage'
import { DisplayStamps } from '@/components/DisplayStamps'

// these lines read the API key and scorer ID from your .env.local file
const APIKEY = process.env.NEXT_PUBLIC_GC_API_KEY
const SCORER_ID = process.env.NEXT_PUBLIC_GC_SCORER_ID

// endpoint for submitting passport
const SUBMIT_PASSPORT_URI = 'https://api.scorer.gitcoin.co/registry/submit-passport'
// endpoint for getting the signing message
const SIGNING_MESSAGE_URI = 'https://api.scorer.gitcoin.co/registry/signing-message'
// score needed to see hidden message
const THRESHOLD_NUMBER = 20

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
  const [score, setScore] = useState<string>('')
  const [noScoreMessage, setNoScoreMessage] = useState<string>('')

  /* todo check user's connection when the app loads */
  async function connect() {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setAddress(accounts[0])
      setConnected(true)
      checkPassport(accounts[0])
    } catch (err) {
      console.log('error connecting...')
    }
  }

  useEffect(() => {
    checkConnection()
    async function checkConnection() {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const accounts = await provider.listAccounts()
        // if the user is connected, set their account and fetch their score
        if (accounts && accounts[0]) {
          setConnected(true)
          setAddress(accounts[0].address)
          checkPassport(accounts[0].address)
        }
      } catch (err) {
        console.log('not connected...')
      }
    }
  }, [])
  
  /* todo connect user's wallet */

  /* todo check user's passport */

  async function checkPassport(currentAddress = address) {
    setScore('')
    setNoScoreMessage('')
    // 
    const GET_PASSPORT_SCORE_URI = `https://api.scorer.gitcoin.co/registry/score/${SCORER_ID}/${currentAddress}`
    try {
      const response = await fetch(GET_PASSPORT_SCORE_URI, {
        headers
      })
      const passportData = await response.json()
      if (passportData.score) {
        // if the user has a score, round it and set it in the local state
        const roundedScore = Math.round(passportData.score * 100) / 100
        setScore(roundedScore.toString())
      } else {
        // if the user has no score, display a message letting them know to submit thier passporta
        console.log('No score available, please add stamps to your passport and then resubmit.')
        setNoScoreMessage('No score available, please submit your passport after you have added some stamps.')
      }
    } catch (err) {
      console.log('error: ', err)
    }
  }

  /* todo get signing message from API */

  /* todo submit passport for scoring */

  async function getSigningMessage() {
    try {
      const response = await fetch(SIGNING_MESSAGE_URI, {
        headers
      })
      const json = await response.json()
      return json
    } catch (err) {
      console.log('error: ', err)
    }
  }

  async function submitPassport() {
    setNoScoreMessage('')
    try {
      // call the API to get the signing message and the nonce
      const { message, nonce } = await getSigningMessage()
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      // ask the user to sign the message
      const signature = await signer.signMessage(message)
      
      // call the API, sending the signing message, the signature, and the nonce
      const response = await fetch(SUBMIT_PASSPORT_URI, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          address,
          scorer_id: SCORER_ID,
          signature,
          nonce
        })
      })

      const data = await response.json()
      console.log('data:', data)
    } catch (err) {
      console.log('error: ', err)
    }
  }

  return (
    /* this is the UI for the app */
    <div style={styles.main}>
      <h1 style={styles.heading}>Gitcoin Passport Components</h1>
      {/* <p style={styles.configurePassport}>Configure your passport <a style={styles.linkStyle} target="_blank" href="https://passport.gitcoin.co/#/dashboard">here</a></p> */}
      {/* <h2 style={styles.configurePassport}>Connect Wallet Component</h2> */}

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
        score && (
          <div>
            <div style={styles.componentContainer}>
              <h2 style={styles.h2}>Display score component</h2>
              <CheckScore SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} />
            </div>
            
            <div style={styles.componentContainer}>
              <h2 style={styles.h2}>Secret message component</h2>
              <SecretMessage SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} threshold={15}/>
            </div>

            <div style={styles.componentContainer}>
              <h2 style={styles.h2}>Display stamps component</h2>
              <DisplayStamps headers={headers} currentAddress={address} />
            </div>
          </div>
        )
      }
      {/* {
        connected && (
          <div style={styles.buttonContainer}>
            <button style={styles.buttonStyle} onClick={submitPassport}>Submit Passport</button>
            <button style={styles.buttonStyle} onClick={() => checkPassport()}>Check passport score</button>
            <CheckScore SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} />
            <SecretMessage SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} threshold={15}/>
          </div>
        )
      } */}
      {
        noScoreMessage && (<p style={styles.noScoreMessage}>{noScoreMessage}</p>)
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
    backgroundColor: '#ffffff'
  },
  heading: {
    fontSize: 60
  },
  intro: {
    fontSize: 18,
    //color: 'rgba(0, 0, 0, .2)'
  },
  h2: {
    fontSize: 24,
    fontWeight: '500'
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