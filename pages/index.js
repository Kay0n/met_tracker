
import { listenerCount } from "events"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

import Link from 'next/link'


const Home = (props) => {

    return (
        <div>
            <Sidebar />
            <Navbar title="MET Tracker">

            </Navbar>
            <div className="content">
                <tr>
		<th>First Name</th>
		<th>Last Name</th>
		<th>DOB</th>
        <th>Link</th>
	</tr>
	<tr >
		<th>First</th>
		<th>Last</th>
		<th>2000/02/02</th>
		<th><a href={"/?id="}>Edit</a></th>
	</tr>
    <tr >
		<th>Brian</th>
		<th>Williams</th>
		<th>2000/09/04</th>
		<th><a href={"/?id="}>Edit</a></th>
	</tr>
    <tr >
		<th>Sally</th>
		<th>Sparrow</th>
		<th>2000/03/01</th>
		<th><a href={"/?id="}>Edit</a></th>
	</tr>
            </div>
        </div>
    )

}

export default Home



