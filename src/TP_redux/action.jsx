export const ActionADD = (id, name, price) => {
    return {
      type: 'ADD_PRODUCT',
      payload: { id, name, price }
    };
  };
  
  export const ActionDelete = (id) => {
    return {
      type: 'DELETE_PRODUCT',
      payload: { id }
    };
  };

