/* global describe, it, before */

import XMLHttpRequest from 'xhr2'
import chai from 'chai'

import {generateKey, WalletConnector, WebConnector} from '../src'

// set fetch
global.XMLHttpRequest = XMLHttpRequest

chai.expect()

const expect = chai.expect

describe('Given an instance of wallet connect', () => {
  let webConnector

  before(async() => {
    webConnector = new WebConnector('https://walletconnect.matic.network')
  })

  it('should initiate wallet connect properly', async() => {
    // await webConnector.createSession()
    // const obj = await webConnector.encrypt({address: '0x123'})
    // console.log(obj)
    // console.log(webConnector.decrypt(obj))
    const session = await webConnector.createSession()
    console.log(session)
    // const sessionData = await webConnector.getSessionData()
    // console.log(sessionData)
    //
    // // try {
    // //   const txId = await webConnector.sendTransaction({address: '0x0'})
    // //   console.log(txId)
    // // } catch (e) {
    // //   console.log(e)
    // // }
  })
})
