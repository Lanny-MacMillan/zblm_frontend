import {useState} from 'react'
import Button from '@mui/material/Button';
import '../App.css';
import TextField from '@mui/material/TextField';

const Add = (props) => {
    let emptyShow = {name: '', date: '', time: '', description: '', image: '', location: '', coverPrice: '', other:''}
    const [show, setShow] = useState(emptyShow)
    
    const handleChange = (event) => {
        setShow({...show, [event.target.name]: event.target.value})
    }
    const handleSubmitAddMore = (event) => {
        event.preventDefault()
        props.handleCreate(show)
        setShow({name: '', date: '', time: '', description: '', image: '', location: '', coverPrice: '', other:''})

    }
    return (
        <>
        {/* <!================= Modal Trigger ===================> */}

        <Button id='AddButton' type="button" variant="contained" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Show</Button>

        {/* <!===================== Modal =======================> */}

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Big Mood - Add New Show</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
                <TextField
                    style={{ width: "400px", margin: "5px", align: 'center'}}
                    className='addTitle'
                    type="text"
                    label="Venue"
                    variant="outlined"
                    name="venue" 
                    value={show.venue}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    style={{ width: "400px", margin: "5px" }}
                    id='modalText'
                    type="text"
                    label="Date"
                    variant="outlined"
                    name="date" 
                    value={show.date}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    style={{ width: "400px", margin: "5px" }}
                    id='modalText'
                    type="text"
                    label="Time"
                    variant="outlined"
                    name="time" 
                    value={show.time}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    style={{ width: "400px", margin: "5px" }}
                    id='modalText'
                    // id="full-width-text-field"
                    // multiline
                    // rows={5}
                    // maxRows={10}
                    type="text"
                    label="Description"
                    variant="outlined"
                    name="description" 
                    value={show.description}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    style={{ width: "400px", margin: "5px" }}
                    id='modalText'
                    type="text"
                    label="Image"
                    variant="outlined"
                    name="image" 
                    value={show.image}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    style={{ width: "400px", margin: "5px" }}
                    id='modalText'
                    type="text"
                    label="Location"
                    variant="outlined"
                    name="location" 
                    value={show.location}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    style={{ width: "400px", margin: "5px" }}
                    id='modalText'
                    type="number"
                    label="Cover Price"
                    variant="outlined"
                    name="coverPrice" 
                    value={show.coverPrice}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    style={{ width: "400px", margin: "5px" }}
                    id='modalText'
                    // multiline
                    // rows={5}
                    // maxRows={10}
                    type="text"
                    label="Notes"
                    variant="outlined"
                    name="other" 
                    value={show.other}
                    onChange={handleChange}
                />
                <br />
                <Button id='Button' onClick={handleSubmitAddMore} type="submit" variant="contained">Save Show</Button>

            </form>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}

export default Add