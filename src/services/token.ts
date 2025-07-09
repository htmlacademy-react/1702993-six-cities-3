const AUTH_TOKEN_NAME_KEY = 'user-token';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_NAME_KEY);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_NAME_KEY, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_NAME_KEY);
};

