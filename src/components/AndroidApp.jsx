import React from 'react'
import Svg from './common/Svg'
import { mdiCellphoneAndroid as androidIcon } from '@mdi/js'
import { CSSTransition } from 'react-transition-group'

export default function AndroidApp() {
    const [show, setShow] = React.useState(false)
    React.useEffect(() => {
        setTimeout(() => setShow(true), 2000)
    }, [])
    return (
        <CSSTransition in={show} classNames="scale" timeout={300} unmountOnExit>
            <div className="fixed mx-auto bottom-0 w-full max-w-6xl">
                <div className="m-4 px-2 py-3 bg-gray-700 text-white flex flex-col justify-center items-center rounded-lg md:justify-start md:flex-row text-sm md:text-base">
                    {/* hide button */}
                    <div className="flex absolute top-0 right-0 mr-2">
                        <button onClick={() => setShow(false)} className="px-2 bg-gray-300 text-gray-700 rounded-lg ml-auto">X</button>
                    </div>
                    {/* phone icon */}
                    <Svg className="text-green-400 m-2" path={androidIcon} />
                    {/* text  */}
                    <p className="py-1 text-center md:text-left">
                        Get the android app & check out the statistics in a more convenient way
                    </p>
                    {/* action button  */}
                    <a href='https://drive.google.com/uc?id=1Lu1z4ZIsd-CPbYYWQ3llwkZ6O1TUYpQV&export=download' rel="noopener noreferrer" target='_blank' className="uppercase m-2 px-4 py-2 bg-green-400 rounded-lg md:ml-auto">
                        Download
                </a>
                </div>
            </div>
        </CSSTransition>
    )
}