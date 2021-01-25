import React from 'react';
import { hexToU8a, u8aToHex } from "@polkadot/util";

function AccountLoad({acc}) {
  return (
    <div>
      {/* name */}
      <p>Name: {acc.meta.name}</p>
      {/* address */}
      <p>Address: {acc.address}</p>
      {/* public key */}
      <p>Public Key: {u8aToHex(acc.publicKey)}</p>
      {/* type */}
      <p>Type: {acc.type}</p>
      {/* transaction */}
      {/* balance */}
      <hr />
    </div>
  )
}

export default AccountLoad;