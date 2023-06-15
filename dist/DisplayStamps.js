"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayStamps = void 0;
var DisplayStamps = function DisplayStamps() {
  return <div>
            <p>hello world</p>
       </div>;
};

// import { Gorditas } from 'next/font/google';
// import { useState, useEffect } from 'react';
// import CSS from 'csstype';

// interface Props {
//     headers?: Record<string, string>;
//     currentAddress?: string; 
//   }

// interface Stamp {
//     version: string,
//     credential: Record<string, any>,
//     metadata: Record<string, any>
// }

// const ONCHAIN_GROUPS = ["Lens Handle", "zkSync 1.0", "NFT Holder", "Self GTC Staking", "Snapshot Voter", "Transactions", "Contributed to...", "Gas fees spent", "GTC possessions", 'Lens', 'POAP', 'Ens', 'NFT', 'EthGTEOneTxnProvider', 'FirstEthTxnProvider',  ]
// const ONCHAIN_STAMP_NAMES = ['Ens', 'POAP']

// export const DisplayStamps: React.FC<Props> = ({ headers, currentAddress}: Props) => {
//     const [stamps, setStamps] = useState<Stamp[]>([])
//     const [noStampMessage, setNoStampMessage] = useState<string>('') 

//     useEffect(() => {
//         if(headers && currentAddress) {
//             fetchScore();
//         }
//     }, [headers, currentAddress]);

//     const fetchScore = async () => {
//         const GET_PASSPORT_STAMPS_URI = `https://api.scorer.gitcoin.co/registry/stamps/${currentAddress}?limit=1000&include_metadata=true`;

//         try {
//             const response = await fetch(GET_PASSPORT_STAMPS_URI, {
//                 headers
//             });

//             const passportData = await response.json();

//             if (passportData && passportData.items) {
//                 console.log(passportData.items)
//                 setStamps(passportData.items)
//             } else {
//                 setNoStampMessage('No stamps available, please submit your passport after you have added some stamps.');
//             }
//         } catch (err) {
//             console.log('error: ', err);
//         }
//     };
//     // If SCORER_ID or headers or currentAddress is undefined, display a message
//     if ( !headers || !currentAddress) {
//         return (
//         <div>
//             <h1>headers or currentAddress is undefined!</h1>
//         </div>
//         )
//     }

//     if (noStampMessage != '') {
//         return (
//             <div>
//                 <h2>{noStampMessage}</h2>
//             </div>
//         )
//     }

//     return (
//         <div>
//         <div style={styles.stampGrid}>
//             {stamps.map((stamp, index) => (
//                 <div key={index} style={styles.stampBox}>
//                     {stamp.metadata.platform && <img style={{width: 50}} src={stamp.metadata.platform.icon} alt='Platform Icon'/>}
//                     <h3 style={styles.h3}>{stamp.metadata.platform.id}</h3>
//                     <p  style={styles.p}>{stamp.metadata.group}</p>
//                     <ul>
//                         <li style={styles.p}>{stamp.metadata.description}</li>
//                     </ul>
//                 </div>
//             ))}
//         </div>
//         </div>
//     )
// }

