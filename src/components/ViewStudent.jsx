import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewStudent = () => {
    const[data,changeData]=useState(  [
        ]
    )
const fetchData=()=>{
    axios.post("http://localhost:8080/view").then(
        (response)=>{
            console.log(data)
            changeData(response.data)
           
                
            }

        
    ).catch().finally()
}
useEffect(()=>fetchData(),[])
    return (
        <div>
            <Navbar/><br></br>
            <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Roll No</th>
      <th scope="col">Admission Number </th>
      <th scope="col">college</th>
    </tr>
  </thead>
  <tbody>
   
{data.map(
    (value,index)=>
        {
            return <tr>
                
           <td>{value.name}</td>
           <td>{value.rollNo}</td>
           <td>{value.admNo}</td>
           <td>{value.college}</td>
          </tr>
        }
)}
    
  </tbody>
</table>
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default ViewStudent