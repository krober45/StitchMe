const BASE_URL= "https://dry-castle-61993.herokuapp.com"

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
    },

    getOneProject:projectId =>{
        return fetch(`${BASE_URL}/api/projects/${projectId}`).then(res =>res.json())
    },

    createTodo:(todoData,projectId)=>{
        console.log(todoData)
        return fetch (`${BASE_URL}/api/projects/${projectId}/todos`, {
            method:"POST",
            body:JSON.stringify(todoData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    createStep:(stepData,projectId)=>{
        return fetch (`${BASE_URL}/api/projects/${projectId}/steps`, {
            method:"POST",
            body:JSON.stringify(stepData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    createImage:(imageData,projectId,username)=>{
        return fetch (`${BASE_URL}/api/projects/${projectId}/images`, {
            method:"POST",
            body:JSON.stringify({
                imageURL: imageData,
                username: username}),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
}