import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Image from 'next/image';

import Link from "next/link";

import HeaderStc from "./Header.stc";

import { AiOutlineMenu } from "react-icons/ai";
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
      <Navbar expand="md" className="container">
        <NavbarBrand href="/" className="">
            <Image
                src="/img/logo.svg"
                alt="Logo de l'agence de communication  Dubani agency"
                width="100"
                height="80"
              />
          
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
              <DropdownToggle className="text-uppercase" nav caret>
                Nos Services{" "}
                
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className="text-uppercase" href="/marketing-digital">
                    Marketing digital
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className="text-uppercase" href="/creation-de-site-web">
                    création de site Web
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className="text-uppercase" href="/referencement">
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
