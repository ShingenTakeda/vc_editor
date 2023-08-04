<!-- Admin page -->
<script>
	import Menu from "../Menu.svelte";
	import Intent from "./Intent.svelte";

	let showDelete = false;
	let showEdit = false;
</script>

<Menu/>
<Intent showDelete={showDelete} showEdit={showEdit}/>