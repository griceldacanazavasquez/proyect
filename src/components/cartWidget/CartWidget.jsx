import { BsCart3 } from 'react-icons/bs';


const CartWidget = () =>{
    return <>
        <div>
            <BsCart3 className='icon is-normal has-text-info'/>
            <span className="numCart has-text-warning">3</span>
        </div>
    </>
}

export default CartWidget