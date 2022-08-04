import { BUTTON_TYPES, IContact } from "./types";

export type ButtonProps = {
    text: string;
    type: BUTTON_TYPES;
    classnames?: string;
    clickEvent: () => void;
}
export type InputProps = {
    text: string;
    value: string;
    classnames?: string;
    changeEvent: (value: string) => void;
}
export type ContactProps = {
    contact: IContact;
    changeContactClickHandlerContact: (id: number, name: string, phone: string) => void;
    deleteContactClickHandler: (id: number) => void;
}