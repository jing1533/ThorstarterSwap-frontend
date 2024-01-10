var Tt=Object.defineProperty;var l=(e,t)=>Tt(e,"name",{value:t,configurable:!0});var Et="c6381a79-2817-4602-83bf-6a641a409e32",ge={API_KEY:Et};function Te(e){return ge[e]||""}l(Te,"getConfig");function Oe(e){let t;return typeof structuredClone=="function"?t=structuredClone(e):t=JSON.parse(JSON.stringify(e)),ge=t,ge}l(Oe,"initConfig");var Ee=(n=>(n.RouteEvent="routeEvent",n.StepEvent="stepEvent",n))(Ee||{}),fe=(r=>(r.STARTED="started",r.FAILED="failed",r.SUCCEEDED="succeeded",r))(fe||{}),Y=(r=>(r.CREATE_TX="create_tx",r.SEND_TX="send_tx",r.TX_SENT="tx_sent",r))(Y||{}),te=(a=>(a.WAITING_FOR_QUEUE="waiting_for_queue",a.WAITING_FOR_WALLET_CONNECT="waiting_for_wallet_connect",a.WAITING_FOR_NETWORK_CHANGE="waiting_for_network_change",a.WAITING_FOR_CHANGE_WALLET_ACCOUNT="waiting_for_change_wallet_account",a))(te||{}),B=(u=>(u.STARTED="started",u.FAILED="failed",u.SUCCEEDED="succeeded",u.TX_EXECUTION="tx_execution",u.TX_EXECUTION_BLOCKED="tx_execution_blocked",u.APPROVAL_TX_SUCCEEDED="approval_tx_succeeded",u.CHECK_STATUS="check_status",u.OUTPUT_REVEALED="output_revealed",u))(B||{});import{getBlockChainNameFromId as bt,Networks as Ut}from"@rango-dev/wallets-shared";import{readAccountAddress as Mt}from"@rango-dev/wallets-react";import{TransactionType as b}from"rango-sdk";var me="Waiting for other swaps to complete",De="Waiting for connecting wallet",Pe=l((e,t)=>`Please change your ${e||"wallet"} account to ${t||"proper address"}`,"ERROR_MESSAGE_WAIT_FOR_WALLET_DESCRIPTION_WRONG_WALLET"),ne=l(e=>`Please connect to ${e||"your wallet"} by using bellow button or top right button on page.`,"ERROR_MESSAGE_WAIT_FOR_WALLET_DESCRIPTION"),re=l(e=>`Please change your network to ${e}.`,"ERROR_MESSAGE_WAIT_FOR_CHANGE_NETWORK"),v="CLIENT_UNEXPECTED_BEHAVIOUR";import{Status as xe}from"@rango-dev/queue-manager-core";import{SignerErrorCode as q,SignerError as ft,isSignerErrorCode as mt,isAPIErrorCode as wt}from"rango-types";var At="Assertion failed (Unexpected behaviour)",Ct="Create transaction failed in Rango Server",We="Input wallet not found",y=class extends Error{constructor(n,r,a,o){super(r);this._isPrettyError=!0;Object.setPrototypeOf(this,y.prototype),y.prototype._isPrettyError=!0,this.code=n,this.detail=o,this.root=a}static isPrettyError(n){return n instanceof y||Object.prototype.hasOwnProperty.call(n,"_isPrettyError")}getErrorDetail(){let n=typeof this.root=="object"&&this.root&&this.root.error?this.root.error:JSON.stringify(this.root),r=typeof this.root=="string"?this.root:this.root instanceof Error?this.root.message:n;return{extraMessage:this.message,extraMessageDetail:this.detail||r,extraMessageErrorCode:this.code||null}}static AssertionFailed(n){return new y("CLIENT_UNEXPECTED_BEHAVIOUR",At,null,n)}static BadStatusCode(n,r){return new y("TX_FAIL",n,null,`status code = ${r}`)}static CreateTransaction(n){return new y("FETCH_TX_FAILED",Ct,null,n)}static WalletMissing(){return new y("CLIENT_UNEXPECTED_BEHAVIOUR",We,null,"Server requested for a blockchain or address not selected by user")}static BlockchainMissing(){return new y("CLIENT_UNEXPECTED_BEHAVIOUR",We,null,"Server requested for a blockchain or address not selected by user")}};l(y,"PrettyError");function be(e){try{return e?wt(e)?e:mt(e)?{[q.REJECTED_BY_USER]:"USER_REJECT",[q.SIGN_TX_ERROR]:"CALL_WALLET_FAILED",[q.SEND_TX_ERROR]:"SEND_TX_FAILED",[q.TX_FAILED_IN_BLOCKCHAIN]:"TX_FAILED_IN_BLOCKCHAIN",[q.NOT_IMPLEMENTED]:v,[q.OPERATION_UNSUPPORTED]:v,[q.UNEXPECTED_BEHAVIOUR]:v}[e]:v:v}catch{return v}}l(be,"mapAppErrorCodesToAPIErrorCode");var Q=l(e=>{if(!e)return{extraMessage:"",extraMessageErrorCode:null};if(y.isPrettyError(e))return e.getErrorDetail();if(ft.isSignerError(e)){let t=e.getErrorDetail();return{extraMessage:t.message,extraMessageDetail:t.detail,extraMessageErrorCode:t.code}}return e instanceof Error?{extraMessage:e.toString(),extraMessageErrorCode:null}:typeof e!="string"?{extraMessage:JSON.stringify(e),extraMessageErrorCode:null}:{extraMessage:e,extraMessageErrorCode:null}},"prettifyErrorMessage");import Fe from"bignumber.js";import Ue from"bignumber.js";var Me=l((e,t=null,n=null)=>{if(e===null||e==="")return"";let r=new Ue(e),a=1,o=1e3;for(let c=0;c<60;c++)if(new Ue(r.toFixed(c,a)).eq(r)){o=c;break}if(r.gte(1e4))return r.toFormat(0,a);if(r.gte(1e3)||r.gte(100))return r.toFormat(Math.min(o,Math.min(n||100,Math.max(t||0,1))),a);if(r.gte(1))return r.toFormat(Math.min(o,Math.min(n||100,Math.max(t||0,2))),a);if(r.gte(.01))return r.toFormat(Math.min(o,Math.min(n||100,Math.max(t||0,4))),a);for(let c=t||4;c<17;c++)if(r.gte(Math.pow(10,-c)))return r.toFormat(Math.min(o,Math.min(n||100,Math.max(t||0,c))),a);return r.isEqualTo(0)?"0":r.toFormat(Math.min(o,Math.min(n||100,Math.max(t||0,8))),a)},"numberToString");import{isCosmosBlockchain as xt,isEvmBlockchain as yt,isStarknetBlockchain as _t,isTronBlockchain as kt}from"rango-types";var ae=(a=>(a.WaitingForConnectingWallet="waitingForConnectingWallet",a.WaitingForQueue="waitingForQueue",a.WaitingForNetworkChange="waitingForNetworkChange",a.NetworkChanged="networkChanged",a))(ae||{}),oe=(a=>(a.error="error",a.warning="warning",a.info="info",a.success="success",a))(oe||{}),U=l((e,t)=>{try{return M(e,t)}catch{return null}},"getCurrentBlockchainOfOrNull"),M=l((e,t)=>{let n=t.evmTransaction?.blockChain||t.evmApprovalTransaction?.blockChain||t.starknetTransaction?.blockChain||t.starknetApprovalTransaction?.blockChain||t.tronTransaction?.blockChain||t.tronApprovalTransaction?.blockChain||t.cosmosTransaction?.blockChain||t.solanaTransaction?.blockChain||t.tonTransaction?.blockChain;if(n)return n;let r=t.transferTransaction?.fromWalletAddress;if(!r)throw y.BlockchainMissing();let a=Object.keys(e.wallets).find(o=>e.wallets[o]?.address===r)||null;if(a==null)throw y.BlockchainMissing();return a},"getCurrentBlockchainOf"),vt=l(e=>{if(xt(e))return e.info?.explorerUrlToTx;if(yt(e)||_t(e)||kt(e))return e.info.transactionUrl},"getBlockchainMetaExplorerBaseUrl"),J=l((e,t,n)=>{let r=n[t],a=vt(r);if(a)return a.indexOf("/{txHash}")!==-1?a.replace("{txHash}",e?.toLowerCase()):`${a}/${e?.toLowerCase()}`},"getScannerUrl");function Le(e,t){return e.steps.find(n=>n.status!=="failed"&&n.status!=="success"&&n.id!==t.id)||null}l(Le,"getNextStep");var we=l((e,t)=>{let n=e.wallets[t.evmTransaction?.blockChain||""]||e.wallets[t.evmApprovalTransaction?.blockChain||""]||e.wallets[t.tronTransaction?.blockChain||""]||e.wallets[t.tronApprovalTransaction?.blockChain||""]||e.wallets[t.starknetTransaction?.blockChain||""]||e.wallets[t.starknetApprovalTransaction?.blockChain||""]||e.wallets[t.cosmosTransaction?.blockChain||""]||e.wallets[t.solanaTransaction?.blockChain||""]||e.wallets[t.tonTransaction?.blockChain||""]||(t.transferTransaction?.fromWalletAddress?{address:t.transferTransaction?.fromWalletAddress}:null)||null;if(n==null)throw y.WalletMissing();return n.address},"getCurrentAddressOf");function K(e,t){let n=we(e,t),r=Object.keys(e.wallets).map(i=>({k:i,v:e.wallets[i]})).find(({v:i})=>i.address===n)||null,a=r?.k||null,o=r?.v||null,c=o?.walletType;if(o===null)throw y.AssertionFailed(`Wallet for source ${a} not passed: walletType: ${c}`);return o}l(K,"getRelatedWallet");function Ae(e,t){try{return K(e,t)}catch{return null}}l(Ae,"getRelatedWalletOrNull");var Rt=l((e,t,n,r)=>r?.find(o=>o.blockchain===e&&o.symbol?.toUpperCase()===t?.toUpperCase()&&o.address===n)?.usdPrice||null,"getUsdPrice");function ht(e,t){let n=new Fe(0);for(let r=0;r<e.fee.length;r++){let a=e.fee[r];if(a.expenseType==="DECREASE_FROM_OUTPUT")continue;let o=Rt(a.asset.blockchain,a.asset.symbol,a.asset.address,t);n=n.plus(new Fe(a.amount).multipliedBy(o||0))}return n}l(ht,"getUsdFeeOfStep");function Nt(e,t,n,r,a,o){let c=t.result;if(!c)throw Error("Simulation result should not be null");return{creationTime:new Date().getTime().toString(),finishTime:null,requestId:t.requestId||"",inputAmount:e,wallets:n,status:"running",isPaused:!1,extraMessage:null,extraMessageSeverity:null,extraMessageDetail:null,extraMessageErrorCode:null,networkStatusExtraMessage:null,networkStatusExtraMessageDetail:null,lastNotificationTime:null,settings:r,simulationResult:c,validateBalanceOrFee:a,steps:t.result?.swaps?.map((i,u)=>({id:u+1,fromBlockchain:i.from.blockchain,fromBlockchainLogo:i.from.blockchainLogo,fromLogo:i.from.logo,fromSymbol:i.from.symbol,fromSymbolAddress:i.from.address,fromDecimals:i.from.decimals,fromAmountPrecision:i.fromAmountPrecision,fromAmountMinValue:i.fromAmountMinValue,fromAmountMaxValue:i.fromAmountMaxValue,fromAmountRestrictionType:i.fromAmountRestrictionType,toBlockchain:i.to.blockchain,toBlockchainLogo:i.to.blockchainLogo,toSymbol:i.to.symbol,toSymbolAddress:i.to.address,toDecimals:i.to.decimals,toLogo:i.to.logo,swapperId:i.swapperId,swapperLogo:i.swapperLogo,swapperType:i.swapperType,expectedOutputAmountHumanReadable:i.toAmount,outputAmount:"",feeInUsd:o?Me(ht(i,o?.tokens),null,8):null,estimatedTimeInSeconds:i.estimatedTimeInSeconds||null,status:"created",networkStatus:null,startTransactionTime:new Date().getTime(),externalTransactionId:null,executedTransactionId:null,executedTransactionTime:null,explorerUrl:null,diagnosisUrl:null,trackingCode:null,internalSteps:null,evmTransaction:null,evmApprovalTransaction:null,starknetTransaction:null,starknetApprovalTransaction:null,tronTransaction:null,tronApprovalTransaction:null,cosmosTransaction:null,solanaTransaction:null,transferTransaction:null,tonTransaction:null,hasAlreadyProceededToSign:!1}))||[]}}l(Nt,"calculatePendingSwap");import*as Be from"@sentry/browser";function Qe(e,t,n,r){try{Be.captureException(e,{tags:{requestId:t.requestId,rpc:!0,swapper:n?.swapperId||"",walletType:r||""},level:"warning"})}catch(a){console.log({e:a})}}l(Qe,"logRPCError");import{RangoClient as It}from"rango-sdk";var se,X=l(()=>se||(se=new It(Te("API_KEY"),Te("BASE_URL")),se),"httpService");import Ot from"mitt";function Xe(e){return e.map(t=>{let{diagnosisUrl:n,estimatedTimeInSeconds:r,explorerUrl:a,feeInUsd:o,executedTransactionId:c,executedTransactionTime:i,expectedOutputAmountHumanReadable:u,fromBlockchain:s,toBlockchain:d,fromSymbol:p,toSymbol:g,fromSymbolAddress:T,toSymbolAddress:E,swapperType:_,swapperId:S,outputAmount:w,fromAmountMaxValue:m,fromAmountMinValue:x,fromAmountPrecision:R,fromAmountRestrictionType:C,fromDecimals:k,status:O}=t;return{diagnosisUrl:n,estimatedTimeInSeconds:r,explorerUrl:a,feeInUsd:o,executedTransactionId:c,executedTransactionTime:i,expectedOutputAmountHumanReadable:u,fromBlockchain:s,toBlockchain:d,fromSymbol:p,toSymbol:g,fromSymbolAddress:T,toSymbolAddress:E,swapperName:S,swapperType:_,outputAmount:w,fromAmountMaxValue:m,fromAmountMinValue:x,fromAmountPrecision:R,fromAmountRestrictionType:C,fromDecimals:k,status:O,transaction:F(t)}})}l(Xe,"createSteps");function Dt(e,t,n){let{creationTime:r,finishTime:a,requestId:o,inputAmount:c,status:i,wallets:u,steps:s,settings:d}=e,p=Xe(s),T={route:{creationTime:r,finishTime:a,requestId:o,inputAmount:c,status:i,wallets:u,steps:p,slippage:d.slippage,infiniteApproval:d.infiniteApprove},step:p[p.length-1]};if(n)T.step=Xe([n])[0];else if(t==="failed"){let E=Ge(p);E&&(T.step=E)}else{let E=z(p);E&&(T.step=E)}return T}l(Dt,"getEventPayload");var ie=Ot();function Pt(e,t){let n,{type:r}=e;switch(r){case"started":n={...e,type:"started"};break;case"failed":n={...e,type:"failed"};break;case"succeeded":n={...e,type:"succeeded"};break;default:break}n&&ie.emit("routeEvent",{event:n,route:t})}l(Pt,"emitRouteEvent");function Wt(e,t,n){ie.emit("stepEvent",{event:e,route:t,step:n})}l(Wt,"emitStepEvent");function f(e){let{event:t}=e,{type:n}=t,{route:r,step:a}=Dt(e.swap,n,e.step??void 0),o=`${a.fromBlockchain}.${a.fromSymbol}`,c=`${a.toBlockchain}.${a.toSymbol}`,i=a.outputAmount??"",u=e.step?U(e.swap,e.step):null,s="",d="info";switch(n){case"started":s="Swap process started",d="success";break;case"succeeded":s=`You received ${i} ${c}, hooray!`,d="success";break;case"failed":s=`Swap failed: ${e.swap?.extraMessage??"Reason is unknown"}`,d="error";break;case"tx_execution":t.status==="create_tx"?(s="Please wait while the transaction is created ...",d="info"):t.status==="send_tx"?(e.step&&j(e.step)?s=`Please confirm '${a.swapperName}' smart contract access to ${o}`:s="Please confirm transaction request in your wallet",d="warning"):t.status==="tx_sent"&&(s="Transaction sent successfully",d="info");break;case"check_status":e.step&&j(e.step)?s="Checking approve transacation status ...":s="Checking transacation status ...",d="info";break;case"approval_tx_succeeded":s="Smart contract called successfully",d="success";break;case"output_revealed":s="Transaction output amount revealed",d="success";break;case"tx_execution_blocked":t.status==="waiting_for_wallet_connect"?(s="Please connect your wallet.",d="warning"):t.status==="waiting_for_queue"?(s="Waiting for other swaps to complete",d="warning"):t.status==="waiting_for_change_wallet_account"?(s="Please change your wallet account.",d="warning"):t.status==="waiting_for_network_change"&&(s=`Please change your wallet network to ${u}.`,d="warning");break;default:break}e.step?Wt({...t,message:s,messageSeverity:d},r,a):Pt({...t,message:s,messageSeverity:d},r)}l(f,"notifier");var Ce=null;function le(){return{claimedBy:()=>Ce?.id,setClaimer:e=>{Ce={id:e}},reset:()=>{Ce=null}}}l(le,"claimQueue");var $={};function ce(){return{getTransactionDataByHash:e=>$[e]||{},setTransactionDataByHash:(e,t)=>{$[e]||($[e]={}),$[e].response=t.response||$[e].response,$[e].receiptReceived=t.receiptReceived||$[e].receiptReceived||!1}}}l(ce,"inMemoryTransactionsData");function ye(e){let n=(e?.split(":")[0]||"").split("-"),r=n[n.length-1],a=n.slice(0,-1);return a[a.length-1]===r&&a.pop(),[a.join("-"),r]}l(ye,"splitWalletNetwork");var A=l(e=>e.steps.find(t=>t.status!=="failed"&&t.status!=="success")||null,"getCurrentStep"),F=l(e=>{let{evmTransaction:t,evmApprovalTransaction:n,cosmosTransaction:r,solanaTransaction:a,transferTransaction:o,starknetApprovalTransaction:c,starknetTransaction:i,tronApprovalTransaction:u,tronTransaction:s,tonTransaction:d}=e;return t||n||r||a||o||c||i||u||s||d},"getCurrentStepTx"),ue=l((e,t)=>{e.transferTransaction=null,e.cosmosTransaction=null,e.evmTransaction=null,e.solanaTransaction=null,e.evmApprovalTransaction=null,e.starknetApprovalTransaction=null,e.starknetTransaction=null,e.tronApprovalTransaction=null,e.tronTransaction=null,e.tonTransaction=null;let n=t.type;switch(n){case b.EVM:t.isApprovalTx?e.evmApprovalTransaction=t:e.evmTransaction=t;break;case b.TRON:t.isApprovalTx?e.tronApprovalTransaction=t:e.tronTransaction=t;break;case b.STARKNET:t.isApprovalTx?e.starknetApprovalTransaction=t:e.starknetTransaction=t;break;case b.COSMOS:e.cosmosTransaction=t;break;case b.SOLANA:e.solanaTransaction=t;break;case b.TRANSFER:e.transferTransaction=t;break;case b.TON:e.tonTransaction=t;break;default:(r=>{throw new Error(`${r} was unhandled!`)})(n)}return e},"setCurrentStepTx"),_e=l(e=>F(e)?.type,"getCurrentStepTxType"),j=l(e=>{let{evmApprovalTransaction:t,starknetApprovalTransaction:n,tronApprovalTransaction:r}=e;return!!(t||n||r)},"isApprovalCurrentStepTx");function D({getStorage:e,setStorage:t,nextStatus:n,nextStepStatus:r,message:a,details:o,errorCode:c=null,hasAlreadyProceededToSign:i}){let u=e().swapDetails,s=A(u),d={swap:u,step:s};if(r&&s&&(s.status=r),n&&(u.status=n),u.hasAlreadyProceededToSign=i,n&&["failed","success"].includes(n)&&(u.finishTime=new Date().getTime().toString()),(a||o)&&(u.extraMessage=a||"",u.extraMessageDetail=o||""),r&&["failed"].includes(r)){let p=o&&o.includes("Warning")?"Swap canceled by user.":o,g=Ae(u,s)?.walletType;u.extraMessageSeverity="error";let T=be(c);d.failureType=T,X().reportFailure({requestId:u.requestId,step:s?.id||1,eventType:T,reason:p||"",tags:g?{wallet:g}:void 0}).then().catch()}else r&&["running"].includes(r)?u.extraMessageSeverity="info":r&&["success","approved"].includes(r)?u.extraMessageSeverity="success":r&&["waitingForApproval"].includes(r)&&(u.extraMessageSeverity="warning");return r==="running"&&s&&(s.startTransactionTime=new Date().getTime()),t({...e(),swapDetails:u}),d}l(D,"updateSwapStatus");function Ft({getStorage:e,setStorage:t},n,r){let a=e().swapDetails;a.hasAlreadyProceededToSign=null;let o=A(a);o.executedTransactionId=n,o.executedTransactionTime=new Date().getTime().toString(),r?.url&&(o.explorerUrl=[...o.explorerUrl||[],{url:r.url,description:r.description||null}]),j(o)?a.extraMessage="Checking approve transaction status ...":a.extraMessage="Checking transaction status ...",a.extraMessageDetail="",a.extraMessageSeverity="info",t({...e(),swapDetails:a}),f({event:{type:"tx_execution",status:"tx_sent"},swap:a,step:o}),f({event:{type:"check_status"},swap:a,step:o})}l(Ft,"setStepTransactionIds");function Lt({getStorage:e,setStorage:t},n,r){let a=e().swapDetails,o=A(a);if(!o)return;let c=new Date;a.lastNotificationTime=c.getTime().toString(),!(o.networkStatus==="waitingForConnectingWallet"&&a.networkStatusExtraMessage===n&&a.networkStatusExtraMessageDetail===r)&&(o.networkStatus="waitingForConnectingWallet",a.networkStatusExtraMessage=n,a.networkStatusExtraMessageDetail=r,t({...e(),swapDetails:a}))}l(Lt,"markRunningSwapAsWaitingForConnectingWallet");function qe({getStorage:e,setStorage:t}){let n=e().swapDetails,r=A(n);if(!r)return;let{type:a}=P(n),o=M(n,r),c=`Change ${a} wallet network to ${o}`,i=`Please change your ${a} wallet network to ${o}.`,u=new Date;return n.lastNotificationTime=u.getTime().toString(),r.networkStatus="waitingForNetworkChange",n.networkStatusExtraMessage=c,n.networkStatusExtraMessageDetail=i,t({...e(),swapDetails:n}),{swap:n,step:r}}l(qe,"markRunningSwapAsSwitchingNetwork");function Ke({getStorage:e,setStorage:t}){let n=e().swapDetails,r=A(n);if(r)return n.networkStatusExtraMessage="",n.networkStatusExtraMessageDetail="",r.networkStatus="waitingForQueue",f({event:{type:"tx_execution_blocked",status:"waiting_for_queue"},swap:n,step:r}),t({...e(),swapDetails:n}),{swap:n,step:r}}l(Ke,"markRunningSwapAsDependsOnOtherQueues");function pe(e){return new Promise(t=>setTimeout(t,e))}l(pe,"delay");var Bt=l((e,t)=>e.wallets[t]?.walletType,"getSwapWalletType");function Qt(e){return e===null||e?.blockchains===null||e?.blockchains.length===0}l(Qt,"isWalletNull");function $e(e,t){return t&&e[t]?e[t].size?e[t].get(Ut.ETHEREUM):e[t]:null}l($e,"getEvmProvider");function P(e){let t=A(e),n=U(e,t);if(!n)return{type:null,network:null,address:null};let r=Bt(e,n),a=e.wallets[n];return{type:r||null,network:n,address:a?a.address:null}}l(P,"getRequiredWallet");async function Xt(e){try{return await e.request({method:"eth_chainId"})||e?.chainId}catch{return e?.chainId}}l(Xt,"getChainId");async function Ve(e,t,n,r,a){if(Qt(n))return!1;let o=U(e,t);if(!o)return!1;if(r.evmBasedChains.find(c=>c.name===o)){try{let c=e.wallets[o];if(c){let i=$e(a,c.walletType),u=await Xt(i);if(u){let s=bt(u,Object.entries(r.blockchains).map(([,d])=>d));if(s&&s.toLowerCase()===o.toLowerCase())return!0;if(s&&s.toLowerCase()!==o.toLowerCase())return!1}}}catch(c){console.log(c)}return!1}return!0}l(Ve,"isNetworkMatchedForTransaction");var Ye=l((e,t)=>(e.wallets[t.evmTransaction?.blockChain||""]||e.wallets[t.evmApprovalTransaction?.blockChain||""]||e.wallets[t.tronTransaction?.blockChain||""]||e.wallets[t.tronApprovalTransaction?.blockChain||""]||e.wallets[t.starknetTransaction?.blockChain||""]||e.wallets[t.starknetApprovalTransaction?.blockChain||""]||e.wallets[t.cosmosTransaction?.blockChain||""]||e.wallets[t.solanaTransaction?.blockChain||""]||e.wallets[t.tonTransaction?.blockChain||""]||t.transferTransaction?.fromWalletAddress||null)!==null,"isTxAlreadyCreated");function de(e){let{getStorage:t,setStorage:n}=e,r=t().swapDetails,a=A(r);a?.networkStatus&&(a.networkStatus=null,n({...t(),swapDetails:r}))}l(de,"resetNetworkStatus");function Je(e,t={message:"",details:"",status:null}){let{message:n,details:r,status:a}=t,{getStorage:o,setStorage:c}=e,i=o().swapDetails,u=A(i);u?.networkStatus&&(i.networkStatusExtraMessage=n,i.networkStatusExtraMessageDetail=r,u.networkStatus=a,c({...o(),swapDetails:i}))}l(Je,"updateNetworkStatus");function je(e,t){let{context:n,queue:r}=t,a=r.getStorage().swapDetails,{ok:o,reason:c}=ke(a,n.state);if(!o){let i=A(a),{type:u,address:s}=P(a);f({event:{type:"tx_execution_blocked",...c==="account_miss_match"?{status:"waiting_for_change_wallet_account",requiredAccount:s??void 0}:{status:"waiting_for_wallet_connect",requiredWallet:u??void 0,requiredAccount:s??void 0}},swap:a,step:i}),Lt({getStorage:r.getStorage.bind(r),setStorage:r.setStorage.bind(r)},De,e.reason.description);return}r.unblock()}l(je,"onBlockForConnectWallet");function ze(e,t){let{context:n,queue:r}=t,a=r.getStorage().swapDetails,o=A(a);if(!o||a.status!=="running")return;let c=qe({getStorage:r.getStorage.bind(r),setStorage:r.setStorage.bind(r)}),i=U(a,o),u=P(a).type,s=u?n.state(u).network:void 0;c&&f({event:{type:"tx_execution_blocked",status:"waiting_for_network_change",requiredNetwork:i??void 0,currentNetwork:s??void 0},swap:c.swap,step:c.step});let{type:d,network:p}=P(a);if(d&&p&&n.canSwitchNetworkTo(d,p)){let g=n.switchNetwork(d,p);g&&g.then(()=>{r.unblock()}).catch(T=>{console.log({error:T})})}}l(ze,"onBlockForChangeNetwork");function Ze(e,t){let{getBlockedTasks:n,forceExecute:r,queue:a,manager:o,context:c}=t,{setClaimer:i,claimedBy:u,reset:s}=le(),d=n().filter(m=>m.reason.reason==="depends_on_other_queues");if(d.length===0)return;let p=u(),g=!!p;if(p===a.id)return;if(g){Ke({getStorage:a.getStorage.bind(a),setStorage:a.setStorage.bind(a)});return}let T=d.find(m=>m.queue_id===t.queue_id);T||(T=d[0]),i(T.queue_id);let E=T.storage.get(),{type:_,network:S,address:w}=P(E.swapDetails);r(T.queue_id,{claimedBy:u(),resetClaimedBy:()=>{s(),Re(`${_}-${S}:${w}`,o,c.canSwitchNetworkTo)}})}l(Ze,"onDependsOnOtherQueues");function ke(e,t){let{type:n,address:r}=P(e);if(!n||!r)return{ok:!1,reason:"not_connected"};let a=t(n),{accounts:o,connected:c}=a,i=o||[];return c?{ok:i.some(s=>{let{address:d}=Mt(s);return r.toLocaleLowerCase()===d.toLocaleLowerCase()}),reason:"account_miss_match"}:{ok:!1,reason:"not_connected"}}l(ke,"isRequiredWalletConnected");function et(e){let{setTransactionDataByHash:t}=ce(),{getStorage:n,setStorage:r,failed:a,next:o,schedule:c,context:i}=e,{meta:u,getSigners:s,isMobileWallet:d}=i,p=n().swapDetails,g=A(p),T=K(p,g),E=d(T?.walletType),_=we(p,g),S=s(T.walletType),w=M(p,g),m=l(()=>{e.context.resetClaimedBy&&e.context.resetClaimedBy()},"onFinish"),x=F(g),R=x?.type,C=j(g);if(!x||!R){let I="Unexpected Error: tx is null!",W=D({getStorage:n,setStorage:r,nextStatus:"failed",nextStepStatus:"failed",message:I,details:void 0,errorCode:"CLIENT_UNEXPECTED_BEHAVIOUR"});return f({event:{type:"failed",reason:I,reasonCode:"CLIENT_UNEXPECTED_BEHAVIOUR"},...W}),a(),m()}let k=u.blockchains?.[x.blockChain]?.chainId,O=typeof p.hasAlreadyProceededToSign=="boolean",h,N,G,L,H;C?(G=`Waiting for approval of ${g?.fromSymbol} coin ${E?"on your mobile phone!":""}`,L="Waiting for approve transaction to be mined and confirmed successfully",N="waitingForApproval",h=void 0,H="tx_execution"):O?(G="Transaction is expired. Please try again.",N="failed",h="failed",L="",H="failed"):(G="Executing transaction ...",N="running",h="running",L=`${E?"Check your mobile phone!":""}`,H="tx_execution");let Se=D({getStorage:n,setStorage:r,nextStepStatus:N,nextStatus:h,message:G,details:L,hasAlreadyProceededToSign:C?void 0:O,errorCode:O?"TX_EXPIRED":void 0});if(H==="failed"?f({event:{type:H,reason:G,reasonCode:Se.failureType??v},...Se}):f({event:{type:H,status:"send_tx"},...Se}),O){a(),m();return}S.getSigner(R).signAndSendTx(x,_,k).then(({hash:I,response:W})=>{let ee=J(I,w,u.blockchains);Ft(e,I,ee&&(!W||W&&!W.hashRequiringUpdate)?{url:ee,description:C?"Approve":"Swap"}:void 0),W&&t(I,{response:W}),c("CHECK_TRANSACTION_STATUS"),o(),m()},I=>{if(p.status==="failed")return;let{extraMessage:W,extraMessageDetail:ee,extraMessageErrorCode:gt}=Q(I);Qe(I?.trace?.stack||I?.trace||I?.root||I,p,g,T?.walletType);let Ie=D({getStorage:n,setStorage:r,nextStatus:"failed",nextStepStatus:"failed",message:W,details:ee,errorCode:gt});f({event:{type:"failed",reason:W,reasonCode:Ie.failureType??v},...Ie}),a(),m()})}l(et,"singTransaction");function tt(e){let{wallet_network:t,evmChains:n,manager:r}=e,[a,o]=ye(t);n.some(c=>c.name==o)&&r?.getAll().forEach(c=>{let i=c.list.getStorage(),u=i?.swapDetails;if(u&&u.status==="running"){let s=A(u);if(s){let d=i?.swapDetails.wallets[s.fromBlockchain]?.walletType,p=Object.keys(c.list.state.tasks).some(T=>{let E=c.list.state.tasks[T];return E.status===xe.BLOCKED&&["waiting_for_connecting_wallet"].includes(E.blockedFor?.reason)}),g=U(u,s);if(d===a&&p&&g!=o){let T=c.list,{type:E}=P(u),_=re(E);c.list.block({reason:{reason:"waiting_for_network_change",description:_},silent:!0});let S=qe({getStorage:T.getStorage.bind(T),setStorage:T.setStorage.bind(T)});S&&f({event:{type:"tx_execution_blocked",status:"waiting_for_network_change",currentNetwork:o,requiredNetwork:g??void 0},swap:S.swap,step:S.step})}}}})}l(tt,"checkWaitingForConnectWalletChange");function ve(e){e?.getAll().forEach(t=>{if(Object.keys(t.list.state.tasks).some(r=>{let a=t.list.state.tasks[r];return a.status===xe.BLOCKED&&["waiting_for_network_change","depends_on_other_queues"].includes(a.blockedFor?.reason)})){let r=t.list.getStorage()?.swapDetails;if(r.status==="running"){let{type:a}=P(r),o=ne(a);t.list.block({reason:{reason:"waiting_for_connecting_wallet",description:o}})}}})}l(ve,"checkWaitingForNetworkChange");function Gt(e){let t=e?.getAll()||new Map,n=[];return t.forEach(r=>{let o=r.list.getStorage()?.swapDetails;!o||o.status!=="running"||n.push(o)}),n}l(Gt,"getRunningSwaps");function Ht(e){e.forEach(t=>{let n=A(t),r="tx_execution_blocked",a;n?.networkStatus==="waitingForQueue"?a="waiting_for_queue":t?.status==="running"&&(a="waiting_for_wallet_connect"),r&&f&&f({event:{type:r,status:a??"waiting_for_queue"},swap:t,step:n})})}l(Ht,"resetRunningSwapNotifsOnPageLoad");function Re(e,t,n,r={fallbackToOnlyWallet:!0}){let[a,o]=ye(e);if(!a||!o)return;let c=[],i=[];t?.getAll().forEach(s=>{if(s.status===xe.BLOCKED){let d=s.list.getStorage(),p=d?.swapDetails;if(p&&p.status==="running"){let g=A(p);g&&(U(p,g)==o&&d?.swapDetails.wallets[o]?.walletType===a?c.push(s.list):d?.swapDetails.wallets[g.fromBlockchain]?.walletType===a&&i.push(s.list))}}});let u;if(c.length>0){if(u=c[0],c.length>1)for(let s=1;s<c.length;s++){let d=c[s];Ke({getStorage:d.getStorage.bind(d),setStorage:d.setStorage.bind(d)})}}else i.length>0&&r.fallbackToOnlyWallet&&(u=i[0]);n?.(a,o)?u?.checkBlock():u?.unblock()}l(Re,"retryOn");function nt(e){return!!e.evmTransaction||!!e.evmApprovalTransaction}l(nt,"isNeedBlockQueueForParallel");async function rt(e){let t=await e;if(!t.ok||!t.transaction)throw y.CreateTransaction(t.error||"bad response from create tx endpoint");return t}l(rt,"throwOnOK");function qt(e,t){let{reset:n}=le();e.actions.cancel();let r=D({getStorage:e.actions.getStorage,setStorage:e.actions.setStorage,message:"Swap canceled by user.",details:"Warning: If you've already signed and sent a transaction, it won't be affected, but next swap steps will not be executed.",nextStatus:"failed",nextStepStatus:"failed",errorCode:"USER_CANCEL"});return f({event:{type:"failed",reasonCode:"USER_CANCEL",reason:r.swap.extraMessage??void 0},swap:r.swap,step:r.step}),n(),t&&t?.retry(),r}l(qt,"cancelSwap");function z(e){return e.slice().reverse().find(t=>t.status==="success")}l(z,"getLastSuccessfulStep");function Ge(e){return e.slice().reverse().find(t=>t.status==="failed")}l(Ge,"getFailedStep");function Kt(e){let{transaction:t}=e;return t?.type===b.EVM&&t.isApprovalTx||t?.type===b.STARKNET&&t.isApprovalTx||t?.type===b.TRON&&t.isApprovalTx}l(Kt,"isApprovalTX");var at=5e3;async function $t({getStorage:e,setStorage:t,next:n,schedule:r,retry:a,failed:o,context:c}){let i=e().swapDetails,{meta:u}=c,s=A(i);if(!s?.executedTransactionId)return;let d=F(s),p=s.executedTransactionId,g=!1,T=!1,E=null,_=null,{getTransactionDataByHash:S,setTransactionDataByHash:w}=ce();try{let C=_e(s),k=K(i,s);C&&k&&(_=c.getSigners(k.walletType).getSigner(C))}catch{}try{let{response:C,receiptReceived:k}=S(p);if(_?.wait&&!k){let O=d?.blockChain&&u.blockchains?.[d?.blockChain]?.chainId||void 0,{hash:h,response:N}=await _.wait(p,O,C);if(N?.isMultiSig&&(g=!N.hashWasUpdated),h!==p){s.executedTransactionId=h||s.executedTransactionId;let G=M(i,s),L;!!Object.keys(u.blockchains).length&&(L=J(s.executedTransactionId,G,u.blockchains)),L&&s.explorerUrl&&s.explorerUrl?.length>=1&&(s.explorerUrl[s.explorerUrl.length-1]={url:L,description:"Replaced Swap"}),p=s.executedTransactionId,h&&N&&w(h,{response:N})}else w(h,{receiptReceived:!0})}else _||(g=!0)}catch(C){let{extraMessage:k,extraMessageDetail:O,extraMessageErrorCode:h}=Q(C),N=D({getStorage:e,setStorage:t,nextStatus:"failed",nextStepStatus:"failed",message:k,details:O,errorCode:h});f({event:{type:"failed",reason:k,reasonCode:N.failureType??v},...N}),T=!0}try{E=await X().checkStatus({requestId:i.requestId,txId:p,step:s.id})}catch{await pe(at),a();return}if(T)return o();if(s?.status==="failed")return;let m=E?.outputAmount||(s.outputAmount?s.outputAmount:null),x=s.outputAmount||null;i.extraMessage=E?.extraMessage||i.extraMessage,i.extraMessageSeverity="info",i.extraMessageDetail="",s.status=E?.status||s.status,s.diagnosisUrl=E?.diagnosisUrl||s.diagnosisUrl||null,s.outputAmount=m||s.outputAmount,s.explorerUrl=g?null:E?.explorerUrl||s.explorerUrl,s.internalSteps=E?.steps||null;let R=E?.newTx;if(R&&(s.status="created",s.executedTransactionId=null,s.executedTransactionTime=null,ue(s,R)),x===null&&m!==null?f({event:{type:"output_revealed",outputAmount:m},swap:i,step:s}):x===null&&m===null&&f({event:{type:"check_status"},swap:i,step:s}),s.status==="success"){let C=Le(i,s);i.extraMessageDetail="",i.extraMessage=C?`starting next step: ${C.swapperId}: ${C.fromBlockchain} -> ${C.toBlockchain}`:"",f({event:{type:"succeeded",outputAmount:s.outputAmount??""},swap:i,step:s})}else s.status==="failed"&&(i.extraMessage="Transaction failed in blockchain",i.extraMessageSeverity="error",i.extraMessageDetail=E?.extraMessage||"",i.status="failed",i.finishTime=new Date().getTime().toString());t({...e(),swapDetails:i}),E?.status==="failed"?o():E?.status==="success"||E?.status==="running"&&E.newTx?(r("SCHEDULE_NEXT_STEP"),n()):(await pe(at),a())}l($t,"checkTransactionStatus");async function Vt({getStorage:e,setStorage:t,next:n,schedule:r,retry:a,failed:o,context:c}){let i=e().swapDetails,{meta:u}=c,{getTransactionDataByHash:s,setTransactionDataByHash:d}=ce(),p=A(i);if(!p){console.log("ignore check status, current step is null");return}let g=F(p);if(!p?.executedTransactionId)return;let T=p.executedTransactionId,E=null;try{let S=_e(p),w=K(i,p);S&&w&&(E=c.getSigners(w.walletType).getSigner(S))}catch{}try{let{response:S,receiptReceived:w}=s(T);if(E?.wait&&!w){let m=g?.blockChain&&u.blockchains?.[g?.blockChain]?.chainId||void 0,{hash:x,response:R}=await E.wait(T,m,S);if(x!==T){p.executedTransactionId=x||p.executedTransactionId;let C=M(i,p),k;!!Object.keys(u.blockchains).length&&(k=J(p.executedTransactionId,C,u.blockchains)),k&&p.explorerUrl&&p.explorerUrl?.length>=1&&(p.explorerUrl[p.explorerUrl.length-1]={url:k,description:"Replaced Approve"}),T=p.executedTransactionId,x&&R&&d(x,{response:R})}else d(x,{receiptReceived:!0})}}catch(S){let{extraMessage:w,extraMessageDetail:m,extraMessageErrorCode:x}=Q(S),R=D({getStorage:e,setStorage:t,nextStatus:"failed",nextStepStatus:"failed",message:w,details:m,errorCode:x});return f({event:{type:"failed",reason:w,reasonCode:R.failureType??v},...R}),o()}let _=!1;try{let S=await X().checkApproval(i.requestId,p.executedTransactionId);if(p?.status==="failed")return;if(_=S.isApproved,!_&&(S.txStatus==="failed"||S.txStatus==="success")){let w,m;S.txStatus==="failed"?(w="Approve transaction failed",m="Smart contract approval tx failed in blockchain."):(w="Not enough approval",S.requiredApprovedAmount&&S.currentApprovedAmount?m=`Required approval: ${S.requiredApprovedAmount}, current approval: ${S.currentApprovedAmount}`:m="You still don't have enough approval for this swap.");let x=D({getStorage:e,setStorage:t,nextStatus:"failed",nextStepStatus:"failed",errorCode:"INSUFFICIENT_APPROVE",message:w,details:m});f({event:{type:"failed",reason:w,reasonCode:x.failureType??v},...x}),o()}else _||f({event:{type:"check_status"},swap:i,step:p})}catch{_=!1}_?(p.status="approved",i.extraMessage=`Spending ${p.fromSymbol} approved successfully.`,i.extraMessageDetail=null,i.extraMessageSeverity="success",p.evmApprovalTransaction=null,p.executedTransactionId=null,p.executedTransactionTime=null,p.starknetApprovalTransaction=null,p.tronApprovalTransaction=null,t({...e(),swapDetails:i}),f({event:{type:"approval_tx_succeeded"},swap:i,step:p}),r("SCHEDULE_NEXT_STEP"),n()):(await pe(2e3),a())}l(Vt,"checkApprovalStatus");async function ot(e){let t=e.getStorage().swapDetails,n=A(t);if(!n){console.log("ignore check status, current step is null",t.requestId);return}de(e),n.status==="running"?await $t(e):n.status==="waitingForApproval"&&await Vt(e)}l(ot,"checkStatus");async function st(e){let{setStorage:t,getStorage:n,next:r,schedule:a}=e,o=n().swapDetails,c=A(o);if(!F(c)){f({event:{type:"tx_execution",status:"create_tx"},swap:o,step:c});let u={requestId:o.requestId,step:c.id,userSettings:{slippage:o.settings.slippage,infiniteApprove:o.settings.infiniteApprove},validations:{balance:o.validateBalanceOrFee,fee:o.validateBalanceOrFee}};try{let{transaction:s}=await rt(X().createTransaction(u));s&&ue(c,s),t({...n(),swapDetails:o}),a("EXECUTE_TRANSACTION"),r()}catch(s){o.status="failed",o.finishTime=new Date().getTime().toString();let{extraMessage:d,extraMessageDetail:p}=Q(s),g=D({getStorage:n,setStorage:t,nextStatus:"failed",nextStepStatus:"failed",message:d,details:p,errorCode:"FETCH_TX_FAILED"});f({event:{type:"failed",reason:d,reasonCode:g.failureType??v},...g}),e.failed()}}}l(st,"createTransaction");async function it(e){let{getStorage:t,context:n}=e,{meta:r,wallets:a,providers:o}=n,{claimedBy:c}=le(),i=n.claimedBy===n._queue?.id,u=l(S=>{e.block(S),i&&e.context.resetClaimedBy&&e.context.resetClaimedBy()},"requestBlock"),s=t().swapDetails,d=A(s);if(de(e),!ke(s,n.state).ok){let{type:S,address:w}=P(s),m=a?.blockchains?.find(C=>!C.accounts?.find(k=>k.walletType===S)),x=!a||m?ne(S):Pe(S,w),R={reason:"waiting_for_connecting_wallet",description:x};u(R);return}let g=await Ve(s,d,a,r,o);if(!!c()&&!i&&!g){let S=me,w={reason:"depends_on_other_queues",details:S};u(w);return}else if(g)Je(e,{message:"",details:"Wallet network changed successfully",status:"networkChanged"});else{let S=M(s,d),w=re(S),m={reason:"waiting_for_network_change",details:w};u(m);return}if(nt(d)&&!i){let S={reason:"depends_on_other_queues",description:me,details:{}};u(S);return}et(e)}l(it,"executeTransaction");function lt({schedule:e,next:t,failed:n,setStorage:r,getStorage:a}){let o=a().swapDetails,c=A(o),i=o.steps.find(u=>u.status==="failed");if(c&&!i){if(Ye(o,c))return e("EXECUTE_TRANSACTION"),t();if(c?.executedTransactionId)return e("CHECK_TRANSACTION_STATUS"),t();o.status="running",r({...a(),swapDetails:o}),f({event:{type:"started"},swap:o,step:c}),e("CREATE_TRANSACTION"),t()}else o.status=i?"failed":"success",o.finishTime=new Date().getTime().toString(),r({...a(),swapDetails:o}),f({...i?{event:{type:"failed",reason:o.extraMessage??void 0,reasonCode:"CALL_OR_SEND_FAILED"}}:{event:{type:"succeeded",outputAmount:z(o.steps)?.outputAmount??""}},swap:o,step:null}),i?n():t()}l(lt,"scheduleNextStep");function ct({schedule:e,next:t,getStorage:n}){let r=n().swapDetails;f({event:{type:"started"},swap:r,step:null}),e("SCHEDULE_NEXT_STEP"),t()}l(ct,"start");var ut={name:"swap",actions:{["START"]:ct,["SCHEDULE_NEXT_STEP"]:lt,["CREATE_TRANSACTION"]:st,["EXECUTE_TRANSACTION"]:it,["CHECK_TRANSACTION_STATUS"]:ot},run:["START"],whenTaskBlocked:(e,t)=>{e.reason.reason==="waiting_for_connecting_wallet"?je(e,t):e.reason.reason==="waiting_for_network_change"?ze(e,t):e.reason.reason==="depends_on_other_queues"&&Ze(e,t)}};import{useManager as Zt}from"@rango-dev/queue-manager-react";import{useEffect as Ne,useState as en}from"react";import{Persistor as Yt,Status as Z,DB_NAME as Jt}from"@rango-dev/queue-manager-core";import{v4 as jt}from"uuid";var pt="migratedToQueueManager";function he(){return!!window.localStorage.getItem(pt)}l(he,"migrated");async function zt(){try{return(await window.indexedDB.databases()).map(e=>e.name).includes(Jt)}catch{return!1}}l(zt,"hasQueueManagerOnIDB");async function dt(){let e=window.localStorage.getItem("pendingSwaps"),t=await zt();if(!e||he()||t)return!0;let n=JSON.parse(e),r=[];n.forEach(c=>{if(c.status==="running"){let i=jt(),u={id:c.requestId,createdAt:Number(c.creationTime),name:"swap",status:Z.RUNNING,storage:{swapDetails:c},state:{status:Z.RUNNING,activeTaskIndex:0,tasks:{[i]:{blockedFor:null,status:Z.RUNNING}}},tasks:[{id:i,action:"SCHEDULE_NEXT_STEP"}]};r.push(u)}else{let i=c.status==="success"?Z.SUCCESS:Z.FAILED,u={id:c.requestId,createdAt:Number(c.creationTime),name:"swap",status:i,storage:{swapDetails:c},state:{status:i,activeTaskIndex:0,tasks:{}},tasks:[]};r.push(u)}});let a=new Yt,o=r.map(c=>a.insertQueue(c));return await Promise.all(o),window.localStorage.setItem(pt,"1"),!0}l(dt,"migration");var St=0;function tn(){let e=he(),[t,n]=en(e);return Ne(()=>{(async()=>St||(St=1,dt().finally(()=>{n(!0)})))()},[]),{status:t}}l(tn,"useMigration");function nn(e){let{manager:t}=Zt();Ne(()=>{e.lastConnectedWallet&&(tt({evmChains:e.evmChains,wallet_network:e.lastConnectedWallet,manager:t}),Re(e.lastConnectedWallet,t,e.canSwitchNetworkTo))},[e.lastConnectedWallet]),Ne(()=>{e.disconnectedWallet&&(ve(t),e.clearDisconnectedWallet())},[e.disconnectedWallet])}l(nn,"useQueueManager");function rn(){return ie}l(rn,"useEvents");function Ua(e){return Oe(e),ut}l(Ua,"makeQueueDefinition");export{Ee as MainEvents,oe as MessageSeverity,ae as PendingSwapNetworkStatus,y as PrettyError,fe as RouteEventType,B as StepEventType,te as StepExecutionBlockedEventStatus,Y as StepExecutionEventStatus,Nt as calculatePendingSwap,qt as cancelSwap,ve as checkWaitingForNetworkChange,U as getCurrentBlockchainOfOrNull,A as getCurrentStep,$e as getEvmProvider,z as getLastSuccessfulStep,K as getRelatedWallet,Ae as getRelatedWalletOrNull,P as getRequiredWallet,Gt as getRunningSwaps,Kt as isApprovalTX,Ua as makeQueueDefinition,Q as prettifyErrorMessage,Ht as resetRunningSwapNotifsOnPageLoad,ye as splitWalletNetwork,D as updateSwapStatus,rn as useEvents,tn as useMigration,nn as useQueueManager};
//# sourceMappingURL=index.js.map