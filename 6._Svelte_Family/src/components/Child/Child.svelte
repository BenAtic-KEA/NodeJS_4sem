<script>
    import Pet from "../Pet/Pet.svelte";
    export let child;
    export let pets
    export let onTellILoveYou
    export let onAlwaysSayHi
    export let parentName

</script>

<p>{child.name}</p>
<button on:click={onAlwaysSayHi} >Whisper in parents ear</button>
<button on:click={onTellILoveYou(`i love you, ${parentName}`  )} >Whisper in parents ear</button>
{#each pets as pet}
<Pet pet={pet}></Pet>
{/each}