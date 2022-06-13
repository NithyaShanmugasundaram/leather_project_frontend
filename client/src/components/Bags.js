import Navbar from './Navbar';
import React from 'react';
import Tags from './Tags';
import ContentContainer from './ContentContainer';
import Card from './common/Card';
import BagsTypeSelect from "./common/Select"

const bagTypes = [{
    label: "Saddle Bags", link: ""
},
{
    label: "Tote Bags", link: ""
},
{
    label: "Bucket Bags", link: ""
},
{
    label: "Kids Bags", link: ""
},
{
    label: "Messenger Bags", link: ""
}]

const list = [{ title: "item1", content: "Timberland Women's RFID Leather Crossbody Bag Wallet Purse", image: require("../img/image.jpg"), sub_images: [{}], stars: 3, review_count: 100, original_price: 20, offer_price: "16", shipping_info: "free shippigsdfsdfvsdvfs hjsfjshd dsfhshfhsd", size: "10 X 15 Inch", keypoints: ["dsfsdfs", "sdfsdds", "dfsgfg", "guyiuyiu"] },
{ title: "item1", content: "Timberland Women's RFID Leather Crossbody Bag Wallet Purse", image: require("../img/image.jpg"), sub_images: [{}], stars: 3, review_count: 100, original_price: 200000, offer_price: 567890, shipping_info: "free shippigsdfsdfvsdvfs hjsfjshd dsfhshfhsd", size: "10 X 15 Inch", keypoints: ["dsfsdfs", "sdfsdds", "dfsgfg", "guyiuyiu"] },
{ title: "item1", content: "Timberland Women's RFID Leather Crossbody Bag Wallet Purse", image: require("../img/image.jpg"), sub_images: [{}], stars: 3, review_count: 100, original_price: 20, offer_price: 0, shipping_info: "free shippigsdfsdfvsdvfs hjsfjshd dsfhshfhsd", size: "10 X 15 Inch", keypoints: ["dsfsdfs", "sdfsdds", "dfsgfg", "guyiuyiu"] },
{ title: "item1", content: "Timberland Women's RFID Leather Crossbody Bag Wallet Purse", image: require("../img/image.jpg"), sub_images: [{}], stars: 3, review_count: 100, original_price: 20, offer_price: 0, shipping_info: "free shippigsdfsdfvsdvfs hjsfjshd dsfhshfhsd", size: "10 X 15 Inch", keypoints: ["dsfsdfs", "sdfsdds", "dfsgfg", "guyiuyiu"] },
{ title: "item1", content: "Timberland Women's RFID Leather Crossbody Bag Wallet Purse", image: require("../img/image.jpg"), sub_images: [{}], stars: 3, review_count: 100, original_price: 20, offer_price: 0, shipping_info: "free shippigsdfsdfvsdvfs hjsfjshd dsfhshfhsd", size: "10 X 15 Inch", keypoints: ["dsfsdfs", "sdfsdds", "dfsgfg", "guyiuyiu"] }]
function Bags() {
    return (<><Navbar />
        <ContentContainer>
            <div className='container'>
                <div className='row d-none d-sm-block'>
                    <div className='col'>
                        <Tags tags={bagTypes} />
                    </div>
                </div>
                <div className='row d-md-none'>
                    <BagsTypeSelect dropdownListItems={bagTypes} />
                </div>
                <div className='row' style={{ marginTop: '20px' }}>
                    <Card list={list} />
                </div>
            </div>
        </ContentContainer></>);
}

export default Bags;