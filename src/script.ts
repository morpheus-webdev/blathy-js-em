//1. feladat
//Írjatok egy függvényt ami kivon egy számból egy másikat
//ha negatív szám lenne az eredmény, 0-val tér vissza

/* function kivonas(a: number, b: number){
    return a-b >= 0 ? a-b : 0;
} */

//2. feladat
//Írjatok függvényt ami elfogad egy IUser felhasználót
// és visszatér a nevével
//IUser = nev, kor, email cím
/* interface IUser {
    nev: string;
    age: number;
    email: string;
}

function getNameFromUser(user: IUser): string{
    return user.nev;
} */

//3. feladat
//Írjatok egy függvényt ami kap egy IUser-t és hozzáadja egy
//kívül létrehozott IUser[]-hez (fgv-en kívül létrehozott)
//Adjatok hozzá 3 usert és írassátok az arrayt
/* const users: IUser[] = [];

function addUser(user: IUser){
    users.push(user)
}

addUser({nev: "Jani", age: 18, email: "jani@gmail.com"})
addUser({nev: "Pista", age: 18, email: "pista@gmail.com"})
addUser({nev: "Sára", age: 18, email: "sára@gmail.com"})
console.log(users) */


//OSZTÁLYOK, GENERIKUSOK

interface IItem {
    id: number;
    name: string;
    price: number;
}

interface ISword extends IItem {
    dmg: number;
}

interface IArmor extends IItem {
    def: number;
}

const sword1: ISword = {
    id: 1,
    name: "Knife",
    dmg: 5,
    price: 50
}

const sword2: ISword = {
    id: 2,
    name: "Plain Sword",
    dmg: 10,
    price: 150
}
const sword3: ISword = {
    id: 3,
    name: "Longsword",
    dmg: 15,
    price: 250
}

const armor1: IArmor = {
    id: 4,
    name: "Light Armor",
    def: 2,
    price: 100
}

const armor2: IArmor = {
    id: 5,
    name: "Medium Armor",
    def: 4,
    price: 200
}

const armor3: IArmor = {
    id: 6,
    name: "Heavy Armor",
    def: 6,
    price: 300
}

//Házifeladat: Készítsetek egy adattagok ami egy számot tárol.
//a konstruktor állítsa be ezt a számot a balance-ra.
//Legyen egy fgv amit meghívok akkor kiírja hogy mínuszban vagy pluszban van-e a merchant.
//és ha igen mennyivel
class Merchant<T extends IItem> {
    private hp: number;
    private mana: number;
    private balance: number;
    private inventory: T[] = [];

    constructor(hp: number, mana: number, balance: number){
        this.hp = hp;
        this.mana = mana;
        this.balance = balance;
    }

    getHp(){return this.hp};
    setHp(hp: number){this.hp=hp}
    getmana(){return this.mana};
    setMana(mana: number){this.mana=mana}
    getBalance(){return this.balance};
    setBalance(balance: number){this.balance=balance}

    damageMerchant(dmg: number){
        if(dmg < 0){
            dmg = Math.abs(dmg)
        }
        if(this.hp - dmg < 0){
            this.hp = 0;
        }
        else {
            this.hp -= dmg;
        }
    }
    printBalance(){
        console.log(`The merchant has ${this.balance} gold now`)
    }
    addItem(item: T){
        this.balance -= Math.floor(item.price*0.8)
        this.inventory.push(item)
        this.printBalance()
    }

    sellItem(id: number){
        let x = this.inventory.length;
            this.inventory = this.inventory.filter((it) => {
                if(it.id === id){
                    this.balance += it.price
                    this.printBalance();
                }
                return it.id !== id;
            })
        if(x === this.inventory.length){
            console.error("No item was deleted")
        }
    }
}

/* const merchant1 = new Merchant<ISword>(100,100);
merchant1.setBalance(1000);
merchant1.damageMerchant(-10)
merchant1.addItem(sword1)
merchant1.addItem(sword2)
merchant1.addItem(sword3)
merchant1.sellItem(sword2.id)
console.log(merchant1) */

const merchant2 = new Merchant<IArmor>(50, 150, 2000);
merchant2.setBalance(2000);
merchant2.addItem(armor1);
merchant2.addItem(armor2);
merchant2.addItem(armor3);
merchant2.sellItem(4)
merchant2.sellItem(5)
merchant2.sellItem(6)
merchant2.sellItem(7)
console.log(merchant2)
