import {useState } from 'react'
import '../App.css'
import CircleLoader from "react-spinners/ClipLoader";

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
                <CircleLoader />
            ):(
                'Submit'
            )}
        </button>
        
        </>
    )
}
export default Loading