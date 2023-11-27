export function deletePostApi(url, postId, callback) {
  fetch(`${url}/${postId}`, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) throw new Error("error");
      callback();
    })
    .catch((err) => console.error(err));
}
