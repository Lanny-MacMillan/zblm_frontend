import '../App.css';
import Setlist from '../components/Setlist';
import Shows from '../components/AdminShow';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react'

const AdminCrud = () => {
    const [photos, setPhotos] = useState(false)
    const [shows, setShows] = useState(false)
    const [songs, setSongs] = useState(false)


    const photoPage = () => {
        setPhotos(true)
        setShows(false)
        setSongs(false)
    }
    const showPage = () => {
        setShows(true)
        setSongs(false)
        setPhotos(false)
    }
    const songPage = () => {
        setSongs(true)
        setPhotos(false)
        setShows(false)
    }
    const Photos = () => {
        return (
            <>
            <h1>Photo Page</h1>
            </>
        )
    }

    return (
        <>
        <div className="d-grid gap-2" id='adminCrud'>
            <Button id='adminButtons' onClick={photoPage} variant="light">
                Photo Page
            </Button>
            <Button id='adminButtons' onClick={showPage} variant="light">
                Shows Page
            </Button>
            <Button id='adminButtons' onClick={songPage} variant="light">
                Set List
            </Button>
        </div>
        {photos ? <Photos /> : null}
        {shows ? <Shows /> : null}
        {songs ? <Setlist /> : null}
        </>
    );
}

export default AdminCrud;
