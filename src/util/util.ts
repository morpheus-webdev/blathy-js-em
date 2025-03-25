export interface ICommand {
    like: number;
    commandName: string;
    description: string;
    url: string;
}

export const defaultCommand: ICommand = {
    like: 0,
    commandName: '',
    description: '',
    url: ''
}
/* 
export const defaultCommands: ICommand[] = [
    {
        "like": 10,
        "commandName": "cd",
        "description": "Change working directory",
        "url": "https://man7.org/linux/man-pages/man1/cd.1p.html"
    },
    {
        "like": 15,
        "commandName": "pwd",
        "description": "Display current working directory",
        "url": "https://man7.org/linux/man-pages/man1/pwd.1p.html"
    },
    {
        "like": 100,
        "commandName": "kill",
        "description": "Terminates selected process",
        "url": "https://man7.org/linux/man-pages/man1/kill.1p.html"
    },
    {
        "like": 25,
        "commandName": "tree",
        "description": "List contents of directories in a tree-like format",
        "url": "https://man7.org/linux/man-pages/man1/tree.1p.html"
    }
] */