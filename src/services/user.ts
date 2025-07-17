const USER = 'user-email';

export type User = string;

export const getUserName = (): User => {
  const user = localStorage.getItem(USER);
  return user ?? '';
};

export const saveUserName = (user: User): void => {
  localStorage.setItem(USER, user);
};

export const removeUserName = (): void => {
  localStorage.removeItem(USER);
};
