export function setItemStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItemStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function removeItemStorage(key) {
  localStorage.removeItem(key);
}

export function clearStorage() {
  localStorage.clear();
}
