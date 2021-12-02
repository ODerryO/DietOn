import React from 'react';
import { Line } from "react-chartjs-2";
import styles from "./LineChart.module.css";



function LineChart() {
    

    return (
        <div className={styles.chartWrapper}>
            <Line
            data={{
                labels: ["1-10 June 2021","11-17 June 2021", "18-24 June 2021","25-31 June 2021"],
                
                datasets: [
                    {
                        label: "Weight",
                        data: [63,61,60,0],
                        backgroundColor: "rgba(207, 235, 219, 1)",
                        borderColor: "#0e9c4a",
                        borderWidth: 1,
                        fill:"green",
                       
                    }
                ]
            }}

            options={{
                scales: {
                    y: {
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return value + ' kg';
                            }
                        }
                    }
                }
            }}
            >

            </Line>
            
        </div>
    )
}

export default LineChart

