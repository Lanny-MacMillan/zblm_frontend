import '../App.css';
import {useState, useEffect} from 'react'
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL, list } from "firebase/storage"
import { v4 } from 'uuid'
import Button from 'react-bootstrap/Button';



const AdminGallery = (props) => {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageUrls, setImageUrls] = useState([]);

    const imagesListRef = ref(storage, "images/")

    const uploadImage = () => {
        if (imageUpload == null) {
            alert('No Image Selected')
            return;
        }
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url])
            })
            alert('Image uploaded')
        })
    }


    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    return (
        <> 
        <h1 id='imagesAdminHeader'>Some Images of Us!</h1>
        <hr id='hr' class="mb-5"/>
            <div className='imageFile'>
            <label for="file-upload" class="custom-file-upload">
                Image Select
            </label>
            {/* <h5>{imageUpload}</h5> */}
                <input type='file' id="file-upload" onChange={(event) => {setImageUpload(event.target.files[0]);
                }}/>
                <br/>
                <Button className='imageText' id='Button' variant="warning" onClick={uploadImage}>Upload Image</Button>
            </div>
            <div class="row">

                <div class="col-lg-4 col-md-12 mb-4">

                    <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(58).jpg" class="img-fluid mb-4" alt=""/>

                    <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(66).jpg" class="img-fluid mb-4" alt=""
                    data-wow-delay="0.3s"/>

                </div>
                <div class="col-lg-4 col-md-6 mb-4">

                    <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(74).jpg" class="img-fluid mb-4" alt=""
                    data-wow-delay="0.1s"/>

                    <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(64).jpg" class="img-fluid mb-4" alt=""
                    data-wow-delay="0.4s"/>

                </div>
                <div class="col-lg-4 col-md-6 mb-4">

                    <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(77).jpg" class="img-fluid mb-4" alt=""
                    data-wow-delay="0.2s"/>

                    <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(67).jpg" class="img-fluid mb-4" alt=""
                    data-wow-delay="0.5s"/>

                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">



</div>
            <div className='bandImages'>
                {imageUrls.map((url) => {
                    return (
                    <>
                    <div class="row">
                        <div class="col-lg-12 col-md-6 mb-4">
                        <img src={url} class="img-fluid mb-4" alt=""
                        data-wow-delay="0.1s"/>

                        </div>
                    </div>

                    </>

                    )
            })}
            </div>
        </>
    )
}
export default AdminGallery