//method PUT o PATCH
// PUT modifica todo el objeto de la API
// PATCH permite modificar parte de la informacion del objeto de la API.

export function updatePostApi(url,updateData,callback){
    fetch(`${url}/${updateData.id}`,{
        method:"PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(updateData)
    })
    .then(response => {
        if(!response.ok){
            throw new Error(response.status)
        }
        return response.json();
    })
    .then((data) => callback(data))
    .catch((err) => console.log("Error",err))

}