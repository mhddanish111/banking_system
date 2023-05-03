export enum IncomeEnum {
  belowOne = 'below 1 Lac',
  oneToFive = '1 Lac to 5 Lac',
  fiveToTen = '5 Lac to 10 Lac',
  moreThanTen = 'more than 10 Lac',
}

export enum GovtIdEnum {
  aadharCard = 'Aadhar Card',
  panCard = 'Pan Card',
  passport = 'Passport',
  electionIdCard = 'Election Commission ID Card',
}

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
  address: string;
  city: string;
  state: string;
  postalCode: number;
  occupation: string;
  income: IncomeEnum;
  password: string;
  confirmPassword: string;
  govtId: GovtIdEnum;
  govtIdNumber: string;
  aadhaarNumber: string;
  panNumber: string;
};

export type CaptchaProps = {
  valid: boolean;
  showErrorMsg: boolean;
};

export type SignUpFormProps = {
  SignUpHandler: (e: any, data: FormData) => void;
};
