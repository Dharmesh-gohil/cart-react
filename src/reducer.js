import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    DISPLAY_ITEMS,
    LOADING
} from "./action"


const reducer = (state, action) => {
    if (action.type === CLEAR_CART) { 
        return {...state,cart: new Map()}
    }
    if (action.type === REMOVE) { 
        // here we pass pevious state of the cart in new Map(state.cart)
        //then we map has method of delete it require only id which we get
        // from action.payload.id here Map is type of referece type so we 
        // have to make its instance of it then change init then overwrite it 
        const newCart = new Map(state.cart)
        newCart.delete(action.payload.id)
        return {...state,cart:newCart}
    }

    if (action.type === INCREASE) { 
        const newCart = new Map(state.cart)
        const itemId=action.payload.id
        const item = newCart.get(itemId)
        // console.log(item)
        const newItem = { ...item, amount: item.amount + 1 }
        newCart.set(itemId,newItem)
        return ({...state,cart:newCart})
    }
    if (action.type === DECREASE) { 
        const newCart = new Map(state.cart)
        const itemId=action.payload.id
        const item = newCart.get(itemId)
        // console.log(item)

        if (item.amount === 1) {
            newCart.delete(itemId)
            return {...state,cart:newCart}
        }

        const newItem = { ...item, amount: item.amount - 1 }
        newCart.set(itemId,newItem)
        return ({...state,cart:newCart})
    }

    throw new Error(`there is no matching action:${action.type}`)
}
 export default reducer