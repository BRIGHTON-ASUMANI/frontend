import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducers, productListReducers } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems')): [] 

const userInfoFromStorage = localStorage.getItem('userInfo')
    ?  JSON.parse(localStorage.getItem('userInfo')): null

const initialState = {
    cart: { cartItems : cartItemsFromStorage},
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;