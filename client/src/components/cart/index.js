import React from 'react'
import ContentContainer from '../ContentContainer'
import { connect } from "react-redux";
import { DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART } from '../../actions/types';
import { getProducts } from '../../actions/products'

function Cart({ items, getProducts, dispatch, }) {

    console.log('items :>> ', items);
    let ListCart = [];
    let TotalCart = 0;
    items.Carts && Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    })



    function TotalPrice(price, tonggia) {
        return Number(price * tonggia).toLocaleString('en-US');
    }


    return (
        <ContentContainer>
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ListCart.map((item, key) => {
                                    return (
                                        <tr key={key}>
                                            <td><i className="badge badge-danger" onClick={dispatch({ type: DELETE_CART, payload: key })}>X</i></td>
                                            <td>{item.name}</td>
                                            <td><img src={item.image} style={{ width: '100px', height: '80px' }} /></td>
                                            <td>{item.price} $</td>
                                            <td>
                                                <span className="btn btn-primary" style={{ margin: '2px' }} onClick={dispatch({ type: INCREASE_QUANTITY, payload: key })}>-</span>
                                                <span className="btn btn-info">{item.quantity}</span>
                                                <span className="btn btn-primary" style={{ margin: '2px' }} onClick={dispatch({ type: DECREASE_QUANTITY, payload: key })}>+</span>
                                            </td>
                                            <td>{TotalPrice(item.price, item.quantity)} $</td>
                                        </tr>
                                    )
                                })

                            }
                            <tr>
                                <td colSpan="5">Total Carts</td>
                                <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </ContentContainer>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {
        items: state.products.products
    }
}

export default connect(mapStateToProps, { getProducts })(Cart)
