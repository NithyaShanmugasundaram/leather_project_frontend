import React from 'react'
import Rating from './Rating'

export default function Card({ list }) {
    return (
        <>
            {list.map((item, index) => {
                return (
                    <div className='col-md-4 col-12' key={index}>
                        <div className="card mb-2" >
                            <img src={item.image} className="card-img-top" alt={item.title} height="250px" />
                            <div className="card-body px-3 py-2">
                                <h5 className="card-title mb-0">{item.title}</h5>
                                <div className='row justify-content-start '>
                                    <div className='col-md-6 col-12 item_info py-0 pt-md-2 my-0'>
                                        <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}><Rating stars={item.stars} /> {item.review_count ? item.review_count : "0"}</p>
                                    </div>
                                </div>
                                <div className="row p-0 m-0 item_price">
                                    <div className="col p-0 m-0">
                                        <p className='m-0' style={{ textDecoration: item.offer_price !== 0 ? "line-through" : "none" }}>{`HKD ${item.original_price}`} </p>
                                    </div>
                                    {item.offer_price !== 0 ? <div className='col'>
                                        <span>{`HKD ${item.offer_price}`}</span>
                                    </div> : ''}
                                </div>
                                <p className="card-text pt-2 m-0">{item.content}</p>
                                <div className="item_text pt-2 mb-0">
                                    Free Shipping <span className="item_info mb-0">{`${item.shipping_info}`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
