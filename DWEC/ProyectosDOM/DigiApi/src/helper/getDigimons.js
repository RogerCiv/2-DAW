import fetch from "node-fetch";
import fs from "fs/promises";

const apiURL = "https://digi-api.com/api/v1/digimon?pageSize=1422";

const filePath = "./server/db.json";

async function getDigimons(){
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        
        const { content } = data;
       
        const digiData = 
            content.map(async (digi) => {
            const digiInfo = await (await fetch(digi.href)).json();
            return {
                id: digiInfo.id,
                name: digi.name,
                url: digi.href,
                image: digi.image,
            }
        })
     

        await fs.writeFile(filePath,JSON.stringify({ digiData },null,2));

    }catch(err){
        console.log("Error en el acceso a la api",err.message);
    }
}

getDigimons();