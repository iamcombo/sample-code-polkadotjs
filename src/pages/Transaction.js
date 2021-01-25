import React from 'react';
import { Button, Form, Input } from 'antd';

import { ApiPromise, WsProvider } from '@polkadot/api';
import keyring from '@polkadot/ui-keyring';
import BigNumber from "bignumber.js";
import { hexToU8a, u8aToHex } from "@polkadot/util";

import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
  web3ListRpcProviders,
  web3UseRpcProvider
} from '@polkadot/extension-dapp';
import BN from 'bn.js';

function Transaction() {
  const AAA = '5G1oFikccqAPjtYrpBFVHokSKTRWX6oCnXRayRw8REgP7Da8';
  const BBB = '5FJ38T4C4bP8eVdBVhSXmiZcNqaPqaNWEbPdtMhZQazVq6ZK';

  const send = async() => {
    const wsProvider = new WsProvider('wss://rpc-testnet.selendra.org');
    const api = await ApiPromise.create({ provider: wsProvider });
    // const keyring = new Keyring({ type: 'sr25519' });

    const instance = (10 ** api.registry.chainDecimals);

    let x = new BigNumber(instance);
    // console.log(x.toFixed())
    
    // const pair = keyring.addFromAddress(BBB);

    let publicKey = keyring.decodeAddress('5G1oFikccqAPjtYrpBFVHokSKTRWX6oCnXRayRw8REgP7Da8');
    // console.log(publicKey);
    // encode publicKey to ss58 address
    // const address = keyring.encodeAddress(publicKey);
    // console.log(address)
    const pair = keyring.getPair(publicKey);
    // const pair = keyring.createFromUri('piano harsh amount merit push aware satoshi zero man employ puzzle twist')
    console.log(pair);

    // const allInjected = await web3Enable('dapp');
    // const allAccounts = await web3Accounts();
    // const SENDER = '5G1oFikccqAPjtYrpBFVHokSKTRWX6oCnXRayRw8REgP7Da8';
    // const injector = await web3FromAddress(SENDER); 
    // api.tx.balances
    // .transfer('5Cyt116PgQCCzSfqFdZDR94CJTgoXoesAMVwSjp3NPC5QJWi', x.toFixed())
    // .signAndSend(
    //   SENDER, 
    //   { signer: injector.signer }, 
    //   (status) => { console.log(status.status.Ready) }
    // );
    
    // Add Alice to our keyring with a hard-deived path (empty phrase, so uses dev)
    // const aaa = keyring.addFromUri('piano harsh amount merit push aware satoshi zero man employ puzzle twist');
    
    // Create a extrinsic, transferring 12345 units to Bob
    const transfer = await api.tx.balances
      .transfer(BBB, x.toFixed())
      .signAndSend(pair, (result) => {
        console.log(`Current status is ${result.status}`);
      })
  } 

  return (
    <div>
      <Form>
        <Form.Item
          label="Sender"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Receiver"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Amount"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Existential deposit"
        >
          <Input /> 
        </Form.Item>
      </Form>
      <Button onClick={send} size='large'>Send</Button>
    </div>
  )
}

export default Transaction;