// import {useState } from 'react'
// import '../App.css'
// import { Audio } from  'react-loader-spinner'
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


// const Loading = () => {
//     const [loading, setLoading] = useState(false)

//     // const onClick = async () => {
//     //     setLoading(true);
//     //     await fetch('/').then(() => {
//     //         //handle data
//     //     })
//     //     setLoading(false)
//     // }




//     return (
//         <>

//         <div className='mainContainer'>
//             <div className='Music'>
//             <Audio color="#00BFFF" height={80} width={80} />
//             <br/>
//             <ThreeDots color="#00BFFF" height={80} width={80} />
//             <br/>
//             <TailSpin color="#00BFFF" height={80} width={80} />
//             <br/>
//             <Rings color="#00BFFF" height={80} width={80} />
//             <br/>
//             <Puff color="#00BFFF" height={80} width={80} />
//             <br/>
//             <Oval color="#00BFFF" height={80} width={80} />
//             <br/>
//             <Hearts color="#00BFFF" height={80} width={80} />
//             <br/>
//             <Grid color="#00BFFF" height={80} width={80} />
//             <br/>
//             <Circles color="#00BFFF" height={80} width={80}/>
//             <br/>
//             <Bars color="#00BFFF" height={80} width={80} />
//             <br/>
//             <BallTriangle color="#00BFFF" height={80} width={80} />
//             </div>
//         </div>
//             {loading ? (
//                 <Audio
//                 height = "80"
//                 width = "80"
//                 radius = "9"
//                 color = 'green'
//                 ariaLabel = 'three-dots-loading'     
//                 wrapperStyle
//                 wrapperClass
//                 />
//             ):(
//                 null
//             )}

        
//         </>
//     )
// }
// export default Loading