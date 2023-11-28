/**
 *
 * @param {HTMLDivElement} element
 * @param {<post>Object>} posts
 */
let divPost = "";
export function renderPost(element, posts) {
 // const postsArray = Array.isArray(posts) ? posts : [posts];
  console.log(posts);
  posts.forEach((post) => {
    divPost += `<div class="card" style="width: 18rem">
    <div class="card-body" data-id=${post.id}>
      <h5 class="card-title">${post.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${post.id}</h6>
      <p class="card-text">
        ${post.post}
      </p>
      <a href="#" class="card-link" id="edit-post">Editar</a>
      <a href="#" class="card-link" id="delete-post">Borrar</a>
    </div>
  </div>`;
  });

  element.innerHTML = divPost;
}
