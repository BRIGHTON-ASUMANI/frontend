import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product';

const products = [];
function HomeScreen() {
  return (
    <div>
      <h1>Latest products</h1>
      <Row>
        {products.map((product, i) =>(
            <Col key={i} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
