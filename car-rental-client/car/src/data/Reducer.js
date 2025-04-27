import { produce } from 'immer';
import { state } from './State';

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload;
            break;
        case 'SET_CURRENT_PRODUCT':
            // קבלנו קוד מוצר
            // חיפשנו
            let p = state.products.find(x => x.id == action.payload)
            // הצבנו במוצר הנוכחי
            state.currentProduct = p
            break;
        case 'ADD_PRODUCT':
            // אם נרצה לערוך בדיקות ...
            state.products.push(action.payload);
            break;
        case 'REMOVE_PRODUCT':
            let index = state.products.findIndex(p => p.id == action.payload);
            state.products.splice(index, 1)
            break;
        case 'UPDATE_PRICE':
            let product = state.products.find(p => p.id == action.payload.id)
            product.price = action.payload.price
        default:
            break;
    }
}, state)

export default reducer