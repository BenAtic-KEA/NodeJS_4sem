<script>
let date = new Date();
let dates =[date]
function updateDate(){
    date = new Date();
    dates = [...dates,date]
}
</script>

<div>
    <h4>Current Date: {date}</h4>
</div>
<button on:click={updateDate}>Update Date</button>

<div>{JSON.stringify(dates)}</div>