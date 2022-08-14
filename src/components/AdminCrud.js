import '../App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react'

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
    const Shows = () => {
        return (
            <>
            <h1>Shows Page</h1>
            </>
        )
    }
    const Songs = () => {
        return (
            <>
            <br/>
            <h1>Set List</h1>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th id='green'>#</th>
                <th id='green'>Artist</th>
                <th id='green'>Song</th>
                </tr>
            </thead>
            <br/>
            <tbody>
                <tr>
                <td>1</td>
                <td>Hozier</td>
                <td>Jackie and Wilson</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Taylor Swift/Bon Iver</td>
                <td>Exile</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Fleetwood Mac</td>
                <td>Landslide</td>
                </tr>
                <tr>
                <td>4</td>
                <td>Molowda and the Humble</td>
                <td>Curse the Weather</td>
                </tr>
                <br/>
                <tr>
                <td>5</td>
                <td>Audioslave</td>
                <td>Like a Stone</td>
                </tr>
                <tr>
                <td>6</td>
                <td>Wasteland</td>
                <td>10 Years</td>
                </tr>
                <tr>
                <td>7</td>
                <td>Tenacious D</td>
                <td>Roadie</td>
                </tr>
                <tr>
                <td>8</td>
                <td>Van Morrison</td>
                <td>Into the Mystic</td>
                </tr>
                <br/>
                <tr>
                <td>9</td>
                <td>Paramore</td>
                <td>Misery Business</td>
                </tr>
                <tr>
                <td>10</td>
                <td>Sublime</td>
                <td>Seed</td>
                </tr>
                <tr>
                <td>11</td>
                <td>Led Zepplin</td>
                <td>Living Loving Made</td>
                </tr>
                <tr>
                <td>12</td>
                <td>The Killers</td>
                <td>Somebody Told Me</td>
                </tr>
                <tr>
                <td>13</td>
                <td>The Hollys</td>
                <td>Long Cool Woman in a Black Dress</td>
                </tr>
                <br/>
                <tr>
                <td>14</td>
                <td>Tom Petty</td>
                <td>American Girl</td>
                </tr>
                <tr>
                <td>15</td>
                <td>Pink Floyd</td>
                <td>Comfortably Numb</td>
                </tr>
                <tr>
                <td>16</td>
                <td>Judah and the Lion</td>
                <td>Take it all Back</td>
                </tr>
                <tr>
                <td>17</td>
                <td>Red Jumpsuit Apparatus</td>
                <td>Face Down</td>
                </tr>
                <tr>
                <td>18</td>
                <td>The Outfield</td>
                <td>Your Love</td>
                </tr>
            </tbody>
    </Table>
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
        {photos ? <Photos/> : null}
        {shows ? <Shows/> : null}
        {songs ? <Songs/> : null}
        </>
    );
}

export default AdminCrud;
