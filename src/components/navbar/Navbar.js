import React, { useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.2rem;
  box-shadow: 0 2px 10px rgb(0, 0, 0, .2);
  width: 100%;
  padding: 0 2.5rem; 
  z-index: 100;
  background: #FFFFFF;
  position: fixed;
  top: 0;
  transition: .3s;
  transform: translateY(-4.2rem);
  
  &:hover {
    transform: translateY(0);
  }

  &::after {
    content: '';
    width: 100%;
    height: 4rem;
    background-color: transparent;
    display: block;
    position: absolute;
    bottom: -4rem;
    left: 0;
  }
`

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding-top: .5rem;
  /* background-color: pink; */
`

const MenuItems = styled.a`
  margin-left: 1.5rem;
  font-size: 1.075rem;
  color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;  
  transition: .3s;

  &:hover {
    cursor: pointer;
  }
`

const ItemFocus = styled.div`
  width: 0%;
  margin-top: .2rem;
  height: 5px;
  background-color: transparent;
  transition: width .25s;

  ${MenuItems}:hover & {
    background-color: #63EC85;
    width: 100%;
  }
`

const Navbar = () => {

  const menuItemsList = [
    { name: 'Nosso propósito', href: '#purpose' },
    { name: 'Quem somos', href: '#about' },
    { name: 'Sobre o App', href: '#app' },
    { name: 'Contatos', href: '#contact' }
  ]

  return (
    <>
      {<NavContainer>
        <div style={{ fontSize: '1.5rem' }}>
          iEvents!
      </div>
        <Menu>
          {menuItemsList.map((item, index) => {
            return (
              <MenuItems href={item.href} key={index}>
                <div>{item.name}</div>
                <ItemFocus />
              </MenuItems>
            )
          })}
        </Menu>
      </NavContainer>}
    </>
  )
}

export default Navbar;
