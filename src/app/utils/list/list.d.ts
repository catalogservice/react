import { HTMLAttributes, SyntheticEvent } from "react";

export interface IList extends HTMLAttributes {
    items: Array<TData>
}

export type TData = {
    ico?: HTMLImageElement & Element
    title: string,
    data?: any,
    onClick?: function(SyntheticEvent,any)
}