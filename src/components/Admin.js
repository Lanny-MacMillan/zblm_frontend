import '../App.css';
import axios from 'axios'
import { useState } from 'react'
import AdminCrud from '../components/AdminCrud'
import Button from 'react-bootstrap/Button';

const Admin = (props) => {
    const [users, setUsers] = useState([])
    const [userLogIn, setUserLogIn] = useState(false)
    const [currentUser, setCurrentUser] = useState([])
    const [loading, setLoading] = useState(false)

    const BASE_URL = 'https://glacial-tor-04352.herokuapp.com/api/'

    let emptyUser = {email: '', password: ''}
    const [user, setUser] = useState(emptyUser)
    const [userSignIn, setUserSignIn] = useState({...props.userSignIn})

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
        setUserSignIn({...userSignIn, [event.target.name]: event.target.value})

    }
    // const handleChangeLogIn = (event) => {
    //     setUserSignIn({...userSignIn, [event.target.name]: event.target.value})
    // }
    const handleSubmitExit = (event) => {
        event.preventDefault()
        console.log(user)
        createUser(user)
        setUser({email: '', password: ''})
    }
    const handleSubmitLogin = (event) => {
        event.preventDefault()
        console.log(userSignIn)
        handleUserLogin(userSignIn)
    }
    //======== CREATE USER ==============
    const createUser = (addUser) => {
        console.log(addUser)
        axios
            .post(BASE_URL + 'useraccount', addUser)
            .then((response) => {
                setUsers([...users, addUser])
                // setView('login')
            })
    }
    // //======== RETURNING USER LOGIN ========
    const handleUserLogin = (userAccount) => {
        setLoading(true)
        console.log('attempting to return user login')
        console.log(userAccount)
        axios
            .put(BASE_URL + 'useraccount/login', userAccount)
            // .put('http://localhost:8000/api/useraccount/login', userAccount)
            .catch((error) => {
                if (error) {
                    console.log(".catch error")
                    console.log(error)
                    setUserLogIn(false)
                }
            })
            .then((response) => {
                if (response == undefined){
                    setLoading(false)
                    alert("No user match, please create an account or try again.")
                    console.log("undefined - no match")
                    console.log(response)
                    setUserLogIn(false)

                } else  {
                    setLoading(false)
                    console.log("match")
                    setUserLogIn(true)

                } 
            })
    }
    const forgotPassword = () => {
        alert('Jesus Christ...Text your bandmates if you forgot, or contact the Site Admin')
    }
    const ThreeDots = () => {
        return (
            <>
            <div style={{display: 'flex', justifyContent: 'center', background: 'transparent'}}>
                        <div class="dot-pulse"></div>
            </div>
            </>
        )
    }
// ================================================

    return (
        <>
        {userLogIn ? <AdminCrud /> :
        <div className="Auth-form-container">
        <form className="Auth-form">
            <div className="Auth-form-content">
            <h3 className="Auth-form-title" id='green'>Sign In</h3>
            <div className="form-group mt-3">
                <label>Email address</label>
                <input
                type="text"
                label="Email"
                variant="outlined"
                name="email" 
                value={user.email}
                onChange={handleChange}
                className="form-control mt-1"
                placeholder="Enter email"
                />
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input
                type="password"
                label="Password"
                variant="outlined"
                name="password" 
                value={user.password}
                onChange={handleChange}
                className="form-control mt-1"
                placeholder="Enter password"
                />
            </div>
            <div className="d-grid gap-2 mt-3">
                <Button 
                type="submit" 
                id='adminButtons'
                variant='light'
                onClick={handleSubmitLogin}
                >{loading ? (
                    <ThreeDots />
                ):(
                    'Submit'
                )}
                </Button>
            </div>

            <p className="forgot-password text-right mt-2">
                Forgot <a href='' onClick={forgotPassword}>password?</a>
            </p>
            </div>
        </form>
        </div>
        }  


        </>
    );
}

export default Admin;

