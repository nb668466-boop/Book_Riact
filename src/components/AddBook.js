import { useState } from 'react';

function AddBood(props) {
    const {setBook}=props;
    const[name,setName]=useState("");
    const[code,setCode]=useState("");
    const[price,setPrice]=useState("");
    const[discount,setDiscount]=useState("");
    const[quantity,setQuantity]=useState("");
    const[author,setAuthor]=useState("");
    const[Category1,setCategory1]=useState("");
    const [itemsCategory,setItemsCategory]=useState([]); // חדש

    return(<>
    <div className="add-book">
        <h1>Add a book</h1>
       

        <div className="fields">
             <div className="field">
                 {/*הכנסת שם*/}
                  <label htmlFor="Name">enter name</label>
                  <input id="Name" onChange={(e)=>setName(e.target.value)}></input>
             </div>
             <div className="field">
                 {/*הכנסת קוד*/}
                <label htmlFor="Code">enter Code</label>
                 <input id="Code" onChange={(e)=>setCode(e.target.value)}></input>
              </div>

            <div className="field">
                   {/*הכנסת מחיר*/}
                   <label htmlFor="Price">enter Price</label>
                   <input id="Price" onChange={(e)=>setPrice(e.target.value)}></input>
            </div>

           <div className="field">
                   {/*הכנסת הנחה*/}
                   <label htmlFor="Discount">enter Discount</label>
                   <input id="Discount" onChange={(e)=>setDiscount(e.target.value)}></input>
          </div>

           <div className="field">
                  {/*הכנסת כמות במלאי*/}
                  <label htmlFor="Quantity">enter Quantity</label>
                   <input id="Quantity" onChange={(e)=>setQuantity(e.target.value)}></input>
                </div>

           <div className="field">
                {/*הכנסת סופר*/}
                <label htmlFor="Author">enter Author</label>
                 <input id="Author" onChange={(e)=>setAuthor(e.target.value)}></input>
             </div>

             <div className="field">
                 {/*הכנסת קטגוריות*/}
                 <lable htmlFor="Category">enter category</lable>                                              
                  <input id="Category" value={Category1} onChange={(e)=>setCategory1(e.target.value)}></input>           
                 <button onClick={()=>{setItemsCategory([...itemsCategory,Category1]);setCategory1("")}}>add categorys</button> 
            </div>
        </div>
        <ul>   
             {itemsCategory.map((itemsCategory,i)=><span key={i}>{itemsCategory}</span>)}  
             </ul> 
        <button onClick={()=>{setBook(s=>s.concat({name:name,code:code,price:price,discount:discount,quantity:quantity,author:author,Category:itemsCategory}))}}>save</button>     
        </div>                                     
        </> )  
    
} 
export default AddBood;