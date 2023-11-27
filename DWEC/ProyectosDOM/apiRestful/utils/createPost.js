export function createPostApi(url, data, callback) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) throw new Error("error");
      return response.json();
    })
    .then((data) => callback(data))
    .catch((err) => console.error(err));
}
