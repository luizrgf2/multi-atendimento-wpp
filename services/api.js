const {create} = require('apisauce')


var base_url = 'http://357ee1dad8fe.ngrok.io/'


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
async function mensagem(authorization,userid){
    const api =  create({
        baseURL:base_url,
        headers:{
            'Content-Type':'application/json',
            'authorization':authorization
        }
    })

    const response = await api.get('auth/mensagens/'+userid)
    return response.data
}

module.exports = {Register,Auth,clientes,mensagem}