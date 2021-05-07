import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'
const SkillChart = (props) => {
    var skillNames = []
    var skillDataSet = []
    props.yAxes.forEach(element => {
        skillNames.push(element[0])
        skillDataSet.push(element[2])
    })
    skillDataSet.push(0)
    skillDataSet.push(100)
    var wtSkills = ["HTML", "CSS", "Boostrap", "Javascript"]
    
    return (
        <div>
            <HorizontalBar
                data = {{
                    labels: skillNames,
                    datasets: [
                        {
                            label: 'Skill Level Rating in %',
                            data: skillDataSet,
                            backgroundColor: "#42a492d5"
                        },
                    ],
                }}
                width = {props.width}
                height = {props.height}
                options = {{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            }
                        ],
                    },
                }} 
            />
        </div>
    );
}

export default SkillChart
