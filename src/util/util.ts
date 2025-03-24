export interface ICommand {
    like: number;
    name: string;
    description: string;
    url: string;
}

export const defaultCommand: ICommand = {
    like: 0,
    name: '',
    description: '',
    url: ''
}

export const defaultCommands: ICommand[] = [
    {
        like: 10,
        name: "cd",
        description: "Change working directory",
        url: "https://man7.org/linux/man-pages/man1/cd.1p.html"
    },
    {
        like: 15,
        name: "pwd",
        description: "Display current working directory",
        url: "https://man7.org/linux/man-pages/man1/pwd.1p.html"
    },
    {
        like: 100,
        name: "kill",
        description: "Terminates selected process",
        url: "https://man7.org/linux/man-pages/man1/kill.1p.html"
    },
    {
        like: 25,
        name: "tree",
        description: "List contents of directories in a tree-like format",
        url: "https://man7.org/linux/man-pages/man1/tree.1p.html"
    },
]