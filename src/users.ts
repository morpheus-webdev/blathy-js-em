// Készítsünk egy users interface-t

//id, név, username, dob, gender, email, isPremium, balance

type GenderType = "Male" | "Female" | "Other"

interface IUser {
    id: number;//egyedi
    name: string;
    userName: string;//egyedi
    dob: Date;
    gender: GenderType;
    email: string;//egyedi
    isPremium: boolean;
    balance: number;
}

function isValidEmail(email: string){
    //TODO
}

//Készítsünk 3 db usert

const user1: IUser = {
    id: 1,
    name: 'Kiss Béla',
    userName: 'Warlock100',
    dob: new Date('2009-05-01'),
    gender: 'Male',
    email: 'warlock100@gmail.com',
    isPremium: true,
    balance: 0
}

const user2: IUser = {
    id: 2,
    name: 'Kiss Martin',
    userName: 'Grinlock',
    dob: new Date('1995-05-01'),
    gender: 'Male',
    email: 'borsodberzerker@gmail.com',
    isPremium: true,
    balance: 10000
}


const user3: IUser = {
    id: 3,
    name: 'Laci',
    userName: 'Terminator',
    dob: new Date('2004-05-01'),
    gender: 'Other',
    email: 'terminator@gmail.com',
    isPremium: true,
    balance: 250
}
let userArr: Array<IUser> = []
//Írjunk függvényt arra, hogy egyedi-e egy tömbben (a unique addattagok)

function isUnique(newUser: IUser, arrToSearch: IUser[]){
    let b: boolean = true;
    //Visszaadja, hogy létezik e unique adattag a tömbben
    arrToSearch.forEach((u) => {
        if(u.id === newUser.id || u.userName === newUser.userName || u.email === newUser.email){
            b = false;
            console.error('data member already exists');
        }
    })

    return b;
}
/* console.log(isUnique({
    id: 4,
    name: 'xxx',
    userName: 'yyy',
    gender: 'Male',
    email: 'terminator2000@gmail.com',
    isPremium: true,
    dob: new Date(),
    balance: 0
},userArr)) */

const user4: IUser = {
    id: 4,
    name: 'xxx',
    userName: 'yyy',
    gender: 'Male',
    email: 'terminator@gmail.com',
    isPremium: true,
    dob: new Date(),
    balance: 0
}

function addToArr(newUser: IUser, userArr: IUser[]){
    return isUnique(newUser, userArr) ? [...userArr, newUser] : [...userArr]
}

userArr = addToArr(user1, userArr)
userArr = addToArr(user2, userArr)
userArr = addToArr(user3, userArr)
userArr = addToArr(user4, userArr)
//console.log(userArr)

//Írjunk egy törlés függvényt
/* 
function deleteUser(dm: number | string, arr: IUser[]): IUser[]{
    //dm: data member, ha number akkor id alapján törlök, ha string akkor userName alapján
    //el kell döntenümk mi alapján törlünk
    //lehessen-e egyszerre több user-t törölni
    let deleteCount = 0;
    const maxDelete = 1; //ennyi embert lehet egyszerre törölni
    let copy = arr.filter((u) => {
        if(dm === u.id){
            deleteCount += 1
        }else if(dm === u.userName){
            deleteCount += 1
        }
        if(typeof dm === "number" && deleteCount < maxDelete){
            return u.id === dm
        }
        else{
            return u.userName !== dm;
        } 
    })

    return copy;
} */

function deleteUserById(dm: number, arr: IUser[]){
    return arr.filter((u) => {
        return u.id !== dm
    })
}

function deleteUserByUserName(dm: string, arr: IUser[]){
    const first = arr.find((u) => {
        return u.userName === dm;
    })
    if(!first){
        return arr;
    }
    else{
        return deleteUserById(first.id, arr);
    }
}

function deleteUser(dm: string | number, arr: IUser[]): IUser[]{
    if(typeof dm === "string"){
        return deleteUserByUserName(dm, arr);
    }
    else {
        return deleteUserById(dm, arr);
    }
}
userArr = deleteUser('Warlock100', userArr)
console.log(userArr)

//update

//Nézzük meg hogy nézne ki osztállyal

//2. feladat

//implementáljunk task-okat
//legyen egy IPeople interface
//legyen name, duration, startDate, endDate, IPeople[]
//írjunk egy addTask, removeTask függvényt
//starDate és endDate lehessen undefined, de ha megadunk egy startDate-et készítsen endDate-t is (kell ehhez egy fgv)
//legyen egy addPeople függvény

//OPCIONÁLIS PRO feladat:
//Osztállyal is implementálni