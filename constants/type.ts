type TextField = {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'email' | 'date' | 'number' | 'password';
};

type SelectField = {
  name: string;
  label: string;
  type: 'select';
  options: { name: string; value: any }[];
};

export type StepField = TextField | SelectField;
