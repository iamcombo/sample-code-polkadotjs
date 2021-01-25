import { ApiPromise, WsProvider } from '@polkadot/api';

const wsProvider = new WsProvider('wss://rpc-testnet.selendra.org');
export const api = await ApiPromise.create({ provider: wsProvider });