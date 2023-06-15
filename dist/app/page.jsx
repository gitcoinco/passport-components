// import the necessary packages
'use client';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Image from 'next/image';
//import { logo } from '../public/gitcoing-logo.png'
// these lines read the API key and scorer ID from your .env.local file
var APIKEY = process.env.NEXT_PUBLIC_GC_API_KEY;
var SCORER_ID = process.env.NEXT_PUBLIC_GC_SCORER_ID;
// these lines add the corretc header information to the request
var headers = APIKEY ? ({
    'Content-Type': 'application/json',
    'X-API-Key': APIKEY
}) : undefined;
export default function Passport() {
    // here we deal with any local state we need to manage
    var _a = useState(''), address = _a[0], setAddress = _a[1];
    var _b = useState(false), connected = _b[0], setConnected = _b[1];
    /* todo check user's connection when the app loads */
    function connect() {
        return __awaiter(this, void 0, void 0, function () {
            var accounts, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, window.ethereum.request({ method: 'eth_requestAccounts' })];
                    case 1:
                        accounts = _a.sent();
                        setAddress(accounts[0]);
                        setConnected(true);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log('Error connecting wallet...', err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    useEffect(function () {
        function checkConnection() {
            return __awaiter(this, void 0, void 0, function () {
                var provider, accounts, err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            provider = new ethers.BrowserProvider(window.ethereum);
                            return [4 /*yield*/, provider.listAccounts()
                                // if the user is connected, set their account and fetch their score
                            ];
                        case 1:
                            accounts = _a.sent();
                            // if the user is connected, set their account and fetch their score
                            if (accounts && accounts[0]) {
                                setConnected(true);
                                setAddress(accounts[0].address);
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            err_2 = _a.sent();
                            console.log('No wallet connection detected...', err_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        checkConnection();
    }, []);
    return (
    /* this is the UI for the app */
    <div style={styles.main}>
      <div style={styles.header}>
        <Image src="/logo.png" alt="Logo" style={styles.image} width={106} height={19}/>
        <Image src="/passportLogo.png" alt="Logo" style={styles.image} width={342} height={93}/>
        <h2 style={styles.h2}>Your citizenship pass for the decentralized internet.</h2>
        {/* <Image src="/info.png" alt="Logo" style={styles.image} width={637} height={32} />
        <Image src="/paragraph.png" alt="Logo" style={styles.image} width={597} height={76} /> */}
        <p style={styles.p}>Gitcoin Passport is an identity verification application that enables users to collect verifiable credentials, proving their identity and trustworthiness. It provides access to secure web3 experiences and enhances secure participation in various online platforms.</p>
      </div>
      {/* <h1 style={styles.heading}>Gitcoin Passport Components</h1> */}
      

      <div style={styles.buttonContainer}>
      {!connected && (<div>
            <h2 style={styles.h2}>Connect Wallet Component</h2>
            <button style={styles.buttonStyle} onClick={connect}>Connect Wallet</button>
          </div>)}
      {connected && (<div>
            <div style={styles.componentContainer}>
              <h2 style={styles.h2}>Passport score component</h2>
              {/* default
            <PassportScore SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} />
            {/* hide label */}
              {/* <PassportScore SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} /> */}
              {/* theme dark */}
              {/* <PassportScore SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} /> */}
              {/* hide info */}
              {/* <PassportScore SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} /> */}
              {/* add threshold */}
              {/* <PassportScore SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} /> */}
              {/* no score message */}
              {/* <PassportScore SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} /> */} 
            </div>
            
            {/* <div style={styles.componentContainer}>
              <h2 style={styles.h2}>Secret message component</h2>
              <PassportGate SCORER_ID={SCORER_ID} headers={headers} currentAddress={address} threshold={15}/>
            </div> */}

            <div style={styles.componentContainer}>
              <h2 style={styles.h2}>Display stamps component</h2>
              {/* <DisplayStamps headers={headers} currentAddress={address} /> */}
            </div>
          </div>)}
      </div>
    </div>);
}
var styles = {
    main: {
        width: '900px',
        margin: '0 auto',
        paddingTop: 90,
        //backgroundColor: '#0B110F'
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
        fontWeight: '300',
        color: '#B9B3FF'
    },
    p: {
        color: 'white',
        textAlign: 'center',
        lineHeight: 1.5,
        width: '800px'
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
};
