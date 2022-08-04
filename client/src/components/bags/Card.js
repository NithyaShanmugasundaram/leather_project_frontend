import React from 'react';
import Rating from '../common/Rating';
export default function Card({ list, onClick }) {
    return (
        <>
            {list.map((item, index) => {
                return (
                    <div className='col-md-4 col-12' key={index} onClick={() => onClick(item._id)}>
                        <div className="card mb-2" >
                            <img src={item.product_image} className="card-img-top" alt={item.product_name} height="250px" />
                            <div className="card-body px-3 py-2">
                                <h5 className="card-title mb-0">{item.product_name}</h5>
                                <div className='row justify-content-start '>
                                    <div className='col-md-6 col-12 item_info py-0 pt-md-2 my-0'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}><Rating stars={item.product_stars} /> {item.product_review_count ? item.product_review_count : "0"}</div>
                                    </div>
                                </div>
                                <div className="row p-0 m-0 item_price">
                                    <div className="col p-0 m-0">
                                        <p className='m-0' style={{ textDecoration: item.offer_price !== 0 ? "line-through" : "none" }}>{`HKD ${item.product_original_price}`} </p>
                                    </div>
                                    {item.offer_price !== 0 ? <div className='col'>
                                        <span>{`HKD ${item.product_offer_price}`}</span>
                                    </div> : ''}
                                </div>
                                <p className="card-text pt-2 m-0">{item.product_content}</p>
                                <div className="item_text pt-2 mb-0">
                                    Free Shipping <span className="item_info mb-0">{`${item.product_shipping_info}`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