// const styles = {
//     h2: {
//         fontSize: 12,
//         fontWeight: 'normal',
//         color: 'white'
//     },
//     h3: {
//         color: 'white'
//     },
//     p: {
//         color: 'white'
//     },
//     li: {
//         color: 'white'
//     },
//     stampGrid: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//         gap: '20px',
//         marginTop: 20
//     },
//     stampBox: {
//         border: '2px solid #19393F',
//         background: '#0C110F',
//         padding: '20px',
//     },
//     a: {
//         color: '#6F3FF5'
//     }
// }
exports.DisplayStamps = DisplayStamps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEaXNwbGF5U3RhbXBzIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uL3NyYy9EaXNwbGF5U3RhbXBzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRGlzcGxheVN0YW1wcyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+aGVsbG8gd29ybGQ8L3A+XG4gICAgICAgPC9kaXY+IFxuICAgIClcbn1cblxuLy8gaW1wb3J0IHsgR29yZGl0YXMgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJztcbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgQ1NTIGZyb20gJ2Nzc3R5cGUnO1xuXG5cbi8vIGludGVyZmFjZSBQcm9wcyB7XG4vLyAgICAgaGVhZGVycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4vLyAgICAgY3VycmVudEFkZHJlc3M/OiBzdHJpbmc7IFxuLy8gICB9XG5cbi8vIGludGVyZmFjZSBTdGFtcCB7XG4vLyAgICAgdmVyc2lvbjogc3RyaW5nLFxuLy8gICAgIGNyZWRlbnRpYWw6IFJlY29yZDxzdHJpbmcsIGFueT4sXG4vLyAgICAgbWV0YWRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT5cbi8vIH1cblxuLy8gY29uc3QgT05DSEFJTl9HUk9VUFMgPSBbXCJMZW5zIEhhbmRsZVwiLCBcInprU3luYyAxLjBcIiwgXCJORlQgSG9sZGVyXCIsIFwiU2VsZiBHVEMgU3Rha2luZ1wiLCBcIlNuYXBzaG90IFZvdGVyXCIsIFwiVHJhbnNhY3Rpb25zXCIsIFwiQ29udHJpYnV0ZWQgdG8uLi5cIiwgXCJHYXMgZmVlcyBzcGVudFwiLCBcIkdUQyBwb3NzZXNzaW9uc1wiLCAnTGVucycsICdQT0FQJywgJ0VucycsICdORlQnLCAnRXRoR1RFT25lVHhuUHJvdmlkZXInLCAnRmlyc3RFdGhUeG5Qcm92aWRlcicsICBdXG4vLyBjb25zdCBPTkNIQUlOX1NUQU1QX05BTUVTID0gWydFbnMnLCAnUE9BUCddXG5cbi8vIGV4cG9ydCBjb25zdCBEaXNwbGF5U3RhbXBzOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBoZWFkZXJzLCBjdXJyZW50QWRkcmVzc306IFByb3BzKSA9PiB7XG4vLyAgICAgY29uc3QgW3N0YW1wcywgc2V0U3RhbXBzXSA9IHVzZVN0YXRlPFN0YW1wW10+KFtdKVxuLy8gICAgIGNvbnN0IFtub1N0YW1wTWVzc2FnZSwgc2V0Tm9TdGFtcE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPignJykgXG4gICAgXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICAgICAgaWYoaGVhZGVycyAmJiBjdXJyZW50QWRkcmVzcykge1xuLy8gICAgICAgICAgICAgZmV0Y2hTY29yZSgpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSwgW2hlYWRlcnMsIGN1cnJlbnRBZGRyZXNzXSk7XG5cblxuLy8gICAgIGNvbnN0IGZldGNoU2NvcmUgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IEdFVF9QQVNTUE9SVF9TVEFNUFNfVVJJID0gYGh0dHBzOi8vYXBpLnNjb3Jlci5naXRjb2luLmNvL3JlZ2lzdHJ5L3N0YW1wcy8ke2N1cnJlbnRBZGRyZXNzfT9saW1pdD0xMDAwJmluY2x1ZGVfbWV0YWRhdGE9dHJ1ZWA7XG5cbi8vICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goR0VUX1BBU1NQT1JUX1NUQU1QU19VUkksIHtcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzXG4vLyAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgY29uc3QgcGFzc3BvcnREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4vLyAgICAgICAgICAgICBpZiAocGFzc3BvcnREYXRhICYmIHBhc3Nwb3J0RGF0YS5pdGVtcykge1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhc3Nwb3J0RGF0YS5pdGVtcylcbi8vICAgICAgICAgICAgICAgICBzZXRTdGFtcHMocGFzc3BvcnREYXRhLml0ZW1zKVxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBzZXROb1N0YW1wTWVzc2FnZSgnTm8gc3RhbXBzIGF2YWlsYWJsZSwgcGxlYXNlIHN1Ym1pdCB5b3VyIHBhc3Nwb3J0IGFmdGVyIHlvdSBoYXZlIGFkZGVkIHNvbWUgc3RhbXBzLicpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9IGNhdGNoIChlcnIpIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJywgZXJyKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH07XG4vLyAgICAgLy8gSWYgU0NPUkVSX0lEIG9yIGhlYWRlcnMgb3IgY3VycmVudEFkZHJlc3MgaXMgdW5kZWZpbmVkLCBkaXNwbGF5IGEgbWVzc2FnZVxuLy8gICAgIGlmICggIWhlYWRlcnMgfHwgIWN1cnJlbnRBZGRyZXNzKSB7XG4vLyAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICA8aDE+aGVhZGVycyBvciBjdXJyZW50QWRkcmVzcyBpcyB1bmRlZmluZWQhPC9oMT5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIClcbi8vICAgICB9XG5cbi8vICAgICBpZiAobm9TdGFtcE1lc3NhZ2UgIT0gJycpIHtcbi8vICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICAgICAgPGgyPntub1N0YW1wTWVzc2FnZX08L2gyPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIClcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuc3RhbXBHcmlkfT5cbi8vICAgICAgICAgICAgIHtzdGFtcHMubWFwKChzdGFtcCwgaW5kZXgpID0+IChcbi8vICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZXMuc3RhbXBCb3h9PlxuLy8gICAgICAgICAgICAgICAgICAgICB7c3RhbXAubWV0YWRhdGEucGxhdGZvcm0gJiYgPGltZyBzdHlsZT17e3dpZHRoOiA1MH19IHNyYz17c3RhbXAubWV0YWRhdGEucGxhdGZvcm0uaWNvbn0gYWx0PSdQbGF0Zm9ybSBJY29uJy8+fVxuLy8gICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5oM30+e3N0YW1wLm1ldGFkYXRhLnBsYXRmb3JtLmlkfTwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwICBzdHlsZT17c3R5bGVzLnB9PntzdGFtcC5tZXRhZGF0YS5ncm91cH08L3A+XG4vLyAgICAgICAgICAgICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17c3R5bGVzLnB9PntzdGFtcC5tZXRhZGF0YS5kZXNjcmlwdGlvbn08L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyB9XG5cbi8vIGNvbnN0IHN0eWxlcyA9IHtcbi8vICAgICBoMjoge1xuLy8gICAgICAgICBmb250U2l6ZTogMTIsXG4vLyAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuLy8gICAgICAgICBjb2xvcjogJ3doaXRlJ1xuLy8gICAgIH0sXG4vLyAgICAgaDM6IHtcbi8vICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbi8vICAgICB9LFxuLy8gICAgIHA6IHtcbi8vICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbi8vICAgICB9LFxuLy8gICAgIGxpOiB7XG4vLyAgICAgICAgIGNvbG9yOiAnd2hpdGUnXG4vLyAgICAgfSxcbi8vICAgICBzdGFtcEdyaWQ6IHtcbi8vICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuLy8gICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKScsXG4vLyAgICAgICAgIGdhcDogJzIwcHgnLFxuLy8gICAgICAgICBtYXJnaW5Ub3A6IDIwXG4vLyAgICAgfSxcbi8vICAgICBzdGFtcEJveDoge1xuLy8gICAgICAgICBib3JkZXI6ICcycHggc29saWQgIzE5MzkzRicsXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICcjMEMxMTBGJyxcbi8vICAgICAgICAgcGFkZGluZzogJzIwcHgnLFxuLy8gICAgIH0sXG4vLyAgICAgYToge1xuLy8gICAgICAgICBjb2xvcjogJyM2RjNGRjUnXG4vLyAgICAgfVxuLy8gfVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUEsRUFBUztFQUMvQixPQUNJLENBQUMsR0FBRztBQUNaLFlBQVksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDN0IsT0FBTyxFQUFFLEdBQUcsQ0FBQztBQUViLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBQUEsYUFBQSJ9