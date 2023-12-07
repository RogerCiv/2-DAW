

export function findDigimon(inputSearch,container){
    //console.log(container.children);
    const cardsArray = Array.from(container.children)
   // console.log(cardsArray);

    cardsArray.map((card) => {
        const cardName = card.querySelector(".digi-name").textContent.toLowerCase()
       // console.log(cardName);

        if(cardName.includes(inputSearch.toLowerCase())){
            //console.log("existe");
            card.classList.remove("hidden")

        }else{
            //console.log("No existe");
            card.classList.add("hidden")
        }
    })
}