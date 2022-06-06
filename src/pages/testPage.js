import React,{useState, useEffect} from 'react'
import Test from '../components/Test'
import API from '../utils/API'

export default function TestPage() {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        API.getAllUsers().then(userData => {
          setUsers(userData)
        })
      }, [])
    
  return (
    users.map(user=>{
    return (<Test key={user._id} username={user.username}/>)
    })
)}
