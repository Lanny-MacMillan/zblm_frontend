import {useState, useEffect} from'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs'
import { TailSpin } from  'react-loader-spinner'

const Shows = () => {
    const [shows, setShows] = useState([])
    const [showShows, setShowShows] = useState(true)
    const [showshow, setShowshow] = useState(false)
    const [loading, setLoading] = useState(false)


    const googleURL = `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_API_KEY}&q=`
    const APIBaseURL = 'https://zblm-backend.herokuapp.com/api/shows'

    const getShows = () => {
        // setLoading(true)
        axios
            .get(APIBaseURL)
            .then(response => setShows(response.data),
                (err)=> console.error(err)
                )
            .catch(
                (error)=> console.error(error)
                )
    }
    const DisplayAll = () => {
        return (
        <>
        {loading ?
        <div className='mainContainer'>
            {shows.map((show) => {
            return(
                <>
                <Card className='text-center' id='card' style={{ width: '18rem' }}>
                <Card.Header>{show.date}</Card.Header>
                <Card.Img variant="top" src={show.image} />
                <Card.Body>
                    <Card.Title id='cardTitle' >{show.venue}</Card.Title>
                    <Card.Text>
                        {show.description}
                    </Card.Text>
                    <Button id='Button' variant="primary" onClick={() => {showPage(show)}} className="btn btn-link" role="button">Click for more info</Button>
                </Card.Body>
                </Card>
                </>
                )}
            )}
        </div> 
        // END OF TURNARY 
        : <div className='loadingContainer'>
            <TailSpin color="#00BFFF" height={80} width={80} />
            </div> 
            }
        </>
        )
    }
    const DisplayOne = () => {
        return (
            <>
        <div className='mainContainer'>
            {shows.map((show) => {
            return(
                <>
                <Card className='text-center' id='cardSingle' 
                style={
                    { width: '100vh', height: '2000px' }
                }
                >
                <Card.Header className='p-0' id='cardHeader'>

                    {show.date}

                    
                </Card.Header>
                <Card.Img variant="top" src={show.image} />
                <Card.Body>
                    <Card.Title id='cardTitle' >{show.venue}</Card.Title>
                    <Card.Text>
                        {show.description}
                    </Card.Text>
                    <Card.Text>
                        ${show.coverPrice}
                        <h6 id='textColor'>{show.date}</h6>
                        <h6 id='textColor'>{show.time}</h6>
                        {show.other}
                    </Card.Text>
                    {/* <Edit handleUpdate={handleUpdate} show={show}/> */}
                        {/* <Button id='Button' type="button" variant="outlined"  data-bs-toggle="modal" data-bs-target="#deleteModal">
                        Delete show
                        </Button> */}

                    <Button 
                        id='Button' 
                        type="button" 
                        variant="light" 
                        onClick={homePage}>Back
                    </Button>
                    <br/>
                    
                    <p id='red'>
                        <p id='red1'>See Google Maps info below for show location</p>
                    <BsArrowDownCircle id='arrowIcon'/>
                    <BsArrowDownCircle id='arrowIcon'/>
                    </p>
                    <h5 id='title'>{show.location}</h5>
                </Card.Body>

                {/*============= GOOGLE MAPS API =============*/}
                <iframe
                        className="map"
                        width='100%'
                        height='100%'
                        loading='lazy'
                        src={`${googleURL} + ${show.location}`}>
                    </iframe>
                {/*============= GOOGLE MAPS API =============*/}
                </Card>
                </> 
            )
            })}
        </div>
        </>
        )
    }

    const homePage = () => {
        getShows()
        setShowShows(true)
        setShowshow(false)
    }
    const showPage = (selectedshow) => {
        setShowShows(false)
        setShowshow(true)
        setShows(shows.filter(show => show.id == selectedshow.id))
    }
    

    const handleUpdate =(editshow) => {
        console.log('before .put App.js')
        axios   
        // id updates ID in DB, editshow brings the info from that function
            .put(APIBaseURL + '/' + editshow.id, editshow)
            .then((response) => {
                setShows(shows.map((show) => {
                    console.log(show.id)
                    return show.id !== editshow.id ? show : response.data
            }))
            // getShows()
        })
    }

    const handleDelete = (deletedshow) => {
        axios
            .delete(APIBaseURL + '/' + deletedshow.id)
            .then((response) => {
                // Instead of pulling data and reloading this filters the data on page and removes the {deletedshow.id}
                // setShows(shows.filter(show => show.id !== deletedshow.id))
                homePage()
            })
    }
    useEffect(() => {
    setLoading(true)
    getShows()
    }, [])

    return (
        <> 
        {/* <div className='mainContainer'>
            <div className='home'> */}
                {/* {loading ?  <DisplayAll/> : <TailSpin color="#00BFFF" height={80} width={80} /> } */}
                    {showShows ? <DisplayAll/> : null}
                    {showshow ? <DisplayOne/> : null}     
            {/* </div>
        </div> */}
        </>
    )
}

export default Shows


