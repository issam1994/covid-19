import React, { useState } from 'react'
import Svg from './Svg'
import { mdiChevronDown } from '@mdi/js'
import { CSSTransition } from 'react-transition-group'

const defaultItems = ['Brad', 'Jimmy', 'chuck']

export default function Select({ items = defaultItems, displayValue = (item) => item, handleSelect = () => null, useSearch = false }) {
    const [selected, setSelected] = useState("Worldwide")
    const [search, setSearch] = useState("")
    const [show, setShow] = useState(false)
    const selectedStyle = (value) => {
        if (selected !== value) {
            return {}
        }
        return ({
            fontWeight: "bold",
            backgroundColor: "#38a169",
            color: 'white'
        })
    }
    const getItems = () => {
        let filteredItems = items.filter(({name}) => RegExp(search,'gi').test(name))
        return filteredItems
    }
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="relative rounded text-lg text-left font-normal">
            {show && <div className="fixed inset-0 bg-transparent" onClick={() => setShow(false)}></div>}
            {/* current value */}
            <div className="flex border shadow-sm rounded-lg cursor-pointer overflow-hidden" onClick={() => setShow(true)}>
                <div className="flex-auto px-3 py-1">{selected}</div>
                {show && useSearch && <div className="absolute overflow-hidden inset-0 m-1"><input onChange={handleSearch} className="px-4 py-1" /></div>}
                <div className="w-8 h-8 mx-3 fill-current">
                        <Svg path={mdiChevronDown} />
                    </div>
            </div>
            {/* items of values */}
                <CSSTransition in={show} timeout={200} classNames="scale" unmountOnExit>
                    <div className="absolute z-30 inset-x-0 w-full bg-white border rounded p-1 overflow-y-scroll" style={{maxHeight: "16rem"}} >
                        {getItems().map((item, i) => <div key={i} className="cursor-pointer px-1 hover:bg-gray-200 rounded" onClick={() => { setSelected(displayValue(item)); handleSelect(item); setShow(false); setSearch("") }} style={selectedStyle(item)}>{displayValue(item)}</div>)}
                    </div>
                </CSSTransition>
            </div>
    )
}