import { useEffect, useState } from "react";
// import {Mobile} from "./Static";
import './Staticdesign.css';
import axios from 'axios';
import { useLocation,useParams } from "react-router-dom";



export function Staticdesign(props){

    const [product,setProduct]=useState([]);
    const [categorys,setCategory]=useState();
    const {user} =useParams();
    const location = useLocation();
    
    
    
    
    const getproduct = async () =>{
        try{ 
            const mobileData = await fetch(`https://dummyjson.com/products/`);
            const  data = await mobileData.json();
            console.log(data)
            setProduct(data.products);
        }
        catch(error){
            console.error(error);
        }
    };

    useEffect(() => {
        getproduct();
    }, []);
    console.log(location.pathname);
    
    return(
        <div className="container-fluid p-0">
            
            <div className="col-lg-11 mx-auto mobile-design">
                <select className="m-2" onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Category</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skincare</option>
                    <option value="groceries">groceries</option>
                    <option value="home-decoration">Home-decoration</option>
                </select>
                <div className="d-flex  flex-wrap">
                    {product.filter((categories) => {
                        if(categorys){
                            return(categories.category === categorys);
                        }else{
                            return categories;
                        }
                    })
                    .map((mobile) =>{
                        return(
                             <div className="col-md-3 mt-4 p-3 product text-center" key={mobile.id}>
                                <a href={`/staticdes/${mobile.id}`}>
                                    <img src={mobile.thumbnail} alt=".." className="img-fluid" />
                                    <h2>{mobile.title}</h2>
                                    <p>Price ${mobile.price}</p>
                                    <p>Discount:{mobile.discountPercentage}%</p>
                                </a>
                            </div>
                        )
                    })}

                    {/* <a href="/staticdes">
                    <Mobile 
                    img={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
                    h2={'iPhone 9'}
                    price={"Price $ 549"}
                    discount={"Discount12.96%"}
                    />
                    </a>
                    <a href="/staticdes">
                    <Mobile 
                    img={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
                    h2={'iPhone 9'}
                    price={"Price $ 549"}
                    discount={"Discount12.96%"}
                    />
                    </a>
                    <a href="/staticdes">
                    <Mobile 
                    img={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
                    h2={'iPhone 9'}
                    price={"Price $ 549"}
                    discount={"Discount12.96%"}
                    />
                    </a>
                    <a href="/staticdes">
                    <Mobile 
                    img={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
                    h2={'iPhone 9'}
                    price={"Price $ 549"}
                    discount={"Discount12.96%"}
                    />
                    </a>
                    <a href="/staticdes">
                    <Mobile 
                    img={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
                    h2={'iPhone 9'}
                    price={"Price $ 549"}
                    discount={"Discount12.96%"}
                    />
                    </a>
                    <a href="/staticdes">
                    <Mobile 
                    img={"https://i.dummyjson.com/data/products/2/thumbnail.jpg"}
                    h2={'iPhone X'}
                    price={"Price $ 899"}
                    discount={"Discount17.94%"}
                    />
                    </a>
                    <a href="/staticdes">
                    <Mobile 
                    img={"https://i.dummyjson.com/data/products/3/thumbnail.jpg"}
                    h2={'Samsung Universe 9'}
                    price={"Price $ 1249"}
                    discount={"Discount15.46%"}
                    />
                    </a>
                    <a href="/staticdes">
                    <Mobile 
                    img={"https://i.dummyjson.com/data/products/4/thumbnail.jpg"}
                    h2={'OPPOF19'}
                    price={"Price $ 280"}
                    discount={"Discount17.91%"}
                    />
                    </a> */}
                </div>
            </div>
            
        </div>
    )
}