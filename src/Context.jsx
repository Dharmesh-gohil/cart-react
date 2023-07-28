import {
    createContext,
    useContext,
    useEffect,
    useReducer
} from "react";
import reducer from "./reducer";
import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    DISPLAY_ITEMS,
    LOADING
} from "./action"
import cartItems from "./data";
import { getTotals } from "./utils";
const url = 'https://www.course-api.com/react-useReducer-cart-project';

const AppContext = createContext()

const intialState = {
    isLoading: false,
    // cart:[]
    // this Map will convert it in object of key value pair 
    // cart: new Map()
    //it doesnt required to change any code
    // cart:new Map(cartItems.map((item)=>[item.id , item]))
    cart :new Map()
    
}

export const AppProvider = ({ children }) => {
//  const greetings="hello"
    const [state, dispatch] = useReducer(reducer, intialState)

    //get this from utils.js it require cart as parameter and we get it
    // from state.cart bcos we have cart in state so access would be  state.cart
    const { totalAmount,totalCost}=getTotals(state.cart)
    
    const clearCart = () => { 
        dispatch({type:CLEAR_CART})
    }

    const removeItem = (id) => { 
        // console.log(id)
        dispatch({ type: REMOVE, payload: {id }})
    }

    const increase = (id) => { 
        dispatch({ type: INCREASE, payload: {id} })
    }
    const decrease = (id) => { 
        dispatch({ type: DECREASE, payload: {id} })
    }

    const fetchData = async () => {
        dispatch({type:LOADING})
        const response = await fetch(url)
        const cart = await response.json()
        dispatch({ type: DISPLAY_ITEMS, payload: {cart} })
        console.log(cart)
    }
    useEffect(() => { 
        fetchData()
    },[])

    return (<AppContext.Provider value={{ ...state,clearCart,removeItem,increase,decrease,totalAmount,totalCost} }>
        { children}
    </AppContext.Provider>)
}
export const useGlobalContext = () => { 
    return useContext(AppContext)
}