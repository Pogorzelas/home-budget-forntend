import {ChangeEvent, Dispatch} from "react";

export type HandleChange = (inputName: string) => OnChange;
export type OnChange = Dispatch<ChangeEvent<any>>;
