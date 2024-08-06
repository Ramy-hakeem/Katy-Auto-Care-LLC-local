export const setState = (name, value, rememberMe) => {
  if (rememberMe) {
    localStorage.setItem(name, JSON.stringify(value));
  } else {
    sessionStorage.setItem(name, JSON.stringify(value));
  }
};

export const getState = (name) => {
  const valueString =
    localStorage.getItem(name) || sessionStorage.getItem(name);
  if (valueString) {
    try {
      return JSON.parse(valueString);
    } catch (e) {
      return valueString;
    }
  }
  return null;
};

export const removeState = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};
