import React, { useEffect, useState } from 'react';
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