<script>
	import { Badge } from 'flowbite-svelte';
	export let clr = "red";
	export let msg = "";
</script>

<Badge large color={clr} >{msg}</Badge>