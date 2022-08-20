import '../App.css';
import {useState, useEffect} from 'react'
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL, list } from "firebase/storage"
import { v4 } from 'uuid'
import Ben from '../images/Fish.JPG';
import Matt from '../images/DrumsSolo.jpg';



const Gallery = (props) => {
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
            {/* <div className="showContainer">
                <h1>Some Images of Us!</h1>
            </div>
            <div className='bandImages'>
                {imageUrls.map((url) => {
                    return <img className='urlImg' src={url}
                />
            })}
            </div>   */}

        <h1 id='imagesHeader'>Some Images of Us!</h1>
        <hr id='hr' class="mb-5"/>
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

        </>
    )
}
export default Gallery