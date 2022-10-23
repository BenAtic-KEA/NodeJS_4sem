<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}

$:{
    console.log('the count is ' + count);
    if(count%2 !== 0)
    alert('COUNT IS A ODD Number = ' + count);
} 

$: if (count >=10) {
    alert('count is dangerously high!');
    count = 9;
}


</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>