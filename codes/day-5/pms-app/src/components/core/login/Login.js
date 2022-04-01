import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticate, saveToken } from '../../../services/authservice'

const Login = () => {
    const navigator = useNavigate()
    const [userState, setUserState] = useState({ userName: '', password: '' })
    const updateUserHandler = (propName, propValue) => {
        setUserState(
            (prevState) => {
                return {
                    ...prevState,
                    [propName]: propValue
                }
            }
        )
    }
    return (
        <form>
            <label htmlFor="userName">UserName:&nbsp;</label>
            <input type='text' name="userName" id="userName" value={userState.userName} onChange={
                (e) => {
                    updateUserHandler('userName', e.target.value)
                }
            } />
            <br />
            <label htmlFor="password"> Password:&nbsp;</label >
            <input type='password' name="password" id="password" value={userState.password}
                onChange={
                    (e) => {
                        updateUserHandler('password', e.target.value)
                    }
                }
            />
            <br />
            <button type='submit' onClick={
                (e) => {
                    e.preventDefault()
                    console.log(userState)
                    authenticate(userState)
                        .then(
                            (resp) => {
                                saveToken(resp.data.token)
                                navigator('/home')
                            },
                            (err) => {
                                console.log(err.message)
                            }
                        )
                }
            }>Login</button>
        </form >
    )
}

export default Login