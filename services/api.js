const {create} = require('apisauce')


var base_url = 'http://e41e3381037a.ngrok.io'


async function Register(email,senha){

    

    const api = create({
        baseURL:base_url,
        headers:{
            'Content-Type':'application/json'
        },

        
    })
    
    const response = await api.post('/auth/register',{email:email,password:senha})
    
    return response.data.message
    
    
}
async function Auth(email,senha){
    
    const api = create({
        baseURL:base_url,
        headers:{
            'Content-Type':'application/json'
        },

    })
    

    const response = await api.post('/auth/auth',{email:email,password:senha})

    return [response.data.message,response.status]


}
module.exports = {Register,Auth}