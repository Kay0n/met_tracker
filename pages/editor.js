
// Imports
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DynamicForm from "../components/DynamicForm";
import sequelize from "../lib/sequelize";





// Main Page
const Editor = () => {
    return (
        <div>

            <Sidebar />
            <Navbar title="MET Editor">
                <button>MET Details</button>
                <button>Patient Info</button>


                {/* Form submit button */}
                <button form="main_form" type="submit" className="save_button" >Save</button>
            </Navbar>


            <div className="content">
                {props.ErrorMessage && <h1>Server Connection Issues</h1>}
                

                <Formik
                    initialValues={{
                        
                        ...records
                    }}

                    // called when form is submitted
                    onSubmit={(values) => {
                        console.log("Data Submitted")
                        console.log(values)
                        submitRecord(values)
                    }}
                >
                    {/* Main form, exposes form state to be used by components */}
                    {(formState) => ( 
                        <Form id="main_form">
                            


                             <div className="page_1">
                                <br/>
                                <label htmlFor="start_date">Start Date: </label>
                                <Field name="start_date" type="date" />&nbsp; &nbsp; &nbsp;
                                
                                <label htmlFor="end_date">End Date: </label>
                                <Field name="end_date" type="date" />

                                <br/>
                                <label htmlFor="registrar_name">Registrar:</label>
                                    <Field name="registrar_name" type="text" /> &nbsp; &nbsp; &nbsp;

                                <label htmlFor="icu_access_name">ICU Access:</label>
                                    <Field name="icu_access_name" type="text" />
                                
                                <br/>
                                <label htmlFor="met_consultant">MET Consultant:</label>
                                    <Field name="met_consultant" type="text" /> &nbsp; &nbsp; &nbsp;


                                <label htmlFor="consultant_attend_bool">In Attendance: </label>
                                <Field name="consultant_attend_bool" type="checkbox" />

                                {/* only displays if previous checkbox is unchecked */}
                                {
                                formState.values.consultant_attend_bool != true && <div>
                                    <label htmlFor="consultant_contact_time">Time Contacted: </label>
                                    <Field name="consultant_contact_time" type="text" />
                                    </div>
                                }
                                
                            </div>
                            <hr/>
                            <div className="page_2">

                                <label htmlFor="first_name">First Name:&nbsp;</label>
                                <Field name="first_name" type="text" />

                                <label htmlFor="last_name">Last Name:&nbsp;</label>
                                <Field name="last_name" type="text" />
                                <br/>

                                <label htmlFor="dob">DOB:&nbsp;</label>
                                <Field name="dob" type="date" />&nbsp;&nbsp;

                                <label htmlFor="address">Address:&nbsp;</label>
                                <Field name="address" type="text" />&nbsp;&nbsp;

                                <label htmlFor="ur">UR:&nbsp;</label>
                                <Field name="ur" type="number" />
                                <br/>

                                <label htmlFor="gcs">GCS: </label>
                                <Field name="gcs" type="number" />

                                <label htmlFor="respiratory_rate">RR</label>
                                <Field name="respiratory_rate" type="number" />

                                <label htmlFor="heart_rate">HR</label>
                                <Field name="heart_rate" type="text" />

                                <label htmlFor="rythm">Rythm</label>
                                <Field name="rythm" type="text" />

                                <label htmlFor="o2_flow">O2 Flow</label>
                                <Field name="o2_flow" type="number" />

                                <label htmlFor="blood_pressure">BP</label>
                                <Field name="blood_pressure" type="number" />

                                <label htmlFor="temperature">Temperature</label>
                                <Field name="temperature" type="number" />
                                <br/>

                                <label htmlFor="cause">Reason for MET</label>
                                
                                {/* Dynamic input for cause */}
                                <DynamicForm 
                                    name="cause" 
                                    values={formState.values}
                                    options={options.cause}
                                />

                                
                                <label htmlFor="cause_comment">Comment</label>
                                <Field name="cause_comment" type="text"     /> 

                                <br/>
                                <br/>

                                {/* Dynamic input for medications */}
                                <label htmlFor="medications">Medications: </label>
                                <DynamicForm 
                                    name="medications" 
                                    values={formState.values}
                                    options={options.medications}
                                />

                                {/* Dynamic input for management */}
                                <label htmlFor="Management">Management: </label>
                                <DynamicForm 
                                    name="management" 
                                    values={formState.values}
                                    options={options.management}
                                />


                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )

}

// called when the form data is submitted
const submitRecord = async (data) => {
    // create new record
    sequelize.model.records.create({
        data
    })

    // check if patient id already exists
    patientExist = await sequelize.model.patient.findAll({
        where: {
            patient_id: data.ur
        }
    })

    // if not, create new patient
    if (PatientExist == undefined ){
        sequelize.model.patients.create({
            data
        })
    }
}




// Data is fetched on page load
export async function getServerSideProps({ query }) {

    // check connection to server
    sequelize.authenticate()
    .then(() => {console.log('Connection has been established successfully.')})
    .catch(err => { // if connection is unsuccessful, send error to user
        console.log("Connection unsuccessfull: ",err)
        let connectionError = true
        return {
            props: {connectionError}
        }
    })

    // fetch data for records and all dropdown menu items
    let records = await sequelize.models.records.findAll({
        where: {
            record_id: query.id
        }
    })
    let management = await sequelize.models.management.findAll()
    let medications = await sequelize.models.medications.findAll()
    let cause = await sequelize.models.cause.findAll()

    // send as props
    return {
        props: {records, management, medications, cause}
    }
}



// Export Default
export default Editor