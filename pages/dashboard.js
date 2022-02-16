
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

import Graph from "../components/Graph"
import { Formik, Field, Form, ErrorMessage } from 'formik';





const Dashboard = () => {
    
    return (
        <div>
            <Sidebar />
            <Navbar title="Dashboard">
            </Navbar>
            <div className="content">
                <Formik
                    
                    // called when form is submitted
                    onSubmit={(values) => {
                        console.log("Data Submitted")
                    }}
                >
                    {/* Main form, exposes form state to be used by components */}
                    {(formState) => ( 
                        <Form id="main_form">
                            <h4>X-Axis</h4>
                            <Field name="xaxis" as="select">
                            <option value="2">Yearly</option> 
                                <option value="1">Monthly</option>  
                                 
                            </Field> 

                            
                            <h4>Y-Axis</h4>
                            <Field name="yaxis" as="select">
                            <option value="2">Time in Hours</option>  
                                <option value="1">Diagnosis Count</option>  
                                
                            </Field> 
                            <Graph data={formState.values}/>
                            
                        </Form>
                        
                    )}
                </Formik>
                
            </div>

        </div>
    )

}





export default Dashboard


