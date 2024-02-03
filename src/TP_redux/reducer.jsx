const initialState = {
    products: [
        { id: 1, name: 'Produit 1', price: 10 },
        { id: 2, name: 'Produit 2', price: 20 }
    ]
  };
export default function Reducers( state = initialState, action){
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {...state, products: [...state.products, action.payload] };
        case 'DELETE_PRODUCT':
            return {...state,products: state.products.filter((product) => product.id !== action.payload.id)};
        default:
            return state;
}}

