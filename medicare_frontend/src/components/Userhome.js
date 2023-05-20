import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import ProductService from "../Service/ProductService";
import UserNavbar from './UserNavbar'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Userhome = () => {

  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  const [post, setPost] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    init();
  }, []);

  const init = () => {
    ProductService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sort = () => {
    ProductService
      .getProductsByPrice()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlepay=()=>{
        navigate('/payment')
  }

  const addProduct = (id) => {
    ProductService
      .getProductById(id)
      .then((res) => {
        const data1= res.data;
        setMsg("Added Sucessfully");
        axios.post('http://localhost:4040/products/', {
           data1
          })
          .then(() => {
            setPost(data1);
            console.log(post);
          });
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
    <div>
        <UserNavbar/>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                All Medicines Available
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>
              
              <div className="card-body">
              <div>
              <button type="button" className="btn btn-success " onClick={sort}>Sort By Price</button>
              </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                        
                      <tr key={p.id}>
                        {/* <li key={p.id}> */}
                        <td>{num + 1}</td>
                        <td>{p.name}</td>
                        <td>{p.des}</td>
                        <td>{p.price}</td>
                        <td>{p.status}</td>
                        <td>
                          <button
                            onClick={() => addProduct(p.id)}
                            className="btn btn-sm btn-danger ms-1">
                            ADD
                          </button>
                        </td>
                        {/* </li> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-center">
                    <button type="button" onClick={handlepay} className="btn btn-primary">Payment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Userhome
