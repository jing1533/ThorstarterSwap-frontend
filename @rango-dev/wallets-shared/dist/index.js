var S=Object.defineProperty;var a=(e,n)=>S(e,"name",{value:n,configurable:!0});var w=!process.env.NODE_ENV||process.env.NODE_ENV==="development",L=a((e,n)=>(e=typeof e=="string"&&e.startsWith("0x")?parseInt(e):e,Object.values(E).includes(String(e))?e:e==="Binance-Chain-Tigris"?"BNB":n.filter(r=>!!r.chainId).find(r=>(r.chainId?.startsWith("0x")?parseInt(r.chainId):r.chainId)==e)?.name||null),"getBlockChainNameFromId"),U=a((e,n)=>n[e]?.chainId||null,"getBlockchainChainIdByName"),H=a(e=>Buffer.from(e).toString("hex"),"uint8ArrayToHex"),N=(i=>(i.META_MASK="metamask",i.WALLET_CONNECT_2="wallet-connect-2",i.TRUST_WALLET="trust-wallet",i.KEPLR="keplr",i.PHANTOM="phantom",i.BINANCE_CHAIN="binance-chain",i.BITGET="bitget",i.TRON_LINK="tron-link",i.COINBASE="coinbase",i.XDEFI="xdefi",i.CLOVER="clover",i.ARGENTX="argentx",i.FRONTIER="frontier",i.COSMOSTATION="cosmostation",i.COIN98="coin98",i.SAFEPAL="safepal",i.SAFE="safe",i.TOKEN_POCKET="token-pocket",i.BRAVE="brave",i.BRAAVOS="braavos",i.MATH="math",i.EXODUS="exodus",i.OKX="okx",i.HALO="halo",i.LEAP="leap",i.LEAP_COSMOS="leap-cosmos",i.STATION="station",i.ENKRYPT="enkrypt",i.TAHO="taho",i.MY_TON_WALLET="mytonwallet",i))(N||{}),E=(o=>(o.BTC="BTC",o.BSC="BSC",o.LTC="LTC",o.THORCHAIN="THOR",o.BCH="BCH",o.BINANCE="BNB",o.ETHEREUM="ETH",o.POLYGON="POLYGON",o.TERRA="TERRA",o.POLKADOT="",o.TRON="TRON",o.DOGE="DOGE",o.HARMONY="HARMONY",o.AVAX_CCHAIN="AVAX_CCHAIN",o.FANTOM="FANTOM",o.MOONBEAM="MOONBEAM",o.ARBITRUM="ARBITRUM",o.BOBA="BOBA",o.OPTIMISM="OPTIMISM",o.FUSE="FUSE",o.CRONOS="CRONOS",o.SOLANA="SOLANA",o.MOONRIVER="MOONRIVER",o.GNOSIS="GNOSIS",o.COSMOS="COSMOS",o.OSMOSIS="OSMOSIS",o.AKASH="AKASH",o.IRIS="IRIS",o.PERSISTENCE="PERSISTENCE",o.SENTINEL="SENTINEL",o.REGEN="REGEN",o.CRYPTO_ORG="CRYPTO_ORG",o.SIF="SIF",o.CHIHUAHUA="CHIHUAHUA",o.JUNO="JUNO",o.KUJIRA="KUJIRA",o.STARNAME="STARNAME",o.COMDEX="COMDEX",o.STARGAZE="STARGAZE",o.DESMOS="DESMOS",o.BITCANNA="BITCANNA",o.SECRET="SECRET",o.INJECTIVE="INJECTIVE",o.LUMNETWORK="LUMNETWORK",o.BANDCHAIN="BANDCHAIN",o.EMONEY="EMONEY",o.BITSONG="BITSONG",o.KI="KI",o.MEDIBLOC="MEDIBLOC",o.KONSTELLATION="KONSTELLATION",o.UMEE="UMEE",o.STARKNET="STARKNET",o.TON="TON",o.Unknown="Unkown",o))(E||{}),_=["BTC","LTC","THOR","BCH","BNB"],D=["keplr","cosmostation"];import{isAddress as re}from"ethers/lib/utils.js";function p(e){let n;if(e==null||typeof e!="object")return e;if(e instanceof Date)return n=new Date,n.setTime(e.getTime()),n;if(e instanceof Array){n=[];for(let t=0,r=e.length;t<r;t++)n[t]=p(e[t]);return n}if(e instanceof Object){n={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=p(e[t]));return n}throw new Error("Unable to copy obj! Its type isn't supported.")}a(p,"deepCopy");async function I(e,n,t){let r=t[n];try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:r?.chainId}]})}catch(s){let m=s;if(r)(m.code===4902||!m.code)&&await e.request({method:"wallet_addEthereumChain",params:[r]});else throw new Error(`It seems you don't have ${n} network on your wallet. Please add it manually.`);throw s}}a(I,"switchOrAddNetworkForMetamaskCompatibleWallets");function Z(e,n){let t=new Promise((r,s)=>{setTimeout(()=>{s("Timeout!")},n)});return Promise.race([e,t])}a(Z,"timeout");var A=a(e=>e.reduce((n,t)=>(n[t.name]={chainName:t.info.chainName,chainId:t.chainId,nativeCurrency:t.info.nativeCurrency,rpcUrls:t.info.rpcUrls,blockExplorerUrls:t.info.blockExplorerUrls},n),{}),"convertEvmBlockchainMetaToEvmChainInfo"),$=a(e=>Object.fromEntries(new Map(Object.keys(e).map(n=>{let t=e[n];return t?[parseInt(t.chainId),t.rpcUrls[0]]:[0,""]}))),"evmChainsToRpcMap"),j=a(async({instance:e})=>({accounts:[(await e.connect()).publicKey.toString()],chainId:"SOLANA"}),"getSolanaAccounts");function W(e="coinbase"){let{ethereum:n,coinbaseSolana:t}=window,r=new Map;if(n){let s=e==="metamask"?"isMetaMask":"isCoinbaseWallet";if(e==="coinbase"&&n[s])r.set("ETH",n);else if(n.providers?.length){let m=n.providers.find(c=>c[s]);r.set("ETH",m)}}return t&&e==="coinbase"&&r.set("SOLANA",t),r.size===0?null:e==="metamask"?r.get("ETH"):r}a(W,"getCoinbaseInstance");function Q(e){return e.sort((n,t)=>Number(t.connected)-Number(n.connected)||Number(t.extensionAvailable)-Number(n.extensionAvailable))}a(Q,"sortWalletsBasedOnState");function M(){let e=!1,n=navigator;return n.brave&&n.brave.isBrave&&n.brave.isBrave().then(t=>{t&&(e=!0)}),e}a(M,"isBrave");function ee(e){if(typeof e!="object")return e;{let n;return M()?n=e.BRAVE:navigator.userAgent?.toLowerCase().indexOf("chrome")!==-1?n=e.CHROME:navigator.userAgent?.toLowerCase().indexOf("firefox")!==-1?n=e.FIREFOX:navigator.userAgent?.toLowerCase().indexOf("edge")!==-1&&(n=e.EDGE),n||e.DEFAULT}}a(ee,"detectInstallLink");function ne(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}a(ne,"detectMobileScreens");import{isEvmBlockchain as O}from"rango-types";async function de(e){let[n,t]=await Promise.all([e.request({method:"eth_requestAccounts"}),e.request({method:"eth_chainId"})]);return{accounts:n,chainId:t}}a(de,"getEvmAccounts");var fe=a(({instance:e,state:n,updateChainId:t,updateAccounts:r})=>{e?.on("accountsChanged",s=>{n.connected&&r(s)}),e?.on("chainChanged",s=>{t(s)})},"subscribeToEvm"),Ce=a(async({instance:e})=>{try{return!!(await e.request({method:"eth_accounts"})).length}catch{return!1}},"canEagerlyConnectToEvm"),Ie=a(async({instance:e,network:n,meta:t})=>{let r=t.filter(O),s=T(e,"ETH");await I(s,n,A(r))},"switchNetworkForEvm"),Ae=a(({network:e,meta:n})=>C(n).includes(e),"canSwitchNetworkToEvm");function C(e){return e.filter(O).map(n=>n.name)}a(C,"evmNetworkNames");function B(e,n){return e&&C(n).includes(e)?"ETH":null}a(B,"getEthChainsInstance");function x(e,n){return e?C(n).includes(e):!1}a(x,"isEvmNetwork");function Oe(e,n,t){t=t||"ETH";let r=x(t,n)?B(t,n):t;return e&&r?e.get(r):null}a(Oe,"chooseInstance");function T(e,n){return e.size?e.get(n):e}a(T,"getNetworkInstance");var R=a(e=>e.filter(n=>!n.info?.experimental).map(n=>n.chainId).filter(n=>!!n),"getCosmosMainChainsIds"),v=a(e=>e.filter(n=>n.info?.experimental).map(n=>n.chainId).filter(n=>!!n),"getCosmosMiscChainsIds"),y=a(e=>e.filter(n=>!!n.info).filter(n=>!!n.chainId).reduce((n,t)=>{let r=p(t.info);r.stakeCurrency.coinImageUrl=window.location.origin+r.stakeCurrency.coinImageUrl,r.currencies=r.currencies.map(c=>({...c,coinImageUrl:window.location.origin+c.coinImageUrl})),r.feeCurrencies=r.feeCurrencies.map(c=>({...c,coinImageUrl:window.location.origin+c.coinImageUrl})),r.gasPriceStep||delete r.gasPriceStep;let{experimental:s,...m}=r;return n[t.name]={id:t.chainId,info:{...m,chainId:t.chainId},experimental:s},n},{}),"getCosmosExperimentalChainInfo");async function b({desiredChainIds:e,instance:n}){let t=e.map(c=>({signer:n.getOfflineSigner(c),chainId:c})).filter(Boolean),r=t.map(({signer:c})=>c.getAccounts()),s=await Promise.allSettled(r),m=[];return s.forEach((c,l)=>{if(c.status!=="fulfilled")return;let u=c.value,{chainId:h}=t[l],d=u.map(f=>f.address);m.push({accounts:d,chainId:h})}),m}a(b,"getMainAccounts");async function P({excludedChain:e,instance:n,meta:t}){let r=v(t).filter(l=>l!==e).map(l=>({signer:n.getOfflineSigner(l),chainId:l})),s=r.map(({signer:l})=>l.getAccounts()),m=await Promise.allSettled(s),c=[];return m.forEach((l,u)=>{if(l.status!=="fulfilled")return;let h=l.value,{chainId:d}=r[u],f=h.map(g=>g.address);c.push({accounts:f,chainId:d})}),c}a(P,"tryRequestMiscAccounts");var Me=a(async({instance:e,network:n,meta:t})=>{let r=n?y(t)[n]:null;if(n&&!r)throw new Error(`You need to add ${n} to "COSMOS_EXPERIMENTAL_CHAINS_INFO" first.`);r&&await e.experimentalSuggestChain(r.info);let s=R(t);r&&s.push(r.id),s=Array.from(new Set(s)).filter(Boolean),await e.enable(s);let m=await b({desiredChainIds:s,instance:e}),c=r?r.id:void 0,l=c?await P({instance:e,meta:t,excludedChain:c}):[];return[...m,...l]},"getCosmosAccounts");export{w as IS_DEV,D as KEPLR_COMPATIBLE_WALLETS,E as Networks,N as WalletTypes,_ as XDEFI_WALLET_SUPPORTED_NATIVE_CHAINS,Ce as canEagerlyConnectToEvm,Ae as canSwitchNetworkToEvm,Oe as chooseInstance,A as convertEvmBlockchainMetaToEvmChainInfo,p as deepCopy,ee as detectInstallLink,ne as detectMobileScreens,$ as evmChainsToRpcMap,C as evmNetworkNames,L as getBlockChainNameFromId,U as getBlockchainChainIdByName,W as getCoinbaseInstance,Me as getCosmosAccounts,y as getCosmosExperimentalChainInfo,B as getEthChainsInstance,de as getEvmAccounts,T as getNetworkInstance,j as getSolanaAccounts,re as isEvmAddress,Q as sortWalletsBasedOnState,fe as subscribeToEvm,Ie as switchNetworkForEvm,I as switchOrAddNetworkForMetamaskCompatibleWallets,Z as timeout,H as uint8ArrayToHex};
//# sourceMappingURL=index.js.map
