var T=Object.defineProperty;var s=(e,t)=>T(e,"name",{value:t,configurable:!0});import{canEagerlyConnectToEvm as N,canSwitchNetworkToEvm as S,chooseInstance as g,getEvmAccounts as R,Networks as a,subscribeToEvm as C,switchNetworkForEvm as x,WalletTypes as I}from"@rango-dev/wallets-shared";import{evmBlockchains as M,isEvmBlockchain as B,tronBlockchain as L}from"rango-types";import{Networks as f}from"@rango-dev/wallets-shared";function w(){let e=new Map,{bitkeep:t}=window;return!t||(t.ethereum&&e.set(f.ETHEREUM,t.ethereum),t.tronLink&&e.set(f.TRON,t.tronLink),e.size===0)?null:e}s(w,"bitgetInstances");import{DefaultEvmSigner as y}from"@rango-dev/signer-evm";import{DefaultTronSigner as b}from"@rango-dev/signer-tron";import{getNetworkInstance as d,Networks as h}from"@rango-dev/wallets-shared";import{DefaultSignerFactory as v,TransactionType as u}from"rango-types";function m(e){let t=d(e,h.ETHEREUM),o=d(e,h.TRON),n=new v;return n.registerSigner(u.EVM,new y(t)),n.registerSigner(u.TRON,new b(o)),n}s(m,"getSigners");var P=I.BITGET,K={type:P,defaultNetwork:a.ETHEREUM},Q=w,X=s(async({instance:e,meta:t})=>{let o=g(e,t,a.ETHEREUM),n=g(e,t,a.TRON),c=[];if(o){let r=await R(o);c.push(r)}if(n){let r=await n.request({method:"tron_requestAccounts"});if(!r)throw new Error("Please unlock your TronLink extension first.");if(r?.code&&r.message&&r.code!==200)throw new Error(r.message);let i=n.tronWeb.defaultAddress.base58;c.push({accounts:i?[i]:[],chainId:a.TRON})}return c},"connect"),Y=s(({instance:e,state:t,updateChainId:o,updateAccounts:n,meta:c,connect:r,disconnect:i})=>{let E=e.get(a.ETHEREUM),k=c.filter(B);C({instance:E,state:t,updateChainId:o,updateAccounts:n,meta:k,connect:r,disconnect:i}),window.addEventListener("message",l=>{if(l.data.isTronLink&&l.data.message&&l.data.message.action=="accountsChanged"){let p=l?.data?.message?.data?.address;p?n([p]):i()}})},"subscribe"),Z=x,$=S,ee=s(async({instance:e,meta:t})=>{let o=g(e,t,a.ETHEREUM);return o?N({instance:o,meta:t}):Promise.resolve(!1)},"canEagerConnect"),te=m,oe=s(e=>{let t=M(e),o=L(e);return{name:"Bitget Wallet",img:"https://raw.githubusercontent.com/rango-exchange/assets/main/wallets/bitget/icon.svg",installLink:{CHROME:"https://chrome.google.com/webstore/detail/bitkeep-crypto-nft-wallet/jiidiaalihmmhddjgbnbgdfflelocpak",BRAVE:"https://chrome.google.com/webstore/detail/bitkeep-crypto-nft-wallet/jiidiaalihmmhddjgbnbgdfflelocpak",DEFAULT:"https://web3.bitget.com/en/wallet-download?type=1"},color:"#ffffff",supportedChains:[...t,...o]}},"getWalletInfo");export{ee as canEagerConnect,$ as canSwitchNetworkTo,K as config,X as connect,Q as getInstance,te as getSigners,oe as getWalletInfo,Y as subscribe,Z as switchNetwork};
//# sourceMappingURL=index.js.map