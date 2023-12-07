
export function renderCardDigimon(container, digiData,index){


    container.innerHTML += `
    <div class="col-12 col-md-6  col-xxl-4 ">
    <div class="card mb-3">
      <h3 class="card-header text-center text-warning digi-name">${digiData.name}</h3>
      <div class="card-body text-center align-items-center justify-content-center">
        <h5 class="card-title text-info">Level</h5>
        <h6 class="card-subtitle  text-primary">${digiData.level}</h6>
      </div>
     <img src="${digiData.img}" class="m-3 img-fluid rounded">
      <div class="card-body">
        <p class="card-text"></p>
      </div>
      <div class="card-footer text-muted text-center">
         <span class="text-danger"> ID: ${index+1}</span>
      </div>
    </div>
  </div> 
    `
}