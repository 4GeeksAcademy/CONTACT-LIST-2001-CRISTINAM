import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/demo.css";

export const FormEdit = () => {

	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const { theid } = useParams();

    const inputFullName = (eName) =>{
		setName(eName.target.value)	
	};

	const inputEmail = (eMail) =>{
		setMail(eMail.target.value)	
	};

	const inputPhone = (ePhone) =>{
		setPhone(ePhone.target.value)	
	};

	const inputAddress = (eAddress) =>{
		setAddress(eAddress.target.value)	
	};

	


	const saveChange = (id) =>{
		actions.editContact({
			full_name: name,
			email: mail, 
			phone: phone,
			address: address,
			
		}, theid );

		setName("");
		setMail("");
		setPhone("");
		setAddress("");
	}

	
	return (
        <>
		<div className="container">
			<center><h2>Edit Contact</h2></center>
        <div className="mb-3">
  			<label for="formGroupExampleInput" className="form-label">Full Name</label>
  			<input type="text" className="form-control" onChange={inputFullName} value={name} placeholder="Enter Full Name"></input>
		</div>

		<div className="mb-3">
  			<label for="formGroupExampleInput2" className="form-label">Email</label>
  			<input type="text" className="form-control" onChange={inputEmail} value={mail} placeholder="Enter Email"></input>
		</div>

		<div className="mb-3">
  			<label for="formGroupExampleInput3" className="form-label">Phone</label>
  			<input type="text" className="form-control" onChange={inputPhone} value={phone} placeholder="Enter Phone"></input>
		</div>

		<div className="mb-3">
  			<label for="formGroupExampleInput3" className="form-label">Address</label>
  			<input type="text" className="form-control" onChange={inputAddress} value={address} placeholder="Enter Address"></input>
		</div>

		<div className="col-12 mt-3">
            <button className="save_button btn btn-success" style={{width:"100%"}} onClick={saveChange}>Save Changes</button>
        </div>

		<div className="col-12 mt-3">
			<Link to="/demo">
                <button className="return_button btn btn-primary">Back to Contacs</button>
            </Link>
        </div>
        </div>
        </>	
	);
};