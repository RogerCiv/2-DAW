import { renderCardAirbnb } from "../components/renderCardAirbnb"

export async function getRoomsApi(url,container){
    try{
        const resp =  await fetch(`${url}/habitaciones`)
        if(!resp.ok) throw new Error("Error get rooms info")
        const data = await resp.json()


        data.map(room => {
            renderCardAirbnb(container,room)
        })


    }catch(error){
        console.log("Error:", err);
    }
}