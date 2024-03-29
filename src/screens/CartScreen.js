import React, { useEffect } from 'react'
import { Alert, Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import Message from '../components/Message';



function CartScreen() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { id } = useParams();
    const navigate = useNavigate()
    const qty = searchParams.get('qty')
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(()=>{
        if(id){
            dispatch(addToCart(id, qty))
        }
    }, [ dispatch, id, qty])

    const removeFromCartHandler = (itemId) => {
        dispatch(removeFromCart(itemId))
    }

    const checkoutHandler = () => {
        navigate('/login?redirect=shipping')
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Alert variant='info'>
                        Your Cart is empty <Link to="/">Go Back</Link>
                    </Alert>
                    // <Message variant='info'>
                    //     Your Cart is empty <Link to="/">Go Back</Link>
                    // </Message>
                ): (
                    <ListGroup variant='flush'>
                        {cartItems.map((item, i)=>(
                                <ListGroup.Item key={i}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded/>
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>
                                                {item.name}
                                            </Link>
                                        </Col>
                                        <Col md={2}>
                                            ${item.price}
                                        </Col>
                                        <Col md={3}>
                                            <Form.Control 
                                                as='select' 
                                                value={item.qty}
                                                onChange={(e)=>dispatch(addToCart(item.product, Number(e.target.value)))}
                                            >
                                            {
                                                [...Array(item.countInStock).keys()].map((x)=>(
                                                    <option key={x+1} value={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))
                                            }

                                        </Form.Control>
                                        </Col>
                                        <Col md={1}>
                                            <Button
                                                type="button"
                                                variant="light"
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                <i className='fas fa-trash'></i> 
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>
                            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                        </h2>
                        ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button 
                            type='button'
                            className='btn-block'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            Proceed to Checkout
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    )
}

export default CartScreen;
