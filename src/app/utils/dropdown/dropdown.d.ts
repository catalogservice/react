export interface IDropdown extends any {
    el: HTMLElement | null ,
    closeDialog: function():any,
    align?:DialogAlignment,
    offsetX?:number,
    offsetY?:number,
}

export type position = {
    left:number,
    top:number
}

export enum DialogAlignment{
    LEFT = "left",
    RIGHT = "right"
}