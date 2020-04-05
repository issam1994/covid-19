import React, { useContext } from 'react'
import Svg from '../components/common/Svg'
import MySpinner from '../components/common/Loading'
import { mdiEmoticonDeadOutline as dead, mdiEmoticonSadOutline as sick, mdiEmoticonHappyOutline as recovered } from '@mdi/js'
import { Context } from '../context'

const Stats = () => {
    const { countryData } = useContext(Context);
    const getNumber = (target) => countryData ? normalizeNumbers(countryData[`${target}`].value) : null
    return (
        <div className="flex flex-wrap justify-center items-end shadow-sm md:text-6xl text-5xl font-thin text-white bg-teal-00">
            {/* confirmed */}
            <div className="relative w-full md:w-1/3 flex flex-wrap p-4 text-indigo-700">
                <MySpinner color="indigo" />
                <h1 className="text-sm w-full font-semibold opacity-50">Confirmed</h1>
                <div className="flex">
                    <h1 className="">{getNumber("confirmed")}</h1>
                    <Svg className="flex-none mx-4" path={sick} />
                </div>
            </div>
            {/* recovered */}
            <div className="relative w-full md:w-1/3 flex flex-wrap p-4 text-green-700">
                <MySpinner color="green" />
                <h1 className="text-sm w-full font-semibold opacity-50">Recovered</h1>
                <div className="flex">
                    <h1 className="">{getNumber("recovered")}</h1>
                    <Svg className="flex-none mx-4" path={recovered} />
                </div>
            </div>
            {/* deaths */}
            <div className="relative w-full md:w-1/3 flex flex-wrap p-4 text-red-700">
                <MySpinner color="red" />
                <h1 className="text-sm w-full font-semibold opacity-50">Deaths</h1>
                <div className="flex">
                    <h1 className="">{getNumber("deaths")}</h1>
                    <Svg className="flex-none mx-4" path={dead} />
                </div>
            </div>
        </div>
    )
}

function normalizeNumbers(value) {
    let digitsArray = value.toString().split("").reverse();
    let count = 0
    let digitsArrayWithComas = []
    for (let i = 0; i < digitsArray.length; i++) {
        if (count === 2 && i !== digitsArray.length - 1) {
            digitsArrayWithComas.push(digitsArray[i])
            digitsArrayWithComas.push(",")
            count = 0
        } else {
            digitsArrayWithComas.push(digitsArray[i])
            count = count + 1
        }
    }
    return digitsArrayWithComas.reverse().join("")
}
export default Stats