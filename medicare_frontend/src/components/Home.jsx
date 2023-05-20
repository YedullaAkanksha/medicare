import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../Service/ProductService";
import Navbar from "./Navbar";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
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

  const deleteProduct = (id) => {
    ProductService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Delete Sucessfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar/>
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
                          <Link to={'editProduct/'+p.id} className="btn btn-sm btn-primary">
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-sm btn-danger ms-1">
                            Delete
                          </button>
                        </td>
                        {/* </li> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;