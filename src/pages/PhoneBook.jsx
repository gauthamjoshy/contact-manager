import React from "react";

function PhoneBook() {
    return (
        <>
            <div className="container mt-5">
  <h1 className="text-center text-primary mb-4">Contact Manager</h1>

  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow p-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">Full Name:</label>
          <input type="text" id="name" className="form-control" placeholder="Enter full name" />
        </div>

        <div className="mb-3">
          <label htmlFor="number" className="form-label fw-bold">Number:</label>
          <input type="number" id="number" className="form-control" placeholder="Enter phone number" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">Email:</label>
          <input type="email" id="email" className="form-control" placeholder="Enter email address" />
        </div>

        <div className="text-center">
          <button className="btn btn-primary fw-bold px-4">Add Contact</button>
        </div>
      </div>
    </div>
  </div>
</div>

            
            
            <div className="row">
               
                    <div className="col-4"></div>
                    <div className="col mt-5 border border-black rounded rounded w-100">
                        <div style={{height:"50px"}} className="main d-flex justify-content-center align-items-center gap-3">
                            <label className="fs-5 fw-bold" htmlFor="">Sort by : </label>
                            <select name="" id="">
                                <option value=""> </option>
                                <option className="fw-medium" value="">Name</option>
                                <option className="fw-medium"  value="">Number</option>
                                <option className="fw-medium"  value="">Email</option>
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
                    <table className="table border shadow rounded-4 w-75">
                        <thead className="table-dark border">
                            <tr className="border">
                                <th className="text-warning p-3">Name</th>
                                <th className="text-warning p-3">Number</th>
                                <th className="text-warning p-3">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lisa Watson</td>         
                                <td>5897845629</td>                     
                                <td>lisa@gmail.com</td>
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
