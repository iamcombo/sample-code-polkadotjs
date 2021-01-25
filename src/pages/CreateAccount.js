import React, { useState } from 'react';
import { mnemonicGenerate, randomAsHex } from '@polkadot/util-crypto';
import keyring from '@polkadot/ui-keyring';

import { Button, Form, Input, Switch } from 'antd';

export default function CreateAccount() {
  const [isSeed, setIsSeed] = useState(false);

  const onChange = () => {
    setIsSeed(!isSeed);
  }

  const [name, setName] = useState('');
  const [mnemonic, setMnemo] = useState(mnemonicGenerate());
  const [seed, setSeed] = useState(randomAsHex(32));
  const [password, setPassword] = useState('');

  const Create = (val) => {
    const { pair, json } = keyring.addUri(mnemonic, val.password, {name: val.name});
    console.log(pair, json);
  } 
  const CreateFromSeed = (val) => {
    const { pair, json } = keyring.addUri(seed, val.password, {name: val.name});
    console.log(pair, json);
  }
  
  return (
    <>
      <div>
        <Switch defaultChecked onChange={onChange} />
        <span>From Mnemonic</span>
      </div>
      <br />
      { isSeed && (
        <div>
          <Form
            onFinish={CreateFromSeed}
          >
            <Form.Item
              label="Username"
              name="name"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Seed"
              name="seed"
            >
              <Input placeholder={seed} disabled />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
            >
              <Input />
            </Form.Item>  
            <Form.Item>
              <Button htmlType="submit" style={{width: '100%'}}>Create</Button>
            </Form.Item>
          </Form>
        </div>
      )}
      { !isSeed && (
        <div>
          <Form
            onFinish={Create}
          >
            <Form.Item
              label="Username"
              name="name"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mnemonic seed"
              name="mnemonic"
            >
              <Input placeholder={mnemonic} disabled />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
            >
              <Input />
            </Form.Item>  
            <Form.Item>
              <Button htmlType="submit" style={{width: '100%'}}>Create</Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  )
}