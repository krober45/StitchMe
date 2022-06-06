const BASE_URL= "http://localhost:3001"

module.exports = {
    getAllUsers: () =>{
        return fetch(`${BASE_URL}/api/users`).then(res =>res.json())
    }
}