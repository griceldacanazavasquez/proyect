import CartWidget from "../CartWidget/CartWidget"




const NavBar = () => {
    return <>
        <nav className="p-5 navbar is-dark is-flex is-justify-content-space-around is-align-items-center">
            <div className="">
                <h1 className="title has-text-info">Tienda</h1>
            </div>
            <div className="">
                <ul className="is-flex is-flex-wrap-wrap is-2">
                    <li><button className="button is-outlined is-info mx-3">Inicio</button></li>
                    <li><button className="button is-outlined is-info mx-3">Productos</button></li>
                    <li><button className="button is-outlined is-info mx-3">Contact</button></li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    </>
}

export default NavBar