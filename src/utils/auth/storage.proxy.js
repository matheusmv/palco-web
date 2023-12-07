export async function setItemStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export async function getItemStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export async function removeItemStorage(key) {
  localStorage.removeItem(key);
}

export async function clearStorage() {
  localStorage.clear();
}
