/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Container } from "./style";

import { Link } from "react-scroll";

class Nav extends Component {
  render() {
    return (
      <Container>
        <nav>
          <ul className='dropdown' arial-label='submenu'>
            <li>
              <a className='mobile'>&#9776;</a>
              <ul>
                <li>
                  <Link
                    activeClass='active'
                    to='main'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    to='values'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Valores
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    to='indentity'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    to='gastronomic'
                    spy={true}
                    smooth={true}
                    offset={-0}
                    duration={500}>
                    Gastronomia
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    to='party'
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}>
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>
                    Contato
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </Container>
    );
  }
}

export default Nav;
