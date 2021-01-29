import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <div>
      <Menu mode="horizontal" selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to='/'>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="/transaction">
          <Link to='/transaction'>
            Transaction
          </Link>
        </Menu.Item>
        <Menu.Item key='/createaccount'>
          <Link to='/createaccount'>
            Create Account
          </Link>
        </Menu.Item>
        <Menu.Item key='/importaccount'>
          <Link to='/importaccount'>
            Import Account
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Header;