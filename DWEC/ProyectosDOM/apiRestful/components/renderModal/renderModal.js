// Crea un nuevo archivo llamado EditModal.js
// EditModal.js

export function createEditModal(post, updatePostCallback) {
  const modal = document.getElementById("modal");

  // Limpiamos el contenido del modal antes de agregar nueva información
  modal.innerHTML = "";

  // Creamos un formulario
  const editForm = document.createElement("form");
  editForm.classList.add("edit-post-form");

  // Agregamos un campo de título
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Título del post:";
  titleLabel.classList.add("title-label");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.classList.add("title-input");
  titleInput.value = post.title;
  titleLabel.appendChild(titleInput);

  // Agregamos un campo de contenido
  const contentLabel = document.createElement("label");
  contentLabel.textContent = "Contenido del post:";
  contentLabel.classList.add("content-label");

  const contentTextarea = document.createElement("textarea");
  contentTextarea.rows = "5";
  contentTextarea.classList.add("context-textarea")
  contentTextarea.value = post.post;
  contentLabel.appendChild(contentTextarea);

  // Agregamos un botón de actualización
  const updateButton = document.createElement("button");
  updateButton.type = "submit";
  updateButton.classList.add('update-button')
  updateButton.textContent = "Actualizar";

  // Agregamos elementos al formulario
  editForm.appendChild(titleLabel);
  editForm.appendChild(contentLabel);
  editForm.appendChild(updateButton);

  // Agregamos el formulario al modal
  modal.appendChild(editForm);

  // Mostramos el modal
  modal.showModal();

  // Evento de envío del formulario
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const updatedPost = {
      id: post.id,
      title: titleInput.value,
      post: contentTextarea.value,
    };

    // Llamamos a la función de actualización del post
    updatePostCallback(updatedPost);

    // Cerramos el modal después de actualizar
    modal.close();
  });
}
