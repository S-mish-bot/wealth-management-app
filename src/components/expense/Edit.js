import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Edit() {

	// Here usestate has been used in order
	// to set and get values from the jsx
	const [date, setdate] = useState('');
	const [description, setdescription] = useState('');
    const [location, setlocation] = useState('');
	const [category, setcategory] = useState('');
    const[id,setid] = useState('');
  

	// used for navigation with logic in javascript
	let history = useNavigate()
	
	// getting an index of an entry with an id
	var index = array.map(function(e) { return e.id; }).indexOf(id);

	// function for handling the edit and
	// pushing changes of editing/updating
	const handelSubmit = (e) =>{
		e.preventDefault(); // preventing from reload
		
		let a = array[index] // getting an index of an array

		// putting the value from the input textfield and
		// replacing it from existing for updation
		a.date = date
		a.description = description
        a.location = location
        a.category = category

		// redirecting to main page
		history('/')
	}


	// Useeffect take care that page will be rendered only once
	useEffect(() => {
		setdate(localStorage.getItem('Date'))
		setdescription(localStorage.getItem('Description'))
        setlocation(localStorage.getItem('Location'))
		setcategory(localStorage.getItem('Category'))


		setid(localStorage.getItem('id'))
	}, [])
	
return (
	<div>
		<Form className="d-grid gap-2" style={{margin:'15rem'}}>

			{/* setting a name from the input textfiled */}
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Control value={date}
							onChange={e => setdate(e.target.value)}
							type="text" placeholder="Enter Date" />
			</Form.Group>

			{/* setting a age from the input textfiled */}
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Control value={description}
							onChange={e => setdescription(e.target.value)}
							type="text" placeholder="Description" />
			</Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Control value={location}
							onChange={e => setlocation(e.target.value)}
							type="text" placeholder="Location" />
			</Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Control value={category}
							onChange={e => setcategory(e.target.value)}
							type="text" placeholder="Category" />
			</Form.Group>

			{/* Hadinling an onclick event running an edit logic */}
			<Button
			onClick={e => handelSubmit(e)}
			variant="primary" type="submit" size="lg">
				Update
			</Button>

			{/* Redirecting to main page after editing */}
			<Link className="d-grid gap-2" to='/expense'>
			<Button variant="warning" size="lg">Expense</Button>
			</Link>
		</Form>
	</div>
)
}

export default Edit
