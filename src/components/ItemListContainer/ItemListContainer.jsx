import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import { getProductos, getProducto, updateProducto } from "../../assets/firebase.js";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
            if(category) {
                getProductos().then(products => {
                    const productsList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            } else {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            }
            /*getProducto("4MEvPtOR0dlZcrRH5hDn").then(prod => {
                prod.stock += 100
                delete prod.id
                updateProducto("4MEvPtOR0dlZcrRH5hDn", prod).then(estado => console.log(estado))
            })*/
            
            //deteleProducto("4MEvPtOR0dlZcrRH5hDn").then(estado => console.log(estado))

    },[category]);

    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>

    );
}

export default ItemListContainer;
