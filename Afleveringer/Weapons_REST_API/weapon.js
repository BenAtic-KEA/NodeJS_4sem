export let weaponId = 1;

    function Weapon(name,price){
    this.id = weaponId
    this.name = name;
    this.price = price;
    weaponId++
};

export function listOfWeapons(){
    const weapons = [];
    weapons.push(new Weapon("Bow",500));
    weapons.push(new Weapon("Gun",2500));
    weapons.push(new Weapon("Sabre",1200));
    weapons.push(new Weapon("Mortar",15000));
    return weapons
};

export function addWeapon(name,price){

    const newWeapon = new Weapon(name,price)
    return newWeapon

}

