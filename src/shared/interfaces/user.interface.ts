export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface ILoginInfo {
  login: string;
  password: string;
}

export interface IUserInfo extends IUser, ILoginInfo {
  // avatar: string;
}
