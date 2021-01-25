import React, { useEffect, useState } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import keyring from '@polkadot/ui-keyring';
import AccountLoad from '../components/AccountLoad';

import { Card, Table, Row, Col, Tag, Space } from 'antd';

export default function Home() {
  const [KeyringAccount, setKeyringAccount] = useState({});
  const [loading, setLoading] = useState(true);

  const mapAccount = () => {
    const acc = keyring.getPairs();
    setKeyringAccount(acc);
  }

  const loadBalance = async(address) => {
    const wsProvider = new WsProvider('wss://rpc-testnet.selendra.org');
    const api = await ApiPromise.create({ provider: wsProvider });
    const acc = keyring.getPairs().map(i => i.address);
    const { nonce, data: balance } = await api.query.system.account(acc);
    return balance.free.toString();
    nonce.toString();
    console.log(balance.free.toString(), nonce.toString());
  }

  useEffect(() => {
    mapAccount();
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  return (
    <>
      { !loading && KeyringAccount.map((item,index)=>{
        return <AccountLoad key={index} acc={item}/>
      })}
    </>
  )
}