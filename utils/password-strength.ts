import colors from '@/theme/colors';

const hasNumber = (value: string) => /[0-9]/.test(value);

const hasMixed = (value: string) => /[a-z]/.test(value) && /[A-Z]/.test(value);

const hasSpecial = (value: string) => /[!#@$%^&*)(+=._-]/.test(value);

export const strengthIndicator = (value: string) => {
  let strengths = 0;
  if (value.length > 5) strengths += 1;
  if (value.length > 7) strengths += 1;
  if (hasNumber(value)) strengths += 1;
  if (hasSpecial(value)) strengths += 1;
  if (hasMixed(value)) strengths += 1;
  return strengths;
};

export const strengthColor = (count: number) => {
  if (count < 2) return { label: 'Poor', color: colors.strength.errorMain };
  if (count < 3) return { label: 'Weak', color: colors.strength.orangeMain };
  if (count < 4) return { label: 'Normal', color: colors.strength.warningDark };
  if (count < 5) return { label: 'Good', color: colors.strength.successMain };
  if (count < 6) return { label: 'Strong', color: colors.strength.successDark };
  return { label: 'Poor', color: colors.strength.errorMain };
};
