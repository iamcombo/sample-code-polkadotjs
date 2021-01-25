import React, { useState } from 'react';
import { Button, Row, Col, Modal, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import keyring from '@polkadot/ui-keyring';

function ImportAccount() {
  const [ModalMnemonic, setModalMnemonic] = useState(false);
  const [ModalSeed, setModalSeed] = useState(false);
  const [ModalJson, setModalJson] = useState(false);
  const [file, setFile] = useState();
  const [account, setAccount] = useState();

  const Create = (val) => {
    const { pair, json } = keyring.addUri(val.mnemonic, val.password, {name: val.name});
    console.log(pair, json);
  } 
  const CreateFromSeed = (val) => {
    const { pair, json } = keyring.addUri(val.seed, val.password, {name: val.name});
    console.log(pair, json);
  }

  const CreateFromJson = (val) => {
    const json = JSON.parse(account);
    console.log(json)
    const pair = keyring.restoreAccount(json, val.password);
    console.log(pair)
  }

  const beforeUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setAccount(reader.result);
      console.log(reader.result)
    };
    reader.readAsText(file);
    return false;
  }
  
  return (
    <div>
      <Row>
        <Col>
          <Button onClick={() => setModalMnemonic(true)}>Import From Mnemonic</Button>
        </Col>
        <Col offset={1}>
          <Button onClick={() => setModalSeed(true)}>Import From Seed</Button>
        </Col>
        <Col style={{marginTop: '20px'}}>
          <Button onClick={() => setModalJson(true)}>Import From Json</Button>
        </Col>
      </Row>
      <div>
        <Modal footer={null} title="Import From Mnemonic" visible={ModalMnemonic} onCancel={() => setModalMnemonic(false)}>
          <Form
            onFinish={Create}
          >
            <Form.Item
              name="name"
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="mnemonic"
            >
              <Input placeholder="Mnemonic seed" />
            </Form.Item>
            <Form.Item
              name="password"
            >
              <Input placeholder="Password" />
            </Form.Item>  
            <Form.Item>
              <Button htmlType="submit" style={{width: '100%'}}>Create</Button>
            </Form.Item>
          </Form>
        </Modal>
      {/* Seed */}
        <Modal footer={null} title="Import From Seed" visible={ModalSeed} onCancel={() => setModalSeed(false)}>
          <Form
            onFinish={CreateFromSeed}
          >
            <Form.Item
              name="name"
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="seed"
            >
              <Input placeholder="Seed" />
            </Form.Item>
            <Form.Item
              name="password"
            >
              <Input placeholder="Password" />
            </Form.Item>  
            <Form.Item>
              <Button htmlType="submit" style={{width: '100%'}}>CreateFromSeed</Button>
            </Form.Item>
          </Form>
        </Modal>
        {/* JSON */}
        <Modal footer={null} title="Import From JSON" visible={ModalJson} onCancel={() => setModalJson(false)}>
          <Upload maxCount={1} accept="application/json, text/plain" beforeUpload={beforeUpload}>
            <Button icon={<UploadOutlined />}>Select File</Button>
          </Upload>
          <br />
          <Form
            onFinish={CreateFromJson}
          >
            <Form.Item
              name="password"
            >
              <Input placeholder="Password" />
            </Form.Item>  
            <Form.Item>
              <Button htmlType="submit" style={{width: '100%'}}>CreateFromSeed</Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  )
}

export default ImportAccount;
