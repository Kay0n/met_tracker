import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js'
import sequelize from "../lib/sequelize";
import { Op } from "sequelize"

let data = {
    labels: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December'],

}



const Graph = (props) => {

    // proccesses x axis into mode var
    if (props.values.xaxis == "1") {
        let mode = "month"
    } else {
        let mode = "year" 
    }

    // fetches data via sequalize, based off mode
    if (props.values.yaxis == "1") {
        const array = sequelize.model.records.findAndCountAll({
            where: {
                and$: sequelize.where(sequelize.fn(mode, sequelize.col('start_date')), data.lables)
            }
        })


    } else {
        const array = sequelize.model.records.findAndCountAll({
            where: {
                and$: sequelize.where(sequelize.fn(mode, sequelize.col('start_date' + 'end_date')), data.lables)
            }
        })

    }
    // maps array of data to "data" variable to be used directly in graph
    data.datasets = array.map(value => {
            return {
                label: value.cause,
                data: value.data
            }

        })
        
    return (
        <div>
            {/* Dynamic Title */}
            {(props.values.yaxis == "1") ? <h2> Diagnosis count by {mode} </h2> : <h2> Call hours count by {mode} </h2> }
            
            <Bar
                data={data}
                width={400}
                height={200}
                options={{
                    maintainAspectRatio: true
                }}
            />
        </div>
    );
    
}

// Export Default
export default Graph;