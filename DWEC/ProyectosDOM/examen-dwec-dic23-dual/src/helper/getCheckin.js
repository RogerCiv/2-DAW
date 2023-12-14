export async function getCheckin(url,callback){
    try{
        const resp = await fetch(url)
        if(!resp.ok) throw new Error("Error al obtener checkin")
        const data = await resp.json()

        callback(data)

    }catch(err){
        console.log("Error:",err);
    }
}

