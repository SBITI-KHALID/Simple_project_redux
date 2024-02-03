import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionADD,ActionDelete } from './action';


export default function AppRedux(){
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleAddProduct = () => {
      const productId = products.length + 1; // Générer un ID unique
      dispatch(ActionADD(productId, productName, parseFloat(productPrice)));
      setProductName('');
      setProductPrice('');
  };

  const handleDeleteProduct = (productId) => {
    dispatch(ActionDelete(productId));
  };
  return (
    <div>
    <h1>Ajouter un produit</h1>
    <label>Nom du produit:</label>
    <input style={{border:"1px solid black "}} type="text"  value={productName} onChange={(e) => setProductName(e.target.value)}/>
    <br/>
    <label>Prix du produit:</label>
    <input style={{border:"1px solid black "}} type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
    <br/>
    <button onClick={handleAddProduct}>Ajouter le produit</button>
    <br/>
    <h2>Liste des produits</h2>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.price} DH 
          <button style={{border:"1px solid black "}} onClick={() => handleDeleteProduct(product.id)}>
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
};
