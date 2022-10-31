<script>
    import Child from "../Child/Child.svelte";
    export let name;
    export let children
    export let pets
    export let parents

// create a function that is called *AlwaysSayHi and make the child always say hi to the parent when greeting

    function handleAlwaysSayHi(){
        console.log('Hi!')
    }

    function handleTellILoveYou(message){
        console.log(message);
    }
</script>

<h1>Hi I'm {name}</h1>
{#each children as child}
<Child parentName={name} onAlwaysSayHi={handleAlwaysSayHi} onTellILoveYou = {handleTellILoveYou} child = {child} pets ={pets}/>
{/each}