
export function fetchApiJSON(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Failed to fetch");
          }
          return resp.json();
        })
        .then((data) => resolve(data))
        .catch((error) => {
          reject(error);
        });
    });
  }
  

 export const weatherImages = {
    Clouds: ["lluvia.webp", "sunny-background-2.jpg", "sunny-background-3.jpg"],
    Rain: [
      "rainy-background-1.jpg",
      "rainy-background-2.jpg",
      "rainy-background-3.jpg",
    ],
  };