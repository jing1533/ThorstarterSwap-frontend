var k=Object.defineProperty;var o=(e,n)=>k(e,"name",{value:n,configurable:!0});import{canSwitchNetworkToEvm as b,chooseInstance as l,getBlockChainNameFromId as M,getEvmAccounts as C,Networks as s,switchNetworkForEvm as I,WalletTypes as L}from"@rango-dev/wallets-shared";import{evmBlockchains as U,solanaBlockchain as F}from"rango-types";import{Networks as m}from"@rango-dev/wallets-shared";function w(){let{coin98:e,ethereum:n}=window;if(!e)return null;let t=new Map;return e.provider&&t.set(m.ETHEREUM,e.provider),n&&n.isCoin98&&t.set(m.ETHEREUM,n),e.sol&&t.set(m.SOLANA,e.sol),t}o(w,"coin98");async function S(e){return await e.enable(),{accounts:await e.request({method:"sol_accounts"})}}o(S,"getSolanaAccounts");import{DefaultEvmSigner as x}from"@rango-dev/signer-evm";import{Networks as f,getNetworkInstance as d}from"@rango-dev/wallets-shared";import{DefaultSignerFactory as A,TransactionType as E}from"rango-types";import{SignerError as y}from"rango-types";import{PublicKey as T}from"@solana/web3.js";import v from"bs58";import{generalSolanaTransactionExecutor as N}from"@rango-dev/signer-solana";var i=class{constructor(n){this.provider=n}async signMessage(){throw y.UnimplementedError("signMessage")}async signAndSendTx(n){return{hash:await N(n,o(async c=>{let a=await this.provider.request({method:"sol_sign",params:[c]}),g=new T(a.publicKey),h=v.decode(a.signature);return c.addSignature(g,Buffer.from(h)),c.serialize()},"DefaultSolanaSigner"))}}};o(i,"CustomSolanaSigner");function p(e){let n=d(e,f.ETHEREUM),t=d(e,f.SOLANA),r=new A;return r.registerSigner(E.EVM,new x(n)),r.registerSigner(E.SOLANA,new i(t)),r}o(p,"getSigners");var P=L.COIN98,se={type:P,defaultNetwork:s.ETHEREUM},ie=w,le=o(async({instance:e,meta:n})=>{let t=l(e,n,s.ETHEREUM),r=l(e,n,s.SOLANA),c=await C(t),{accounts:a}=await S(r);return[c,{accounts:a,chainId:s.SOLANA}]},"connect"),ge=o(({instance:e,meta:n,updateChainId:t,connect:r})=>{l(e,n,s.ETHEREUM)?.on("chainChanged",a=>{let g=M(a,n)||s.Unknown;l(e,n,g).request({method:"eth_requestAccounts"}).then(()=>{}).catch(u=>{console.log({err:u})}),t(a),r(g)})},"subscribe"),me=o(async e=>{let n=l(e.instance,e.meta,e.network);return I({...e,instance:n})},"switchNetwork"),pe=b,he=p,ue=o(e=>{let n=U(e),t=F(e);return{name:"Coin98",img:"https://raw.githubusercontent.com/rango-exchange/assets/main/wallets/coin98/icon.svg",installLink:{CHROME:"https://chrome.google.com/webstore/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg",BRAVE:"https://chrome.google.com/webstore/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg",DEFAULT:"https://coin98.com/wallet"},color:"#1d1c25",supportedChains:[...n,...t]}},"getWalletInfo");export{pe as canSwitchNetworkTo,se as config,le as connect,ie as getInstance,he as getSigners,ue as getWalletInfo,ge as subscribe,me as switchNetwork};
//# sourceMappingURL=index.js.map
