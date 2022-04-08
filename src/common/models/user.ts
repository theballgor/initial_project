export interface IUser {
  userId: string;
  email: string;
  username: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  phoneNumber?: string;
  birthdate?: Date;
  sex?: Sex;
  country?: string;
  city?: string;
  address1?: string;
  address2?: string;
  zipCode?: string;
}

export enum Sex {
  Man,
  Woman,
  None,
}
