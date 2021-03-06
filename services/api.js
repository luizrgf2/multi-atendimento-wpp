const {create} = require('apisauce')


var base_url = 'http://db0fd1e5ceec.ngrok.io'


async function Register(email,senha){

    


    const api = create({
        baseURL:base_url,
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

    return [response.data,response.status]


}
async function clientes(authorization){


    const api =  create({
        baseURL:base_url,
        headers:{
            'Content-Type':'application/json',
            'authorization':authorization
        }
    })

    const response = await api.get('auth/clientes')
    return response.data

}
module.exports = {Register,Auth,clientes}