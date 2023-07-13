import { useEffect, useState } from 'react';
import './Staticdesign.css';
import { useLocation, useParams } from 'react-router-dom';
import React from 'react';

function ImageList(props) {
    const [active, setActive] = useState(0);
    return (
        <div className="d-flex">
            <ul className="nav nav-tabs flex-column col-2 mobile-nav" id="myTab" role="tablist">
                {props.images.map((image, index) => {
                    return (
                        <li className="nav-item" role="presentation" onClick={() => setActive(index)} key={image}>
                            <button className={`nav-link ${active === index ? "active" : ""}`} id={'phone-tab' + index} data-bs-toggle="tab" data-bs-target={'#phone' + index} type="button" role="tab" aria-controls={'phone' + index} aria-selected="false"><img src={image} alt="" /></button>
                        </li>
                    )
                })}
            </ul>
            <div className="tab-content px-2 col-md-10">
                {props.images.map((image, index) => {
                    return (
                        <div className={`tab-pane ${active === index ? "active" : ""}`} id={'phone-tab' + index} role="tabpanel" aria-labelledby={'phone-tab' + index}  key={image}><img src={image} alt="" /></div>
                    )
                })}
            </div>
        </div>
    )
}

export function Staticdes(props) {


    const [mobile, setMobile] = useState([]);
    const {productId} = useParams();
    const getproduct = async () => {
        try {
            const mobileData = await fetch(`https://dummyjson.com/products/` + productId);
            const data = await mobileData.json();
            setMobile(data);
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getproduct();
    }, []);

    return (
        <div className="container-fluid">
            <div className='d-flex'>
                <ImageList images={mobile.images || []}></ImageList>
                <div className="container col-md-7 description">
                    <h1>{mobile.title}</h1>
                    <p>Rating: {mobile.rating} </p>
                    <p className="price"><strong>Price {mobile.price}$ </strong> discountPercentage {mobile.discountPercentage}%</p>
                    <p>{mobile.description}</p>
                    <p>category:{mobile.category}</p>
                    <p>stock:{mobile.stock}</p>
                </div>

            </div>

        </div>
    )
}