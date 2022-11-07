<script>
    import Parent from "./components/Parent/Parent.svelte";
    import Home from "./components/Home/Home.svelte"
    import {onMount} from "svelte"
    
    onMount(async ()=> {
      const response = await fetch("http://localhost:8080/pokemon")
      const result = await response.json();
      console.log(result);

    } )

const parents = ["Kurt","Katja"];
const children = [
  {
    name: "Flemming",
    blackSheep: "ultra-blacksheep"
  },
  {
    name: "Erik",
    blackSheep: "medium-blacksheep",
    brightKid: true
  },
  {
    name: "Ingrid",
    isGirl: true,
    brightKid: true
  }
]

const pets = [
  {type: "Panda", "name": "Poh"},
  {type: "Dinosaur", "name":"LittleFoot"}
]
</script>

<main>
  
  <Home>
    <Parent name={parents[0]} children={children} pets={pets}/>
    <Parent name={parents[1]} children={children} pets={pets}/>
  </Home>
</main>

<style>
</style>
