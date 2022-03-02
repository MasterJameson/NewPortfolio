
interface optionObject {
  optionContent: string,
  optionValue: string,
}

export interface SelectOptionComponent {
  optionItems: optionObject[];
  selectClass: string,
  selectValue: string,
  onFocus?: React.FocusEventHandler<HTMLSelectElement> | undefined,
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined,
}