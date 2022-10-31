<script>
    import Child from "../Child/Child.svelte";
    export let name;
    export let children
    export let pets
    export let parents

    import { fridgeMessageStore } from "../../store/fridgeBulletinStore.js";

    function handleEraseFridgeBulletin(){
        fridgeMessageStore.set("Write your message...")
    }

    function handleAlwaysSayHi(){
        console.log('Hi!')
    }

    function handleTellILoveYou(message){
        console.log(message);
    }
</script>

<h1>Hi I'm {name}</h1>
<p on:click={handleEraseFridgeBulletin}>Erase the fridge bulletin</p>
{#each children as child}
<Child parentName={name} onAlwaysSayHi={handleAlwaysSayHi} onTellILoveYou = {handleTellILoveYou} child = {child} pets ={pets}/>
{/each}
