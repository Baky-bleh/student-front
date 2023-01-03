const request = async (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if(sessionStorage.getItem(process.env.ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + sessionStorage.getItem(process.env.ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};
// user heseg
export async function createUser(user){
    return request({
        url: process.env.API_BASE_URL + "users/createuser",
        method: 'POST',
        body: JSON.stringify(user)
    })
}

export async function getCurrentUser() {
    if(!sessionStorage.getItem(process.env.ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: process.env.API_BASE_URL + "users/profile",
        method: 'GET'
    });
}

export async function getUsers(){
    return request({
        url: process.env.API_BASE_URL + "users/allUsers",
        method: 'GET',
    })
}

export async function removeUser(id){
    return request({
        url: process.env.API_BASE_URL + "users/remove",
        method: 'DELETE',
        body: JSON.stringify(id)
    })
}

export async function updateUser(user){
    return request({
        url: process.env.API_BASE_URL + "users/updateUser",
        method: 'PUT',
        body: JSON.stringify(user)
    })
}

// login
// export async function login(){
    
//     const tokenres = await fetch('http://localhost:3300/auth/login',{
//         method:'POST',
//         headers:{
//             'Content-Type': 'application/json',
//         },
//         body: json.stringify({email: email, password: password})
//     })
    
// }



// university
export function createUniversity(UniversityName){
    return request({
        url: process.env.API_BASE_URL + "University/createUniversity",
        method: 'POST',
        body: JSON.stringify(UniversityName)
    })
}

export async function getUniversity(){
    return request({
        url: process.env.API_BASE_URL + "University/getUniversity",
        method: 'GET',
    })
}

export async function updateUniversity(univerity){
    return request({
        url: process.env.API_BASE_URL + "University/updateUniversity",
        method: 'PUT',
        body: JSON.stringify(university)
    })
}

export async function removeUniversity(UniversityId){
    return request({
        url: process.env.API_BASE_URL + "projects/removeUniversity",
        method: 'DELETE',
        body: JSON.stringify(UniversityId)
    })
}

