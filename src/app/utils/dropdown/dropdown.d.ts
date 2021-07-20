export interface IDropdown {
    el: HTMLElement | null ,
    closeDialog: function():any,
    align?:DialogAlignment
}

export type position = {
    left:number,
    top:number
}

export enum DialogAlignment{
    LEFT = "left",
    RIGHT = "right"
}