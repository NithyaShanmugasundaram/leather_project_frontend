import React from 'react'
import ContentContainer from '../ContentContainer'
import { getProductById } from '../../actions/products'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Rating from '../common/Rating';
import ColorPicker from '../common/ColorPicker';
import Select from '../common/Select'





function BagDetails({ getProductById, productInfo: { product_size, product_name, product_description, product_sub_images, product_stars, product_review_count, product_colors, product_offer_price, product_shipping_info, product_original_price, product_content } }) {

    const [selectedImage, setSelectedImage] = React.useState()

    const handleClick = (image) => {
        setSelectedImage(image)
    }

    React.useEffect(() => {
        product_sub_images && product_sub_images.forEach((img, index) => {
            if (index === 0) {
                setSelectedImage(img)
            }
        })
    }, [product_sub_images]);

    return (
        <>
            <ContentContainer>
                <div className="container p-0 m-0">
                    <div className="row justify-content-start p-0 m-0">
                        <div className="col-md-1 col-2 ml-0 pl-0">
                            {product_sub_images && product_sub_images.length > 0 && <ul className="img_list p-0 m-0">
                                {
                                    product_sub_images && product_sub_images.map((img, index) => {
                                        return (
                                            <li key={index}><img src={img} alt={img} className="img_list_item" onClick={() => handleClick(img)} /></li>
                                        )
                                    })
                                }
                            </ul>}
                        </div>
                        <div className="col-md-4 col-10">
                            <img src={selectedImage} alt="product_name" className='img_list_item_display' />
                        </div>
                        <div className="col-md-4 ml-md-4 mt-3">
                            <div className='product_name'>{product_name}</div>
                            <div style={{ display: 'flex', justifyContent: 'start', marginBottom: '2px' }}><Rating stars={product_stars} /> {product_review_count ? product_review_count : "0"}</div>
                            <hr />
                            <div className="row p-0 m-0 item_price">
                                <div className="col p-0 m-0">
                                    <p className='m-0' style={{ textDecoration: product_offer_price !== 0 ? "line-through" : "none" }}>{`HKD ${product_original_price}`} </p>
                                </div>
                                {product_offer_price !== 0 ? <div className='col'>
                                    <span>{`HKD ${product_offer_price}`}</span>
                                </div> : ''}
                            </div>
                            <div className='py-3 d-flex justify-content-start'>
                                <ColorPicker colors={product_colors} />
                            </div>
                            <p className="card-text pt-2 m-0">{product_content}</p>


                        </div>
                        <div className="col-md-2 cart_container">
                            <p>{product_original_price}</p>
                            <div className="item_text pt-2 mb-0">
                                Free Shipping <span className="item_info mb-0">{`${product_shipping_info}`}</span>
                            </div>
                            <div>Quantity : <Select quantity={true} /></div>
                        </div>

                    </div>
                </div>
            </ContentContainer>
        </>
    )
}
BagDetails.propTypes = {
    getProductbyID: PropTypes.func
}

const mapStateToProps = state => {
    return {
        productInfo: state.products.product
    }
}
export default connect(mapStateToProps, { getProductById })(BagDetails)