"use strict";
//1. feladat
//Írjatok egy függvényt ami kivon egy számból egy másikat
//ha negatív szám lenne az eredmény, 0-val tér vissza
const sword1 = {
    id: 1,
    name: "Knife",
    dmg: 5,
    price: 50
};
const sword2 = {
    id: 2,
    name: "Plain Sword",
    dmg: 10,
    price: 150
};
const sword3 = {
    id: 3,
    name: "Longsword",
    dmg: 15,
    price: 250
};
const armor1 = {
    id: 4,
    name: "Light Armor",
    def: 2,
    price: 100
};
const armor2 = {
    id: 5,
    name: "Medium Armor",
    def: 4,
    price: 200
};
const armor3 = {
    id: 6,
    name: "Heavy Armor",
    def: 6,
    price: 300
};
class Merchant {
    constructor(hp, mana) {
        this.balance = 0;
        this.inventory = [];
        this.hp = hp;
        this.mana = mana;
    }
    getHp() { return this.hp; }
    ;
    setHp(hp) { this.hp = hp; }
    getmana() { return this.mana; }
    ;
    setMana(mana) { this.mana = mana; }
    getBalance() { return this.balance; }
    ;
    setBalance(balance) { this.balance = balance; }
    damageMerchant(dmg) {
        if (dmg < 0) {
            dmg = Math.abs(dmg);
        }
        if (this.hp - dmg < 0) {
            this.hp = 0;
        }
        else {
            this.hp -= dmg;
        }
    }
    printBalance() {
        console.log(`The merchant has ${this.balance} gold now`);
    }
    addItem(item) {
        this.balance -= Math.floor(item.price * 0.8);
        this.inventory.push(item);
        this.printBalance();
    }
    sellItem(id) {
        let x = this.inventory.length;
        this.inventory = this.inventory.filter((it) => {
            if (it.id === id) {
                this.balance += it.price;
                this.printBalance();
            }
            return it.id !== id;
        });
        if (x === this.inventory.length) {
            console.error("No item was deleted");
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
const merchant2 = new Merchant(50, 150);
merchant2.setBalance(2000);
merchant2.addItem(armor1);
merchant2.addItem(armor2);
merchant2.addItem(armor3);
merchant2.sellItem(4);
merchant2.sellItem(5);
merchant2.sellItem(6);
merchant2.sellItem(7);
console.log(merchant2);
