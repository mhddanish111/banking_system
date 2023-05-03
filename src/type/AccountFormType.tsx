export type CategoryProps = {
  _id: String;
  name: String;
  isActive: Boolean;
  benefit: Array<String>;
  charge: Number;
  limit: Number;
  maxAmount: Number;
  minAmount: Number;
};

export type AccountTypeProps = {
  _id: String;
  name: String;
  isActive: Boolean;
  type: String;
  category: Array<CategoryProps>;
};

export type AccountFormProps = {
  type: String;
};

export type SubmitProps = {
  accountTypeId: String;
  accountType: String;
  categoryId: String;
  categoryName: String;
  charge: Number;
  limit: Number;
  maxAmount: Number;
  minAmount: Number;
  type: String;
};
