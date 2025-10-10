import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // for toggle icons

function PhoneBook() {
  // single contact input state
  const [contact, addContact] = useState({
    name: "",
    number: "",
    email: "",
  });

  // all contacts
  const [newContact, addNewContact] = useState([]);

  // alert messages
  const [alertMessage, currentAlertMessage] = useState("");

  // sorting
  const [sortBy, setSortBy] = useState("");
  const [ascending, setAscending] = useState(true);

  // check duplicate
  const checkDuplicates = (contact) => {
    return newContact.some(
      (person) =>
        person.name === contact.name &&
        person.number === contact.number &&
        person.email === contact.email
    );
  };

  // add contact
  const handleContact = () => {
    if (contact.name && contact.number && contact.email) {
      if (
        contact.name.trim() !== "" &&
        contact.number.trim() !== "" &&
        contact.email.trim() !== ""
      ) {
        if (checkDuplicates(contact)) {
          currentAlertMessage("⚠️ Contact Already Exists!");
        } else {
          addNewContact([...newContact, contact]);
          addContact({
            name: "",
            number: "",
            email: "",
          });
          currentAlertMessage("");
        }
      }
    } else {
      currentAlertMessage("⚠️ Please fill all the details completely!");
    }
  };

  // edit contact
  const editContact = (index) => {
    addContact({
      name: newContact[index].name,
      number: newContact[index].number,
      email: newContact[index].email,
    });
    const tempContact = [...newContact];
    tempContact.splice(index, 1);
    addNewContact(tempContact);
  };

  // delete contact
  const deleteContact = (index) => {
    const deleteList = [...newContact];
    deleteList.splice(index, 1);
    addNewContact(deleteList);
  };

  // sort contacts
  const handleSort = () => {
    if (!sortBy) {
      currentAlertMessage("⚠️ Please select a sort type first!");
      return;
    }

    const sortedContacts = [...newContact].sort((a, b) => {
      let valA = a[sortBy].toLowerCase();
      let valB = b[sortBy].toLowerCase();
      if (valA < valB) return ascending ? -1 : 1;
      if (valA > valB) return ascending ? 1 : -1;
      return 0;
    });

    addNewContact(sortedContacts);
    currentAlertMessage("");
  };

  // toggle ascending/descending
  const toggleOrder = () => setAscending(!ascending);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center text-primary mb-4">Contact Manager</h1>

        {/* Input Card */}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={contact.name}
                  onChange={(e) => {
                    addContact({ ...contact, name: e.target.value });
                    currentAlertMessage("");
                  }}
                  className="form-control"
                  placeholder="Enter full name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="number" className="form-label fw-bold">
                  Number:
                </label>
                <input
                  type="number"
                  id="number"
                  value={contact.number}
                  onChange={(e) => {
                    addContact({ ...contact, number: e.target.value });
                    currentAlertMessage("");
                  }}
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={contact.email}
                  onChange={(e) => {
                    addContact({ ...contact, email: e.target.value });
                    currentAlertMessage("");
                  }}
                  className="form-control"
                  placeholder="Enter email address"
                />
              </div>

              <div className="text-center">
                <button
                  onClick={handleContact}
                  className="btn btn-primary fw-bold px-4"
                >
                  Add Contact
                </button>

                {alertMessage && (
                  <h5 className="text-center fw-medium text-warning mt-3">
                    {alertMessage}
                  </h5>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sort Section */}
      <div className="row">
        <div className="col-4"></div>
        <div className="col mt-5 border border-black rounded w-100">
          {newContact.length !== 0 && (
            <div
              style={{ height: "50px" }}
              className="main d-flex justify-content-center align-items-center gap-3"
            >
              <label className="fs-5 fw-bold" htmlFor="">
                Sort by:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">-- Select --</option>
                <option className="fw-medium" value="name">
                  Name
                </option>
                <option className="fw-medium" value="number">
                  Number
                </option>
                <option className="fw-medium" value="email">
                  Email
                </option>
              </select>
              <div className="d-flex gap-2">
                <button
                  onClick={handleSort}
                  style={{ width: "auto", height: "30px" }}
                  className="btn btn-success d-flex justify-content-center align-items-center"
                >
                  Sort
                </button>

                <button
                  onClick={toggleOrder}
                  style={{ width: "auto", height: "30px" }}
                  className="btn btn-secondary d-flex justify-content-center align-items-center"
                  title="Toggle Asc/Desc"
                >
                  {ascending ? <FaArrowUp /> : <FaArrowDown />}
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="col-4"></div>
      </div>

      {/* Display Table */}
      <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col d-flex justify-content-center align-items-center">
          {newContact.length !== 0 ? (
            <table className="table border shadow rounded-4 w-75">
              <thead className="table-dark border">
                <tr className="border">
                  <th className="text-warning p-3">Name</th>
                  <th className="text-warning p-3">Number</th>
                  <th className="text-warning p-3">Email</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {newContact.map((person, index) => (
                  <tr key={index}>
                    <td>{person.name}</td>
                    <td>{person.number}</td>
                    <td>{person.email}</td>
                    <td>
                      <button
                        onClick={() => editContact(index)}
                        className="fs-4 text-warning border-0"
                      >
                        <FaEdit />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteContact(index)}
                        className="fs-4 text-danger border-0"
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 className="text-center text-primary">
              No Contacts Added Yet
            </h1>
          )}
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
}

export default PhoneBook;
