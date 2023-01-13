import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../../context/DarkModeContext";
const Categorias = () => {
        const { darkMode } = useDarkModeContext()
        return (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-link">
                                <button className={`btn ${darkMode ? 'btn-dark' : 'btn-primary'}`}><Link className="nav-link" to={"/"}><i className="fas fa-home fa-lg"></i></Link></button>
                        </li>
                        <li className="nav-link">
                                <button className={`btn ${darkMode ? 'btn-dark' : 'btn-primary'}`}><Link className="nav-link" to={"/category/calzados"}>Calzados</Link></button>
                        </li>
                        <li className="nav-link">
                                <button className={`btn ${darkMode ? 'btn-dark' : 'btn-primary'}`}><Link className="nav-link" to={"/category/bolsos-carteras"}>Bolsos y Carteras</Link></button>
                        </li>
                        <li className="nav-link">
                                <button className={`btn ${darkMode ? 'btn-dark' : 'btn-primary'}`}><Link className="nav-link" to={"/category/mochilas"}>Mochilas</Link></button>
                        </li>
                </ul>
        );
}

export default Categorias;