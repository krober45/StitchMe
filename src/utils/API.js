const BASE_URL= "http://localhost:3001"

module.exports = {
    getAllUsers: () =>{
        return fetch(`${BASE_URL}/api/users`).then(res =>res.json())
    },
    
    getOneUser:userId =>{
        return fetch(`${BASE_URL}/api/users/${userId}`).then(res =>res.json())
    },

    login:userData =>{
        return fetch(`${BASE_URL}/api/users/login`, {
            method:"POST",
            body:JSON.stringify({
                username: userData.username,
                password: userData.password}),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    signup:userData=>{
        return fetch (`${BASE_URL}/api/users`, {
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    createProject:projectData=>{
        return fetch (`${BASE_URL}/api/projects`, {
            method:"POST",
            body:JSON.stringify(projectData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    }
}