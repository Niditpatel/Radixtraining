import {useState} from 'react'
import ProductList from './Productlist';
export default function Product(){
    const [product, setproduct] = useState({});
    const [Products, setProducts] = useState([]);
    return(
        <>
        <div className='border p-5 mb-5 w-fit mx-auto'>
            <label for='productname'>ProductName : </label><br></br>
            <input type='text' className='border border-black px-1' id='productname' onChange={e=>setproduct(p=>({...p,ProductName:e.target.value}))}></input><br></br><br></br>
            <label for='Price'>Price : </label><br></br>
            <input type='number' className='border border-black px-1' id='Price' onChange={e=>setproduct(p=>({...p,Price:e.target.value}))}></input><br></br><br></br>
            <label for='Qty'>Qty : </label><br></br>
            <input type='number' className='border border-black px-1' id='Qty' onChange={e=>setproduct(p=>({...p,Qty:e.target.value}))}></input><br></br><br></br>
            <button className='border border-black rounded-xl px-2 py-1 hover:bg-gray-200 mb-3' onClick={
                e=>{
                    e.preventDefault();
                    setProducts([...Products,{ProductName:product.ProductName,Price:product.Price,Qty:product.Qty,Gross:(product.Price * product.Qty),
                        Discount:((product.Price * product.Qty)*0.05).toFixed(2),PayableAmount:((product.Price * product.Qty)-((product.Price * product.Qty)*0.05)).toFixed(2)}])
                }
            }>Add Product</button>
        </div>
        {Products.length !==0 &&
        <ProductList products={Products}></ProductList>}
        </>
    )
}