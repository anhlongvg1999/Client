import { Link } from "react-router-dom";
import { IconButton, Badge, Button, Menu, Avatar } from '@material-ui/core';
import { LIST_SIZE } from "../../../config/common/ListSize";
export default function CartItem({cartItem,index,onRemoveFromCart}) {
    const renderProductName = () =>{
        let name = LIST_SIZE.filter((element)=>{
            if(element.id == cartItem.size_id)
            {
                return element.name;
            }
        })
        console.log('55555555555555',name)
        return cartItem.product.name + " size " + name[0].name;
    }
    const handleRemoveFromCart = (productId) =>{
        return onRemoveFromCart(productId);
    }
    return (<>
    <tr className="rem1">
        <td className="invert">{index}</td>
        <td className="invert-image"><Link to={`/chi-tiet-san-pham/${cartItem.product.id}`}><img src={cartItem.product.image} alt=" " className="img-responsive" /></Link></td>
        <td className="invert">
            <div className="quantity">
                <div className="quantity-select">
                    {/* <div className="entry value-minus"><Button onClick={console.log('22222222222222222')}></Button></div> */}
                    <Button className="entry value-minus" onClick={console.log('66666666666')}></Button>
                    <div className="entry value"><span>{cartItem.quantity}</span></div>
                    <div className="entry value-plus active">&nbsp;</div>
                </div>
            </div>
        </td>
        <td className="invert">{renderProductName()}</td>
        <td className="invert">{(cartItem.product.cost * cartItem.quantity).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
        <td className="invert">
        <Button style={{"font-size": "large"}} onClick={() =>handleRemoveFromCart(cartItem.product.id)}>X</Button>
        </td>
    </tr>
    </>)
}