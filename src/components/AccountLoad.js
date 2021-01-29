import React, { useState, useEffect } from 'react';
import { u8aToHex } from "@polkadot/util";
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Link } from 'react-router-dom';

import { Button, Row, Col } from 'antd';

export default function AccountLoad({ acc }) {
  const [balanceAvailable, setBalanceAvailable] = useState();
  const [nonce, setNonce] = useState();

  const loadBalance = async() => {
    const wsProvider = new WsProvider('wss://rpc-testnet.selendra.org');
    const api = await ApiPromise.create({ provider: wsProvider });

    const { nonce, data: balance } = await api.query.system.account(acc.address);
    setBalanceAvailable(balance.free.toHuman());
    setNonce(nonce.toString());
  }

  useEffect(() => {
    loadBalance();
  }, [])

  return (
    <div>
      {/* name, address, public_key, type, transaction, balance */}
      <p>Name: {acc.meta.name}</p>
      <p>Address: {acc.address}</p>
      <p>Public Key: {u8aToHex(acc.publicKey)}</p>
      <p>Type: {acc.type}</p>
      <p>Transaction: {nonce}</p>
      <p>Balance: {balanceAvailable}</p>
      <br/>
      <Row>
        <Col>
          <Link>
            <Button>Backup Account</Button>
          </Link>
        </Col>
        <Col offset={1}>
          <Button>Change Password</Button>
        </Col>
      </Row>
      <hr/>
    </div>
  )
}