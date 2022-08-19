import '../App.css';
import Setlist from '../components/Setlist';
import AdminShows from '../components/AdminShow';
import AdminPhotos from '../components/AdminGallery';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Container fluid='true' id='adminCrud'>
        <Row id='adminRow'>
            <Col> 
            <div className="d-grid gap-2">
            <Button id='adminButtons' onClick={photoPage} variant="light">
                    Photos
                </Button>
                </div>
            </Col>
            <Col>
            <div className="d-grid gap-2">
                <Button id='adminButtons' onClick={showPage} variant="light">
                    Shows
                </Button>
                </div>
            </Col>
            <Col>
            <div className="d-grid gap-2">
            <Button id='adminButtons' onClick={songPage} variant="light">
                    Set List
                </Button>
                </div>
            </Col>
        </Row>
        </Container>
        {photos ? <AdminPhotos /> : null}
        {shows ? <AdminShows /> : null}
        {songs ? <Setlist /> : null}
        </>
    );
}

export default AdminCrud;
