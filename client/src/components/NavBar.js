import React, {useContext} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import { Context } from '../index';
import { SHOP_ROUTE } from '../utils/consts';
import {Button} from 'react-bootstrap';

const NavBar = () => {
  const {user} = useContext(Context)
  return (
        <Navbar bg="dark" variant="dark">
        <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Купи Девайс</NavLink>
        <Nav className="ms-auto" style={{color: 'white'}}>
          <Button>Авторизация</Button>
        </Nav> 
      </Navbar>
  )
}

export default NavBar;