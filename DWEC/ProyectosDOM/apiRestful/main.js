import { createEditModal } from "./components/renderModal/renderModal";
import { renderPost } from "./components/renderPost/renderPost";
import { createPostApi } from "./utils/createPost";
import { deletePostApi } from "./utils/deletePostsApi";
import { getPostApi } from "./utils/getPostApi";
import { updatePostApi } from "./utils/updatePostApi";

import './public/modal.css';
const URL = `${import.meta.env.VITE_URL_API}/posts`;

// DOM elements
const postList = document.querySelector(".post-list");
const addPostForm = document.querySelector(".add-post-form");
const titlePost = document.getElementById("title-post");
const contentPost = document.getElementById("content-post");
const modal = document.getElementById("modal");



getPostApi(URL, (data) => {
  renderPost(postList, data);
});

addPostForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const boton = document.querySelector(".btn");

  if (!(titlePost.value && contentPost.value)) {
    alert("Los campos han de estar con data");
  }

  if (boton.classList.contains("btn-secondary")) {
    //actualizar POST
    const updateData = {
      id: boton.dataset.id,
      title: titlePost.value,
      post: contentPost.value,
    };

    updatePostApi(URL, updateData, (post) => {
      //Aqui actualizar el DOM con la nueva informacion.
      const cardDataId = postList.querySelector(`[data-id="${post.id}"]`);

      const cardTitle = cardDataId.querySelector(".card-title")
      cardTitle.textContent = post.title

      const cardSubtitle = cardDataId.querySelector(".card-subtitle")
      cardSubtitle.textContent = post.id

      const cardText = cardDataId.querySelector(".card-text")
      cardText.textContent = post.post
    
      boton.textContent = "Añadir Post";
      boton.classList.remove("btn-secondary");
      e.target.reset();

      console.log("Todo OK");
    });

    return;
  }

  // --- Estoy añadiendo----

  const postData = {
    title: titlePost.value,
    post: contentPost.value,
  };

  createPostApi(URL, postData, (data) => {
    
    const arrayPost = [];
    arrayPost.push(data);
    
    renderPost(postList, arrayPost);
  });

  e.target.reset();
});

postList.addEventListener("click", (e) => {
  e.preventDefault();

  let editBtnPress = e.target.id === "edit-post";
  let deleteBtnPress = e.target.id === "delete-post";
  const dataId = e.target.parentElement.dataset.id;
  const card = e.target.closest(".card");
  if (deleteBtnPress) {
    deletePostApi(URL, dataId, () => {
      //Borrar en el DOM
      card.remove();
    });
    return;
  }

  if (editBtnPress) {
    /*
    const boton = addPostForm.querySelector(".btn");
    boton.textContent = "Actualizar Post";
    boton.classList.add("btn-secondary");
    boton.dataset.id = dataId;

    const contentPostEdit = card.querySelector(".card-text").textContent;
    const titleEdit = card.querySelector(".card-title").textContent;

    titlePost.value = titleEdit;
    contentPost.value = contentPostEdit;
   
    */
     // Obtener información del post desde el DOM
     const postId = card.querySelector(".card-subtitle").textContent;
     const postTitle = card.querySelector(".card-title").textContent;
     const postContent = card.querySelector(".card-text").textContent;
 
     // Crear un objeto post con la información del post
     const post = {
       id: postId,
       title: postTitle,
       post: postContent,
     };
     
    // Mostrar el modal con la información del post
    createEditModal(post, (updatedPost) => {
      // Actualizamos el DOM con la nueva información
      const cardDataId = postList.querySelector(`[data-id="${updatedPost.id}"]`);

      const cardTitle = cardDataId.querySelector(".card-title");
      cardTitle.textContent = updatedPost.title;

      const cardSubtitle = cardDataId.querySelector(".card-subtitle");
      cardSubtitle.textContent = updatedPost.id;

      const cardText = cardDataId.querySelector(".card-text");
      cardText.textContent = updatedPost.post;
    });
   
  }
});



