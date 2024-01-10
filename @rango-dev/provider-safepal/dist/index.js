var h=Object.defineProperty;var r=(e,t)=>h(e,"name",{value:t,configurable:!0});import{canSwitchNetworkToEvm as v,chooseInstance as w,getEvmAccounts as N,Networks as i,subscribeToEvm as k,switchNetworkForEvm as A,WalletTypes as y}from"@rango-dev/wallets-shared";import{evmBlockchains as x,solanaBlockchain as R}from"rango-types";import{Networks as s}from"@rango-dev/wallets-shared";function l(){let e=new Map,{isSafePal:t,safepal:o,safepalProvider:n}=window;return!t||(o&&o.isSafePalWallet&&e.set(s.SOLANA,o),n&&n&&e.set(s.ETHEREUM,n),e.size===0)?null:e}r(l,"safepal");async function p(e){let t=e.get(s.SOLANA),o=[];if(t){let a=(await t.connect()).publicKey.toString();o.push({accounts:[a],chainId:s.SOLANA})}return o}r(p,"getNonEvmAccounts");import{DefaultEvmSigner as E}from"@rango-dev/signer-evm";import{DefaultSolanaSigner as S}from"@rango-dev/signer-solana";import{Networks as f,getNetworkInstance as g}from"@rango-dev/wallets-shared";import{DefaultSignerFactory as d,TransactionType as m}from"rango-types";function c(e){let t=g(e,f.ETHEREUM),o=g(e,f.SOLANA),n=new d;return n.registerSigner(m.EVM,new E(t)),n.registerSigner(m.SOLANA,new S(o)),n}r(c,"getSigners");var P=y.SAFEPAL,X={type:P,defaultNetwork:i.ETHEREUM},_=l,q=r(async({instance:e,meta:t})=>{let o=w(e,t,i.ETHEREUM),n=[];if(o){let u=await N(o);n.push(u)}let a=await p(e);return n=[...n,...a],n},"connect"),G=r(e=>{let t=w(e.instance,e.meta,i.ETHEREUM);t&&k({...e,instance:t})},"subscribe"),J=A,Q=v,Y=c,Z=r(e=>{let t=x(e),o=R(e);return{name:"SafePal",img:"https://raw.githubusercontent.com/rango-exchange/assets/main/wallets/safepal/icon.svg",installLink:{CHROME:"https://chrome.google.com/webstore/detail/safepal-extension-wallet/lgmpcpglpngdoalbgeoldeajfclnhafa",BRAVE:"https://chrome.google.com/webstore/detail/safepal-extension-wallet/lgmpcpglpngdoalbgeoldeajfclnhafa",FIREFOX:"https://addons.mozilla.org/en-US/firefox/addon/safepal-extension-wallet",DEFAULT:"https://www.safepal.com/download"},color:"#4A21EF",supportedChains:[...t,...o]}},"getWalletInfo");export{Q as canSwitchNetworkTo,X as config,q as connect,_ as getInstance,Y as getSigners,Z as getWalletInfo,G as subscribe,J as switchNetwork};
//# sourceMappingURL=index.js.map