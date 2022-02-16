import styles from "../styles/dynamicform.module.scss"
import { Field, FieldArray } from "formik"




const DynamicForm = (props) => {

    // Send error messages if proper values are not set as children of component
    const values = props.values ?? (() => {throw new Error("DynamicForm props must include a name")})
    const name = props.name ?? (() => {throw new Error("DynamicForm props must include a name")})
    const options = props.options ?? (() => {throw new Error("DynamicForm props must include options")})
    const data = "data"


    // Main display
    return (
        <div>
            

            <FieldArray name={name}>
                {(array) => (
                    <div>
                        <br/>
                        
                        {/* Individual Field */}
                        {values[name] != undefined && values[name].map((value,index) => (
                            <div key={index}>

                                {/* Display field and dropdown options */}
                                <Field  name={`${name}.${index}.${data}`} as="select">
                                    {options.map((option) => {
                                            return <option key={option.id} value={option.id}>{option.name}</option>
                                    })}
                                </Field>
                                    
                                {/* Remove Field */}
                                <button 
                                    type="button"
                                    onClick={()=> {
                                        console.log("removed index: "+index)
                                        array.remove(index)
                                    }}
                                >Delete
                                </button>

                            </div>
                        ))}
                         <br/>

                        {/* Add new Field */}
                        <button className={styles.dynamicform} type="button" onClick={() => {
                            console.log("adding new")
                            array.push({[data]: 0})
                        }}>+</button>
                        
                    </div>
                )}
            </FieldArray>
        </div>
    )   
}


export default DynamicForm










