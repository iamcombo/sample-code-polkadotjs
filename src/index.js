import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';

import keyring from '@polkadot/ui-keyring';
import { cryptoWaitReady } from '@polkadot/util-crypto';

cryptoWaitReady().then(() => {
  keyring.loadAll({ type: 'sr25519', ss58Format: 2 });
  ReactDOM.render(<App />, document.getElementById('root'));
})