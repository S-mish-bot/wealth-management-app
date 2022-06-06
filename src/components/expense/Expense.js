import React from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link, useNavigate } from 'react-router-dom';

function Expense() {

let history = useNavigate()


function setID(id,date,description,location,category) {
	localStorage.setItem('id', id);
	localStorage.setItem('Date', date);
	localStorage.setItem('Description', description);
    localStorage.setItem('Location', location);
	localStorage.setItem('Category', category);


}

// Deleted function - functionality
// for deleting the entry
function deleted(id){
	
	var index = array.map(function(e) { return e.id; }).indexOf(id);

	// deleting the entry with index
	array.splice(index,1)

	
	history('/')
}

return (
	<div style={{margin:'10rem'}}>
		<Table striped bordered hover size="sm">
<thead>
	<tr>
	<th>Date</th>
	<th>Description</th>
    <th>Location</th>
	<th>Category</th>


	</tr>
</thead>
<tbody>

	{/* Mapping though every element in the array
	and showing the data in the form of table */}
	{array.map((item) => {
return(
<tr>
	<td>{item.date}</td>
	<td>{item.description}</td>
    <td>{item.location}</td>
	<td>{item.category}</td>


		
	{/* getting theid,name, and age for storing these
		value in the jsx with onclick event */}
	<td><Link to={`/edit`}><Button onClick={(e) =>
	setID(item.id,item.date,item.description,item.location,item.category)} variant="info">
		Update</Button></Link></td>

	{/* Using thr deleted function passing
	the id of an entry */}
	<td><Button onClick={e => deleted(item.id)}
	variant="danger">Delete</Button></td>
	</tr>
)})}
</tbody>
</Table>

{/* Button for redirecting to create page for
insertion of values */}
<Link className="d-grid gap-2" to='/create'>
<Button variant="warning" size="lg">Create</Button>
</Link>
	</div>
)
}

export default Expense;
