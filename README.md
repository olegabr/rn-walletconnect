# WalletConnect

Simple library to connect with wallet-connect's bridge server. Works with browsers, node.js and react-native.

You can read more about WalletConnect protocol here: http://walletconnect.org/

## install

```bash
npm install --save walletconnect # yarn add walletconnect
```

## Example

```js
import {WalletConnector, WebConnector} from 'walletconnect'

//
// on DApp
//

// create wallet connector
const webConnector = new WebConnector(
  'https://walletconnect.matic.network',
)

// create new session
const session = await webConnector.createSession()
console.log(session.sessionId) // prints session id
console.log(session.sharedKey.toString('hex')) // prints shared private key

// fetch session status
// const sessionStatus = await webConnector.getSessionStatus()

// listen status
webConnector.listenSessionStatus((err, result) => {
  // check result
})

// draft tx
const tx = {from: '0xab12...1cd', to: '0x0', nonce: 1, gas: 100000, value: 0, data: '0x0'}

// create transaction
const transactionId = await webConnector.createTransaction(tx)

// fetch tx status
// const txStatus = await webConnector.getTransactionStatus()

// listen status
webConnector.listenTransactionStatus(transactionId, (err, result) => {
  // check result
})

//
// on wallet
//

// create wallet connector
const walletConnector = new WalletConnector(
  'https://walletconnect.matic.network',
  {
    sessionId: session.sessionId,
    sharedKey: session.sharedKey,
    dappName: 'Matic wallet'
  }
)

// send transaction data
walletConnector.sendSessionStatus({
  address: '0xab12...1cd'
})

// send transaction status
walletConnector.sendTransactionStatus({
  success: true,
  txHash: '0xabcd..873'
})
```
