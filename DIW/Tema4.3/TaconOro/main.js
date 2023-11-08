const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

const productContainer = document.querySelector(".product__list");
const categoryLinks = document.querySelectorAll(".shop__list a");

const categoryMap = {
  "All": "all",
  "Exclusivos": "jewelery",
  "Mujer": "women's clothing",
  "Hombres": "men's clothing"
};

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

let productsData = [];

// Realiza una solicitud a la API y guarda los datos en la variable productsData
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    productsData = data;
    // Llama a la función para mostrar todos los productos al cargar la página
    displayProducts(productsData);
  })
  .catch(error => console.error("Error al obtener los productos:", error));

// Función para mostrar productos según la categoría
function displayProducts(products) {
  // Limpia el contenedor de productos
  productContainer.innerHTML = "";

  // Itera a través de los productos y crea elementos HTML para cada producto
  products.forEach(product => {
    const productItem = document.createElement("div");
    productItem.className = "product__item";

    const imgProduct = document.createElement("div");
    imgProduct.className = "img__product";
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    imgProduct.appendChild(img);

    const productInfo = document.createElement("div");
    productInfo.className = "product__info";
    const h3 = document.createElement("h3");
    h3.textContent = product.title;
    const p = document.createElement("p");
    p.textContent = `Precio: ${product.price}€`;
    productInfo.appendChild(h3);
    productInfo.appendChild(p);

    const addProduct = document.createElement("div");
    addProduct.className = "add__product";
    const button = document.createElement("button");
    button.textContent = "Añadir Carrito";
    addProduct.appendChild(button);

    // Agrega los elementos al contenedor de productos
    productItem.appendChild(imgProduct);
    productItem.appendChild(productInfo);
    productItem.appendChild(addProduct);
    productContainer.appendChild(productItem);
  });
}

// Agrega eventos click a los enlaces de categoría
categoryLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const categoryText = link.textContent; // Convertir a mayúsculas
    const category = categoryMap[categoryText];

    if (category) {
      // Filtra los productos según la categoría seleccionada
      if (category === "all") {
        // Mostrar todos los productos sin filtrar
        displayProducts(productsData);
      } else {
        const filteredProducts = productsData.filter(product => product.category.toLowerCase() === category);
        displayProducts(filteredProducts);
      }
    }
  });
});
