function Weapon(name,price){
    this.name = name
    this.price = price
}


module.exports = {

    weaponlist: function listOfWeapons(){
        const weapons = []
        
        weapons.push(new Weapon("Bow",500))
        weapons.push(new Weapon("Gun",2500))
        weapons.push(new Weapon("Sabre",1200))
        weapons.push(new Weapon("Mortar",15000))
        return weapons
    }
}