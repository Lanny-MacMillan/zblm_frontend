import {useState} from 'react'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';


const Add = (props) => {
    let emptyShow = {venue: '', date: '', time: '', description: '', image: '', location: '', coverPrice: '', other:''}
    const [show, setShow] = useState(emptyShow)
    
    const handleChange = (event) => {
        setShow({...show, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(show)
        setShow({venue: '', date: '', time: '', description: '', image: '', location: '', coverPrice: '', other:''})
    }
    return (
        <>
        {/* <!================= Modal Trigger ===================> */}

        <Button className='m-3' type="button" id='adminButtons' variant="light" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Show</Button>

        {/* <!===================== Modal =======================> */}

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add New Show</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form className="Auth-form">
            <div className="Auth-form-content">
            <h3 className="Auth-form-title" id='green'>Sign In</h3>
            <div className="form-group mt-3">
                <label>Venue</label>
                <input
                id='modalText'
                type="text"
                label="Venue"
                variant="outlined"
                name="venue" 
                value={show.venue}
                onChange={handleChange}
                className="form-control mt-1"
                />
            </div>
            <div className="form-group mt-3">
                <label>Date</label>
                <input
                id='modalText'
                type="text"
                label="Date"
                variant="outlined"
                name="date" 
                value={show.date}
                onChange={handleChange}
                className="form-control mt-1"
                />
            </div>
            <div className="form-group mt-3">
                <label>Time</label>
                <input
                id='modalText'
                type="text"
                label="Time"
                variant="outlined"
                name="time" 
                value={show.time}
                onChange={handleChange}
                className="form-control mt-1"
                />
            </div>
            <div className="form-group mt-3">
                <label>Description</label>
                <input
                id='modalText'
                multiline
                rows={5}
                maxRows={10}
                type="text"
                label="Description"
                variant="outlined"
                name="description" 
                value={show.description}
                onChange={handleChange}
                className="form-control mt-1"
                />
            </div>
            <div className="form-group mt-3">
                <label>Image</label>
                <input
                id='modalText'
                type="text"
                label="Image"
                variant="outlined"
                name="image" 
                value={show.image}
                onChange={handleChange}
                className="form-control mt-1"
                />
            </div>
            <div className="form-group mt-3">
                <label>Location</label>
                <input
                id='modalText'
                type="text"
                label="Location"
                variant="outlined"
                name="location" 
                value={show.location}
                onChange={handleChange}
                className="form-control mt-1"
                />
            </div>
            <div className="form-group mt-3">
                <label>Cover Price</label>
                <input
                type="number"
                label="Cover Price"
                variant="outlined"
                name="coverPrice" 
                value={show.coverPrice}
                onChange={handleChange}
                className="form-control mt-1"
                />
            </div>
            <div className="form-group mt-3">
                <label>Other Info</label>
                <input
                id='modalText'
                multiline
                rows={5}
                maxRows={10}
                type="text"
                label="Notes"
                variant="outlined"
                name="other" 
                value={show.other}
                onChange={handleChange}
                className="form-control mt-1"
                />
            </div>
            <div className="d-grid gap-2 mt-3">
                <Button 
                type="submit" 
                // id='adminButtons'
                variant='primary'
                onClick={handleSubmit}
                data-bs-dismiss="modal"
                >Submit</Button>
            </div>
            </div>
            </form>
            </div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>

        </>
    )
}

export default Add