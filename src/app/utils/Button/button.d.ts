export enum ButtonType{
    primary = 'primary',
    secondary = 'secondary',
}
export interface IButton extends HTMLButtonElement{
    type:ButtonType,
    onClick:function(),
    data:any
}