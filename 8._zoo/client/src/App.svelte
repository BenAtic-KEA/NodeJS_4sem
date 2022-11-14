<script>
  import {Router, Link, Route} from "svelte-navigator";
  import Home from "./Pages/Home/Home.svelte";
  import Entrance from "./Pages/Entrance/Entrance.svelte";
    import Animals from "./Pages/Animals/Animals.svelte";
  
  
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/entrance">Entrance</Link>
    <Link to="/animals">Animals</Link>
  </nav>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/entrance"><Entrance /></Route>
    <Route path="/animals"><Animals /></Route>
  </div>
</Router>