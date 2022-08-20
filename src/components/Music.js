import '../App.css';
import {useState} from 'react'
import { Audio } from  'react-loader-spinner'
// import { ThreeDots } from  'react-loader-spinner'
// import { TailSpin } from  'react-loader-spinner'
// import { Rings } from  'react-loader-spinner'
// import { Puff } from  'react-loader-spinner'
// import { Oval } from  'react-loader-spinner'
// import { Hearts } from  'react-loader-spinner'
// import { Grid } from  'react-loader-spinner'
// import { Circles } from  'react-loader-spinner'
// import { Bars } from  'react-loader-spinner'
// import { BallTriangle } from  'react-loader-spinner'


const Music = () => {
    const [loading, setLoading] = useState(false)

    return (
        <>
        <div className='mainContainer'>
            <div className='Music'>
                <h1>Music Page</h1>
                <h3>Music coming soon</h3>
                <br/>
                <div id='audioAnimation'>
            <div className='home'>
                <Audio 
                        height = "80"
                        width = "80"
                        radius = "9"
                        color = 'green'
                        ariaLabel = 'three-dots-loading'     
                        wrapperStyle
                        wrapperClass
                        />
            </div>
                </div>
            </div>
        </div>
        {/* <div className='mainContainer'>
            <div className='Music'>
            <ThreeDots color="#00BFFF" height={80} width={80} />
            <br/>
            <TailSpin color="#00BFFF" height={80} width={80} />
            <br/>
            <Rings color="#00BFFF" height={80} width={80} />
            <br/>
            <Puff color="#00BFFF" height={80} width={80} />
            <br/>
            <Oval color="#00BFFF" height={80} width={80} />
            <br/>
            <Hearts color="#00BFFF" height={80} width={80} />
            <br/>
            <Grid color="#00BFFF" height={80} width={80} />
            <br/>
            <Circles color="#00BFFF" height={80} width={80}/>
            <br/>
            <Bars color="#00BFFF" height={80} width={80} />
            <br/>
            <BallTriangle color="#00BFFF" height={80} width={80} />
            </div>
        </div> */}
        </>
    );
}

export default Music;