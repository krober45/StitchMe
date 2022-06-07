import React,{useState, useEffect} from 'react'
import Test from '../components/Test'
import API from '../utils/API'
import { useParams } from 'react-router-dom'

export default function TestPage(props) {
    const {id} = useParams()
    const [userData, setUserData] = useState(null)

    useEffect(()=> {
        API.getOneUser(id).then((data) => {
            if (data.username) {
              setUserData(data)  
            }
        })
    }, [])
    
  return (
    <div className="Profile">
      {!userData ? (
        <h3>loading...</h3>
      ) : (
        <>
          <h1>{userData.username}'s profile!</h1>
          {userData.Projects.map((project) => (
            <h3>{project.title}</h3>
          ))}
        </>
      )}
    </div>
)}
