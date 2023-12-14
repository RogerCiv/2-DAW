
export async function getCredentials(url,data){
    try{
        const resp = await fetch(url)
        if(!resp.ok) throw new Error("Error al obtener las credenciales")
        const data = await resp.json()
    //console.log(data);
    return data

    }catch(err){
        console.log("Error: ",err);
    }
}