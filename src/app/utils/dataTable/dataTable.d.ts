import { SyntheticEvent } from "react";

export interface IDataTable {
    data: Array<object>,
    options?: TOptions
}
export type TOptions = {
    fields?: Array<any>,
    showMoreBtnCb?:showMoreBtnCb,
    rowOnClick?: function(SyntheticEvent,any),
    exclude?: Array<any>,
}

export type showMoreBtnCb = function(SyntheticEvent,any)