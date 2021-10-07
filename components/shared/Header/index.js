import React, { useState } from "react";
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
  NavbarText,
} from "reactstrap";

import {FaCaretDown} from 'react-icons/fa'

import Link from "next/link";

import HeaderStc from "./Header.stc";

import { AiOutlineMenu } from "react-icons/ai";
import Router from "next/router";
import { useRouter } from "next/router";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const router = useRouter();

  const { pathname } = router;

  let autre_page = "block-menu";

  if (pathname != "/" && pathname != "/contact") {
    autre_page = "block-menu autre";
  }

  return (
    <HeaderStc>
      <Navbar expand="md" className="">
        <NavbarBrand href="/" className="pl-0 pl-md-5 ml-0 ml-md-5">
          <img src="/img/logo.svg" alt="Logo de l'agence de communication  Dubani agency" height="40" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <span className="toggle">
            <AiOutlineMenu />
          </span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className={autre_page}>
          <Nav className="mr-0 px-0 px-md-5" navbar>
            <UncontrolledDropdown
              nav
              inNavbar
              className="py-2 py-md-3 align-self-center"
            >
              <DropdownToggle class="text-uppercase" nav caret>
                Nos Services <span style={{position: "relative",top: "-2px"}}><FaCaretDown/></span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link
                    class="text-uppercase"
                    href="/marketing-digital"
                  >
                    Marketing digital
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    class="text-uppercase"
                    href="/creation-de-site-web"
                  >
                    création de site Web
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    class="text-uppercase"
                    href="/referencement"
                  >
                    Referencement
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="py-2 py-md-3 align-self-center text-uppercase">
              <Link href="/blog/">Blog</Link>
            </NavItem>
            <NavItem className="py-2 py-md-3 align-self-center text-uppercase">
              <Link href="/contact/">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HeaderStc>
  );
};

export default Header;
