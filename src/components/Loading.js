import {useState } from 'react'
import '../App.css'
import { Audio } from  'react-loader-spinner'

const Loading = () => {
    const [loading, setLoading] = useState(false)

    const onClick = async () => {
        setLoading(true);
        await fetch('/').then(() => {
            //handle data
        })
        setLoading(false)
    }




    return (
        <>
        <button onClick={onClick}>
            {loading ? (
                <Audio
                height = "80"
                width = "80"
                radius = "9"
                color = 'green'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass
                />
            ):(
                null
            )}
        </button>
        
        </>
    )
}
export default Loading