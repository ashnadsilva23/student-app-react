import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {

    const[data,changeData]=useState(
        [
            {
                "name":"",
                "rollNo":"",
                "admNo":"",
                "college":""
            }
           
        ]
    )
    
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                   alert("successfully registered")
                    
                } else {
                    alert("failed")
                    
                }
            }
        ).catch().finally()
    }

  return (
    <div>
        <Navbar/><br></br>
        <div className="container">
            <h2 align="center"><u>Student Registration</u></h2><br></br><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 cpl-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Admission Number</label>
                            <input type="text" className="form-control" name='admNo' value={data.admNo} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Roll no</label>
                            <input type="text" className="form-control" name='rollNo' value={data.rollNo} onChange={inputHandler}/>
                        </div>
                      
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                        </div>
                        
                        
                        
                        
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent