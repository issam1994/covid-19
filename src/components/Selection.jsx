// eslint-disable
import React, { useContext, useEffect, useState } from 'react'
import Select from '../components/common/Select'
import { Context, } from '../context'

const Selection = () => {
    const {setSelectedCountry} = useContext(Context)
    const [countries, setCountries] = useState([])
    useEffect(() => {
        async function getCountries() {
            try {
                const apiUrl = `https://covid19.mathdro.id/api/countries`
                const res = await fetch(apiUrl)
                const {countries} = await res.json()
                setCountries(countries)
            } catch (e) {
                setTimeout(getCountries, 3000)
            }
        }
        getCountries()
    }, [])
    const handleSelect = (e) => {
        setSelectedCountry(e.iso2)
    }
    return (
        <div className="flex items-center justify-center py-8">
           <div className="w-64 max-w-xs">
           <Select items={countries} displayValue={(item) => item.name} handleSelect={handleSelect} useSearch />
           </div>
        </div>
    )
}

export default Selection