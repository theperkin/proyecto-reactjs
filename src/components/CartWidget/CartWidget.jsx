import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContext";

const CartWidget = () => {
    const {darkMode} = useDarkModeContext()
    const {getItemQuantity} = useCarritoContext()

    return (
        <>
            <button className={`btn cartWidget ${darkMode ? 'btn-dark' : 'btn-primary'}`}>
                    <Link to={'/cart'} className="nav-link">
                        <i className="fas fa-shopping-cart fa-lg"></i>
                        {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
                        </Link>
                        
            </button>
        </>
    );
}

export default CartWidget;