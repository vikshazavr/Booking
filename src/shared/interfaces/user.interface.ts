export interface IUser {
  firstName: string;
  lastName: string;
}

export interface ILoginInfo {
  login: string;
  password: string;
}

export interface IUserInfo extends IUser, ILoginInfo {
  id: string;
  // avatar: string;
}
