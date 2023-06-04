import { Footer,Mobile, Navbar } from "./Static";
import './Staticdesign.css';

export function Staticdesign(){
    return(
        <div className="container-fluid p-0">
            <Navbar />
            <div className="col-lg-11 mx-auto">
            <div className="row">
            <Mobile 
            img={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
            h2={'iPhone 9'}
            price={"Price $ 549"}
            discount={"Discount12.96%"}
            />
            <Mobile 
            img={"https://i.dummyjson.com/data/products/2/thumbnail.jpg"}
            h2={'iPhone X'}
            price={"Price $ 899"}
            discount={"Discount17.94%"}
            />
            <Mobile 
            img={"https://i.dummyjson.com/data/products/3/thumbnail.jpg"}
            h2={'Samsung Universe 9'}
            price={"Price $ 1249"}
            discount={"Discount15.46%"}
            />
            <Mobile 
            img={"https://i.dummyjson.com/data/products/4/thumbnail.jpg"}
            h2={'OPPOF19'}
            price={"Price $ 280"}
            discount={"Discount17.91%"}
            />
            </div>
            </div>
            <Footer />
        </div>
    )
}