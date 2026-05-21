export type ButtonType =
  | 'number'
  | 'operator'
  | 'function';

export interface CalcButtonProps {
  label: string;
  onPress: () => void;
  type: ButtonType;
  darkMode: boolean;
}