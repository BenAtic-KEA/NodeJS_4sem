<script>
    import Child from "../Child/Child.svelte";
    export let name;
    export let children
    export let pets
</script>

<h1>Hi I'm {name}</h1>
{#each children as child}
<Child child = {child} pets ={pets}/>
{/each}