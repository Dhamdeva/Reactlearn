import React from 'react';
import './Staticdesign.css';

function ImageList() {
    return (
        <div className="d-flex">
            <ul className="nav nav-tabs flex-column col-2 mobile-nav" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#thumbnail" type="button" role="tab" aria-controls="thumbnail" aria-selected="true"><img src='https://i.dummyjson.com/data/products/1/thumbnail.jpg ' alt="" /></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="phone-tab" data-bs-toggle="tab" data-bs-target="#phone" type="button" role="tab" aria-controls="phone" aria-selected="false"><img src='https://i.dummyjson.com/data/products/1/1.jpg  ' alt="" /></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="phones-tab" data-bs-toggle="tab" data-bs-target="#phones" type="button" role="tab" aria-controls="phones" aria-selected="false"><img src=' https://i.dummyjson.com/data/products/1/2.jpg ' alt="" /></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="specification-tab" data-bs-toggle="tab" data-bs-target="#specification" type="button" role="tab" aria-controls="specification" aria-selected="false"><img src=' https://i.dummyjson.com/data/products/1/3.jpg  ' alt="" /></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="camera-tab" data-bs-toggle="tab" data-bs-target="#camera" type="button" role="tab" aria-controls="camera" aria-selected="false"><img src=' https://i.dummyjson.com/data/products/1/4.jpg ' alt="" /></button>
                </li>
            </ul>
            <div className="tab-content px-2 col-md-10">
                <div className="tab-pane active" id="thumbnail" role="tabpanel" aria-labelledby="thumbnail-tab"><img src='https://i.dummyjson.com/data/products/1/thumbnail.jpg' alt="" /></div>
                <div className="tab-pane" id="phone" role="tabpanel" aria-labelledby="phone-tab"><img src=' https://i.dummyjson.com/data/products/1/1.jpg ' alt="" /></div>
                <div className="tab-pane" id="phones" role="tabpanel" aria-labelledby="phones-tab"><img src='https://i.dummyjson.com/data/products/1/2.jpg ' alt="" /></div>
                <div className="tab-pane" id="specification" role="tabpanel" aria-labelledby="specification-tab"><img src='https://i.dummyjson.com/data/products/1/3.jpg ' alt="" /></div>
                <div className="tab-pane" id="camera" role="tabpanel" aria-labelledby="camera-tab"><img src=' https://i.dummyjson.com/data/products/1/4.jpg ' alt="" /></div>
            </div>
        </div>
    )
}

export function Staticd() {
    return (
        <div className="d-flex my-4">
            <ImageList></ImageList>
            <div className="container col-md-7 description">
                <h1>Iphone 9</h1>
                <p>Rating 4.96</p>
                <p className="price"><strong>Price $ 539</strong> discountPercentage :14.96%</p>
                <p>Degvnmvjh</p>
                <p>category:smartPhone</p>
                <p>stock:94</p>
            </div>
        </div>
    )
}