import '../App.css';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { SiItunes } from "react-icons/si";


const SocialIcons = () => {


    return (
        <>
        {/* <div className='mainContainer'> */}
            <div className='social'>
                        <a href="https://www.facebook.com/" target="_blank">
                            <FaFacebookSquare size='2em' id='FaFacebookSquare'/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <FaInstagram size='2em' class='FaInstagram' id='FaInstagram' />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank">
                            <FaYoutube size='2em' id='FaYoutube'/>
                        </a>
                        <a href="https://open.spotify.com" target="_blank">
                            <FaSpotify size='2em' id='FaSpotify'/>
                        </a>
                        <a href="https://music.apple.com" target="_blank">
                            <SiItunes size='2em' id='SiItunes'/>
                        </a>
            </div>
        {/* </div> */}
        </>
    );
}

export default SocialIcons;