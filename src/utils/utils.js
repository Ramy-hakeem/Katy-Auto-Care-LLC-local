export const setState = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `expires=${date.toUTCString()}`;
  }
  const valueString = typeof value === 'object' ? JSON.stringify(value) : value;
  document.cookie = `${name}=${encodeURIComponent(valueString)};${expires};path=/`;
};

export const getState = (name) => {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return JSON.parse(decodeURIComponent(c.substring(nameEQ.length, c.length)));
  }
  return null;
};

export const removeState = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};


