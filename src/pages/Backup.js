import React from 'react';
import { Form, Input } from 'antd';

export default function Backup() {
  return (
    <div>
      
      <Form>
        <Form.Item>
          <Input placeholder='password'/>
        </Form.Item>
      </Form>
    </div>
  )
}