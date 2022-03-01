export interface ButtonComponent {
  text:string,
  btnClass:string,
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}