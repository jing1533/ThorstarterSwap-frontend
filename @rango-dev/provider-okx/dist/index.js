var k=Object.defineProperty;var r=(t,e)=>k(t,"name",{value:e,configurable:!0});import{canEagerlyConnectToEvm as T,canSwitchNetworkToEvm as d,chooseInstance as i,getEvmAccounts as C,Networks as a,switchNetworkForEvm as x,WalletTypes as y}from"@rango-dev/wallets-shared";import{isEvmBlockchain as I}from"rango-types";import{Networks as n}from"@rango-dev/wallets-shared";function w(){let{okxwallet:t}=window;if(!t)return null;let e=new Map;return t&&e.set(n.ETHEREUM,t),t.solana&&e.set(n.SOLANA,t.solana),e}r(w,"okx_instance");async function g(t){let e=await t.get(n.SOLANA),o=[];if(e){let s=(await e.connect()).publicKey.toString();o.push({accounts:s?[s]:[],chainId:n.SOLANA})}return o}r(g,"getSolanaAccounts");var E=[n.ETHEREUM,n.BTC,n.BSC,n.TRON,n.SOLANA,n.POLYGON,n.FANTOM,n.ARBITRUM,n.OPTIMISM,n.CRONOS,n.BOBA,n.GNOSIS,n.MOONBEAM,n.MOONRIVER,n.HARMONY,n.LTC,n.AVAX_CCHAIN];import{DefaultEvmSigner as A}from"@rango-dev/signer-evm";import{DefaultSolanaSigner as O}from"@rango-dev/signer-solana";import{Networks as p,getNetworkInstance as h}from"@rango-dev/wallets-shared";import{DefaultSignerFactory as R,TransactionType as u}from"rango-types";function m(t){let e=h(t,p.ETHEREUM),o=h(t,p.SOLANA),c=new R;return c.registerSigner(u.EVM,new A(e)),c.registerSigner(u.SOLANA,new O(o)),c}r(m,"getSigners");var M=y.OKX,Y={type:M,defaultNetwork:a.ETHEREUM},z=w,q=r(async({instance:t,meta:e})=>{let o=[],c=i(t,e,a.ETHEREUM);if(c){let l=await C(c);o.push(l)}let s=await g(t);return o=[...o,...s],o},"connect"),J=r(({instance:t,updateAccounts:e,meta:o})=>{i(t,o,a.ETHEREUM)?.on("accountsChanged",async s=>{let l=o.filter(I).find(N=>N.name===a.ETHEREUM)?.chainId;e(s,l);let[{accounts:S,chainId:f}]=await g(t);e(S,f)})},"subscribe"),Q=r(async t=>{let e=i(t.instance,t.meta,t.network);return x({...t,instance:e})},"switchNetwork"),Z=d,$=m,tt=r(async({instance:t,meta:e})=>{let o=i(t,e,a.ETHEREUM);return o?T({instance:o,meta:e}):Promise.resolve(!1)},"canEagerConnect"),et=r(t=>({name:"OKX",img:"https://raw.githubusercontent.com/rango-exchange/assets/main/wallets/okx/icon.svg",installLink:{CHROME:"https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",BRAVE:"https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",FIREFOX:"https://addons.mozilla.org/en-US/firefox/addon/okexwallet",DEFAULT:"https://www.okx.com/web3"},color:"white",supportedChains:t.filter(e=>E.includes(e.name))}),"getWalletInfo");export{tt as canEagerConnect,Z as canSwitchNetworkTo,Y as config,q as connect,z as getInstance,$ as getSigners,et as getWalletInfo,J as subscribe,Q as switchNetwork};
//# sourceMappingURL=index.js.map
