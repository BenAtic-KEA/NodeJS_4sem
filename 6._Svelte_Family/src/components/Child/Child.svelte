<script>
    import Pet from "../Pet/Pet.svelte";
    export let child;
    export let pets
</script>

<p>{child.name}</p>
{#each pets as pet}
<Pet pet={pet}></Pet>
{/each}