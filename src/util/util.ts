export interface IUser {
    name: string;
    password: string;
    isAdmin: boolean;
}


export const defaultUser: IUser = {
    name: '',
    password: '',
    isAdmin: false
}

export interface ITask {
    id: string;
    name: string;
    duration: number;
}

export const defaultTask: ITask = {
    id: '',
    name: '',
    duration: 0
}