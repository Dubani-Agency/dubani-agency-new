import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import Link from 'next/link'

import HeaderStc from './Header.stc'

import {AiOutlineMenu} from 'react-icons/ai'
import Router from "next/router";
import { useRouter } from "next/router";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const router = useRouter();

  const { pathname } = router;
  
  let autre_page="block-menu";

  if(pathname!="/")
  {
    autre_page="block-menu autre";
  }

  return (
    <HeaderStc>
      <Navbar expand="md" className="">
        <NavbarBrand href="/">
          <img src="/img/logo.svg" height="40"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <span className="toggle">
              <AiOutlineMenu />
          </span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className={autre_page}>
          <Nav className="mr-0 px-0 px-md-5" navbar>
            <NavItem>
              <NavLink href="/components/">A propos de nous</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Nos projets</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Nos Service
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem >
                  <Link href="/marketing-digital">
                    Marketing digital
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/web-development">
                    Web & Development
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/marketing-digital">
                    Referencement
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
            <NavItem>
              <NavLink href="/components/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HeaderStc>
  );
}

export default Header;