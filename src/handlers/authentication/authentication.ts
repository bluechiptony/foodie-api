export enum Role {
  ADMINISTRATOR,
  SUPPORT,
  FOODIE,
}

export interface AuthenticationProfile {
  id?: number;
  authCode?: string;
  emailAddress: string;
  password?: string;
  role: Role;
  createdDate?: Date;
  updatedDate?: Date;
  createdby?: string;
  updatedBy?: string;
}

export interface LoginProfile {
  emailAddress: string;
  password: string;
}
