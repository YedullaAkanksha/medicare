import React from 'react'
import { useEffect, useState } from "react";
import UserNavbar from './UserNavbar';
import { ToastContainer, toast } from 'react-toastify';

const Payment = () => {
    const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:4040/products`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlepay=()=>{

    toast.success("Payment Successful", {position: toast.POSITION.BOTTOM_CENTER});
  }  
  return (
    <>
     <UserNavbar/>
    <div className='container my-4 justify-content-center'>
       
        <div className="card">
        <div className="card-header fs-3 text-center">
                All Added Medicines
        </div>
     <table className="table">
      <tbody>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
        {data.map((item, num) => (
          <tr key={item.id}>
            <td>{num+1}</td>
            <td>{item.data1.name}</td>
            <td>
             {item.data1.des}  
            </td>
            <td>{item.data1.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
    <div className="text-center my-4">
                    <button type="button" onClick={handlepay} className="btn btn-danger">Confirm Payment</button>
                </div>
                <ToastContainer/>
    </div>
    </>
  )
}

export default Payment
