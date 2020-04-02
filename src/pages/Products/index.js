import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header'
import Main from '../../components/Main'
export default function Products() {

  return (
    <Container>
      <Header />
      <Main type="products_background" />
    </Container>
  )
}
