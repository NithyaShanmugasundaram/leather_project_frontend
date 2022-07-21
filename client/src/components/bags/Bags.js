import React from 'react';
import { connect } from 'react-redux'
import Tags from '../Tags';
import ContentContainer from '../ContentContainer';
import Card from './Card';
import BagsTypeSelect from "../common/Select"
import { getProducts, getProductById } from '../../actions/products';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const bagTypes = [{
    label: "Saddle Bags", link: "", type: "sling_bag"
},
{
    label: "Tote Bags", link: "", type: "tote_bag"
},
{
    label: "Bucket Bags", link: "", type: "bucket_bag"
},
{
    label: "Messenger Bags", link: "", type: "messenger_bag"
}]

function Bags({ getProducts, getProductById, productsList, productById }) {
    const [displaybagslist, setDisplayBagsList] = React.useState()
    const [displayalllist, setDisplayAllList] = React.useState(false)
    const navigate = useNavigate()
    const handleClick = (selectedBagType) => {
        setDisplayAllList(true)
        let listOfBags = productsList;
        const filteredBags = listOfBags.filter((item, index) => {
            return item.product_type == selectedBagType
        })
        setDisplayBagsList(filteredBags)

    }
    const handleProductClick = (id) => {
        navigate(`/bags/${id}`, { replace: true });
        console.log('id', id)
        getProductById( id )


    }
    React.useEffect(() => {
        getProducts()
    }, [getProducts])

    return (<>
        <ContentContainer>
            <div className='container'>
                <div className='row d-none d-sm-block'>
                    <div className='col'>
                        <Tags tags={bagTypes} onClick={handleClick} />
                    </div>
                </div>
                <div className='row d-md-none'>
                    <BagsTypeSelect dropdownListItems={bagTypes} onChange={handleClick} />
                </div>
                <div className='row' style={{ marginTop: '20px' }}>
                    {!displayalllist ? <Card list={productsList} onClick={handleProductClick} /> : displaybagslist.length > 0 ? <Card list={displaybagslist} onClick={handleProductClick} /> : <p>Product not available</p>}
                </div>
            </div>
        </ContentContainer></>);
}

Bags.propTypes = {
    getProducts: PropTypes.func.isRequired,
    getProductById: PropTypes.func,
    productsList: PropTypes.array
};

const mapStateToProps = state => {
    return {
        productsList: state.products.products,
        productById: state.products.product
    }
}

export default connect(mapStateToProps, { getProducts, getProductById })(Bags);