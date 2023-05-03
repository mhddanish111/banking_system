export type FormData = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type SignFormData = {
  user: string;
  password: string;
};

export type SignInProps = {
  SignInHandler: (data: SignFormData, e: any) => void;
};

export type UserProfileProps = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string | number;
  occupation: string;
  income: string;
  aadhaarNumber: string | number;
  panNumber: string;
  govtId: string;
  govtIdNumber: string;
  address: string;
  city: string;
  state: string;
  postalCode: string | number;
  isActive: boolean;
  message: string;
};

export type UserProps = {
  firstName: string;
  lastName: string;
  userType: string;
  userId: string;
};
