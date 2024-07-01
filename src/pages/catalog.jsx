import './styles/catalog.css';
import Product from '../components/product';

const data = [
    {
        "title": "Bananna",
        "price": 11.11,
        "catagory": "fruit",
        "image": "bananna.png",
        "_id": "123abc"
    },
    {
        "title": "test 2",
        "price": 22.22,
        "catagory": "fruit",
        "image": "test2img.png",
        "_id": "456rty"
    },
    {
        "title": "test 3",
        "price": 33.33,
        "catagory": "fruit",
        "image": "test3img.png",
        "_id": "789poy"
    },
    {
        "title": "test 4",
        "price": 44.44,
        "catagory": "fruit",
        "image": "test4img.png",
        "_id": "853sgj"
    },
    {
        "title": "test 5",
        "price": 55.55,
        "catagory": "fruit",
        "image": "test5img.png",
        "_id": "825fhs"
    },
    {
        "title": "test 6",
        "price": 66.66,
        "catagory": "fruit",
        "image": "test6img.png",
        "_id": "397kvd"
    },
];


function Catalog(){ 
    return(
        <div className='catalog'>
            <h1>This is the catalog</h1>
        
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    );

}


export default Catalog;