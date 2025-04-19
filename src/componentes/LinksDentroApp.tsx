import { Link, Outlet } from "react-router-dom"

export const LinksDentroApp = () => {
    return <>
    <nav className="estilo-nav-dentro">
        <li>
            <Link to="facturas">Facturas</Link>
        </li>
        <li>
            <Link to="clientes">Clientes</Link>
        </li>
        <li>
            <Link to="productos">Productos</Link>
        </li>
        <li>
            <Link to="/paxinaapp0">Home</Link>
        </li>
    </nav>
    <Outlet />
    </>
}