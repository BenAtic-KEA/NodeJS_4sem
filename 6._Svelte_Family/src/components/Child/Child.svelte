<script>
    import Pet from "../Pet/Pet.svelte";
    export let child;
    export let pets
    export let onTellILoveYou
    export let onAlwaysSayHi
    export let parentName
    import { fridgeMessageStore } from "../../store/fridgeBulletinStore.js";
    let fridgeMessage = "";
    function handleWriteMessage(){
        fridgeMessageStore.update((currentMessage) => {
            return currentMessage + `
            ${fridgeMessage}
            `
        })
    }

</script>

<p>{child.name}</p>
<input type="text" placeholder="Write a bulletin" bind:value={fridgeMessage}>
<button on:click={handleWriteMessage}>Update bulletin</button>
<br><br>
<button on:click={onAlwaysSayHi} >Whisper in parents ear</button>
<button on:click={onTellILoveYou(`i love you, ${parentName}`  )} >Whisper in parents ear</button>
{#each pets as pet}
<Pet pet={pet}></Pet>
{/each}