/* eslint-disable */
import React, { useState, useEffect, createContext } from 'react'
//init context
export const Context = createContext();

//Context Provider Wrapper
export const ContextProvider = ({ children }) => {
    const [fetchingStatus, setFetchingStatus] = useState("")
    const [countryData, setCountryData] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)
    function constructUrl() {
        let query = "";
        if (selectedCountry) {
            query = `countries/${selectedCountry}`
        }
        return `https://covid19.mathdro.id/api/${query}`

    }
    async function fetchData() {
        try {
            setFetchingStatus("fetching")
            const res = await fetch(constructUrl())
            const data = await res.json()
            setCountryData(data)
            setFetchingStatus("done")
        } catch (e) {
            setFetchingStatus("failed")
            setTimeout(fetchData, 3000);
        }
    }
    useEffect(() => {
        fetchData()
        console.log("fetching...")
    }, [selectedCountry])

    return (
        <Context.Provider value={{ fetchingStatus, countryData, selectedCountry, setSelectedCountry }}>
            {children}
        </Context.Provider>
    )
}