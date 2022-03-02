export interface InputComponent {
  type?: string,
  name: string,
  id?:string,
  inputClass?: string,
  value: string|number,
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
  autoFocus?: boolean,
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined,
}