export interface ButtonComponent {
  type?:"button" | "submit" | "reset" | undefined,
  text:string,
  btnClass:string,
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}