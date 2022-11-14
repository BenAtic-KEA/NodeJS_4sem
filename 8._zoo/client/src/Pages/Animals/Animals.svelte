<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../store/globals";
    let animals = [];
    async function fetchAnimals(){
        const response = await fetch(`${$BASE_URL}/api/animals`)
        const data = await response.json();
        animals = data.data;
    }
    fetchAnimals();
    onMount(fetchAnimals);
</script>

<h3>we got all kind of animals, this is the list:</h3>

{#each animals as animal }
    <p>{animal}</p>
{/each}

