import React, { useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';

function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products} = productList

  useEffect(()=> {
    dispatch(listProducts())

    }, [])
     
  return (
    <div>
      <h1>Latest products</h1>
      {loading? <Loader />: 
          error? <Message variant="danger">{error}</Message>:
          <Row>
          {products.map((product, i) =>(
              <Col key={i} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
              </Col>
          ))}
      </Row>    
      }
      
    </div>
  )
}

export default HomeScreen
