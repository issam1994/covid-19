import React, {useContext} from 'react'
import {Context} from '../../context'
import Spinner from 'react-spinkit'

const Loading = ({color = "light gray", ...rest}) => {
    const {fetchingStatus} = useContext(Context)
    if(fetchingStatus !== "fetching") return null;
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-white" {...rest} >
            <Spinner className='w-10 h-10' name="chasing-dots" color={color} />
        </div>
    )
}

export default Loading