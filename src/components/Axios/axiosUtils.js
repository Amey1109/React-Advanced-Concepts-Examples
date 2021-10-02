import secureAxios from "./SecureAxios"

export const GET = (url) =>{
    return secureAxios({
        method:"GET",
        url:url
    })
    // .then((response)=>{
    //     return response
    // }).catch((error)=>{
    //     return error
    // })
}