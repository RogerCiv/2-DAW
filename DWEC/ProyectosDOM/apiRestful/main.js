import { renderPost } from "./components/renderPost/renderPost";
import { createPostApi } from "./utils/createPost";
import { getPostApi } from "./utils/getPostApi";

const URL = `${import.meta.env.VITE_URL_API}/posts`;

// DOM elements
const postList = document.querySelector(".post-list");
const addPostForm = document.querySelector(".add-post-form");
const titlePost = document.getElementById("title-post");
const contentPost = document.getElementById("content-post");

getPostApi(URL, (data) => {
  renderPost(postList, data);
});

addPostForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const postData = {
    title: titlePost.value,
    post: contentPost.value,
  };

  createPostApi(URL, postData, (data) => {
    const arrayPost = [];
    arrayPost.push(data);
    renderPost(postList, arrayPost);
  });
});
