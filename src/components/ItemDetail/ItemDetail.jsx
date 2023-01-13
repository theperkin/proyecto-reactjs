import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
const ItemDetail = ({item}) => {
    const {addItem} = useCarritoContext()
    const onAdd = (contador) => {
        addItem(item, contador)
    }

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={item.img} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Modelo: {item.modelo} </p>
                    <p className="card-text">Marca: {item.marca} </p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <p className="card-text">Stock: {item.stock} </p>
                    <ItemCount inicial ={1} stock= {item.stock} onAdd={onAdd}/><br/>
                    <button className="btn btn-primary"><Link to="/" className="nav-link">Atrás</Link></button>
                    <span> </span>
                    <button className="btn btn-success"><Link to="/cart" className="nav-link">Finalizar compra</Link></button>
                </div>

            </div>

        </div>
    );
}

export default ItemDetail;