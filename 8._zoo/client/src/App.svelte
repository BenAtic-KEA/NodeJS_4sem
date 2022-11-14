<script>
  import {Router, Link, Route} from "svelte-navigator";
  import Home from "./Pages/Home/Home.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/entrance">Entrance</Link>
    <Link to="/animals">Animals</Link>
  </nav>
  <div>
    <Route path="/"><Home /></Route>
  </div>
</Router>