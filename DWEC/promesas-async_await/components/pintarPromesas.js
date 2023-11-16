import { users } from "../assets/users";

/**
 *
 * @param {HTMLDivElement} element
 */
export const pintarPromesas = (element) => {
  const id = 1;
  findUser(id)
  .then(user => element.innerHTML = user.login.username)
  .catch(err => element.innerHTML = err);
};

const findUser = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      resolve(user);
    } else {
      reject(`User ${id} not found.`);
    }
  });
};
