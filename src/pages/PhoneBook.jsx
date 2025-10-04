import React from "react";

function PhoneBook() {
    return (
        <>
            <div className="container">
                <h1 className="text-center text-primary mt-5">Contact Manager</h1>
                <div className="d-flex justify-content-center align-items-center">
                    <button style={{ width: "180px", height: "50px" }} className="btn btn-primary mt-3 fw-bold">Add Contact</button>
                </div>
                
            </div>
            
            <div className="row">
               
                    <div className="col-4"></div>
                    <div className="col mt-5 border border-black rounded rounded w-100">
                        <div style={{height:"50px"}} className="main d-flex justify-content-center align-items-center gap-3">
                            <label className="fs-5 fw-bold" htmlFor="">Sort by : </label>
                            <select name="" id="">
                                <option value=""> </option>
                                <option value="">Name</option>
                                <option value="">Email</option>
                                <option value="">Number</option>
                            </select>
                            <div>
                                <button style={{width:"auto", height:"30px"}} className="btn btn-success d-flex justify-content-center align-items-center">Sort</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                
            </div>

            <div className="row mt-5">
                <div className="col-1"></div>
                <div className="col d-flex justify-content-center align-items-center">
                    <table className="table border shadow rounded-4 w-75 ">
                        <thead className="table-dark border">
                            <tr className="border">
                                <th className="">Name</th>
                                <th>phone</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lisa Watson</td>
                                <td>5897845629</td>
                                <td>lisa@gmail.com</td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>7587456291</td>
                                <td>developerjohn@gmail.com</td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>7587456291</td>
                                <td>developerjohn@gmail.com</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="col-1"></div>
            </div>
        </>
    );
}

export default PhoneBook;
