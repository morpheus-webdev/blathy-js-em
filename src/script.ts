/* type statusCodeTypes = 200 | 201 | 301

interface IAddress {
    city: string;
    street: string;
    house: number
}

interface IUser {
    firstName: string;
    lastName: string;
    age: number;
    address: IAddress;
    status: statusCodeTypes
}

const user1: IUser = {
    firstName: "Angela",
    lastName: "Davis",
    age: 25,
    address: {
        city: "Budapest",
        street: "Rákóczi út",
        house: 82
    },
    status: 200
}
const user2: IUser = {
    firstName: "Bobby",
    lastName: "Mitchell",
    age: 54,
    address: {
        city: "Bp",
        street: "Rákóczi út",
        house: 80
    },
    status: 301
}
console.log(user1)
console.log(user2);
 */
/* 
function add(a: number, b: number){
    if(Number.isNaN(a) && Number.isNaN(b)){
        return null
    }
    else if(Number.isNaN(a)){
        return b;
    }
    else if(Number.isNaN(b)){
        return a;
    }
    return a+b;
}
console.log(add(2,NaN));
console.log(add(NaN,3));
console.log(add(NaN,NaN));
console.log(add(2,3));
 */
/* 
function retNewArray<T>(newVal: T, originalArr: T[]){
    originalArr.push(newVal)
    return originalArr;
}

//let numArr: Array<number> = [1] //array of numbers
let numArr: number[] = [1] //number array
numArr = retNewArray(2, numArr)
console.log(numArr)

let strArr: string[] = ["egy"]
strArr = retNewArray("kettő", strArr);
console.log(strArr) */
/* 
class Animals {
    private numOfLegs: number;
    private name: string;
    private sound: string;

    constructor(numOfLegs: number, name: string, sound: string){
        this.numOfLegs = numOfLegs;
        this.name = name;
        this.sound = sound;
    }

    getNumOfLeg(){
        return this.numOfLegs;
    }
    setNumOfLegs(nol: number){
        this.numOfLegs = nol
    }
    getName(){
        return this.name;
    }
    setName(name: string){
        this.name = name;
    }
    getSound(){
        return this.sound;
    }
    setSound(sound: string){
        this.sound = sound
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`)
    }
}

const animal1 = new Animals(4, "Tiger", "RAWWWR");
const animal2 = new Animals(4, "Kitty", "meoww :3");
animal2.setSound(animal1.getSound())
animal1.makeSound();
animal2.makeSound(); */

interface IShopItem {
    id: number; //unique id for all items in the game
    name: string;
    price: number;
}

interface ISword extends IShopItem {  //ISword = IShopItem + dmg
    dmg: number;
}
const sword1: ISword = {
    id: 1,
    name: "kisbicska",
    dmg: 10,
    price: 100
}
const sword2: ISword = {
    id: 2,
    name: "Longsword",
    dmg: 30,
    price: 1000
}
const sword3: ISword = {
    id: 3,
    name: "Hammer",
    dmg: 40,
    price: 1500
}
interface IArmor extends IShopItem { //IArmor = IShopItem + def
    def: number;
}
const armor1: IArmor = {
    id: 4,
    name: "light armor",
    def: 8,
    price: 2000
}
const armor2: IArmor = {
    id: 5,
    name: "heavy armor",
    def: 20,
    price: 3500
}

class Merchant<T extends IShopItem> {
    private health: number;
    private mana: number;
    private name: string;
    private balance: number;//gold coins
    private inventory: T[] = []

    constructor(
        health: number,
        mana: number,
        name: string,
        balance: number
    ){
        this.health = health;
        this.mana = mana;
        this.name = name;
        this.balance = balance;
    }
    addToInventory(item: T){
        this.inventory.push(item)
    }
    sellItem(itemId: number){
        /* [10,20,30].forEach((kiskutya, kiscica) => {//az első a value, a második az index
            console.log(`Az ${kiscica}. eleme: ${kiskutya}`)
        }) */
        let copy = this.inventory.filter((it) => {//megtartom azt amit meg kell
            if(it.id === itemId){
                this.balance += it.price;//hozzáadom, mielőtt "törlöm"
            }
            return it.id !== itemId
        })
        this.inventory = copy;
        //törlés
        //balance +$$$
    }
}
const merchant1 = new Merchant<ISword>(100,100,"Trevor",1000)
merchant1.addToInventory(sword1)
merchant1.addToInventory(sword2)
merchant1.addToInventory(sword3)
merchant1.sellItem(2);
console.log(merchant1)
