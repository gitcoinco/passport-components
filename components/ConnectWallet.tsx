import { useState } from 'react'
import { ethers } from 'ethers'

declare global {
  interface Window {
    ethereum?: any
  }
}

function ConnectWallet() {
  const [connected, setConnected] = useState<boolean>(false)
  const [address, setAddress] = useState<string>('')

  async function connect() {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setAddress(accounts[0])
      setConnected(true)
    } catch (err) {
      console.log('error connecting...')
    }
  }

  return (
    <div>
      {
        !connected && (
          <button style={styles.buttonStyle} onClick={connect}>Connect Wallet</button>
        )
      }
      {
        connected && <p>Connected: {address}</p>
      }
    </div>
  )
}

export default ConnectWallet;


const styles = {
    main: {
      width: '900px',
      margin: '0 auto',
      paddingTop: 90
    },
    heading: {
      fontSize: 60
    },
    intro: {
      fontSize: 18,
      color: 'rgba(0, 0, 0, .55)'
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
      borderBottom: '2px solid rgba(0, 0, 0, .2)',
      borderRight: '2px solid rgba(0, 0, 0, .2)'
    },
    hiddenMessageContainer: {
      marginTop: 15
    },
    noScoreMessage: {
      marginTop: 20
    }
  }