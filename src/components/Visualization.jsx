import React, { useContext } from 'react'
import { Pie } from 'react-chartjs-2'
import MySpinner from '../components/common/Loading'
import { Context } from '../context'

const Visualization = () => {
    const {countryData } = useContext(Context)
    const constructData = () => {
        if (countryData === null) {
            return {}
        }
        const deaths = countryData.deaths.value
        const recovered = countryData.recovered.value
        const stillSick = countryData.confirmed.value - (deaths + recovered)
        return {
            labels: [
                'deaths 😵',
                'recovered 🙂',
                'still Sick 😷'
            ],
            datasets: [{
                data: [deaths, recovered, stillSick],
                backgroundColor: [
                    "red",
                    "green",
                    "indigo"
                ]
            }]
        }
    }
    return (
        <div className="relative flex justify-center">
            <Pie data={constructData()} />
            <MySpinner  />
        </div>
    )
}

export default Visualization