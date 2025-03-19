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
    name: string;
    duration: number;
}

export const defaultTask: ITask = {
    name: '',
    duration: 0
}