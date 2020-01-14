import {ChangeEvent, Dispatch} from "react";

export type HandleChange = (inputName: string) => Dispatch<ChangeEvent<HTMLInputElement>>;
