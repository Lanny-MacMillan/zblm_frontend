import {useState, useEffect} from'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as React from 'react';
import Edit from '../components/Edit'
import Add from '../components/Add'
import { BsArrowDownCircle } from 'react-icons/bs'


const Shows = (props) => {
    const [shows, setShows] = useState([])
    const [showShows, setShowShows] = useState(true)
    const [showshow, setShowshow] = useState(false)
    const { loading = false } = props;

    const googleURL = `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_API_KEY}&q=`
    const APIBaseURL = 'https://leeman-backend.herokuapp.com/api/shows'

    const getShows = () => {
        axios
            .get(APIBaseURL)
            .then(response => setShows(response.data),
            (err)=> console.error(err)
            )
            .catch((error)=> console.error(error))
    }
    const DisplayAll = () => {
        return (
        <>
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
                <Card className='text-center' id='card' 
                style={{ width: '100vh' }}
                >
                <Card.Header>
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
                    <Edit handleUpdate={handleUpdate} show={show}/>
                    <Button id='Button' type="button" variant="danger"  data-bs-toggle="modal" data-bs-target="#deleteModal">
                        Delete show
                    </Button>

                    <Button 
                        id='Button' 
                        type="button" 
                        variant="light" 
                        onClick={homePage}>Back
                    </Button>
                    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Confirm Delete</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete this Show Permanantly?
                        </div>
                            <button type="button" className="btn btn-link" data-bs-dismiss="modal">Close</button>
                            <Button variant="danger" data-bs-dismiss="modal" onClick={() => {handleDelete(show)}}>
                            Delete</Button>
                        </div>
                    </div>
                    </div>
                    <br/>
                    
                    <p id='red'>
                    <BsArrowDownCircle id='arrowIcon'/>
                        See Google Maps info below for show location
                    <BsArrowDownCircle id='arrowIcon'/>
                    </p>
                </Card.Body>
                <h5 id='title'>{show.location}</h5>
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
    
    const handleCreate = (addShow) => {
        axios
            .post(APIBaseURL, addShow)
            .then((response) => {
            setShows([...shows, response.data])
            .catch((error) => {
                console.log("Problem submitting New Post", error);
            });
            // getShows()
            }
            )
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
    getShows()
    }, [])

    return (
        <>
        <div className="d-grid gap-2">
        <Add shows={shows} handleCreate={handleCreate}/> 
        </div>

            {showShows ? <DisplayAll/> : null}
            {showshow ? <DisplayOne/> : null}     
        </>
    )
}

export default Shows


