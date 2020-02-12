export enum Role {
  ADMINISTRATOR,
  SUPPORT,
  FOODIE
}

export class AuthenticationProfile {
  id!: number;
  authCode!: string;
  emailAddress!: string;
  password!: string;
  role!: Role;
  createdDate!: number;
  updatedDate!: number;
  createdby!: number;
  updatedBy!: number;

  constructor() {}

  getEmailAddress = () => {
    return this.emailAddress;
  };
}
