export enum BUTTON_TYPES { 
    standart,
    withoutBorders
}
export interface IUserSlice {
    isLogin: boolean;
    login: string;
}
export interface IContactSlice {
    contacts: IContact[],
}
export interface IContact {
    id: number;
    name: string;
    phone: string;
}