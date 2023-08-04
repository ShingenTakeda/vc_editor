<!-- Admin page -->
<script>
	import { Button, Modal } from 'flowbite-svelte'
	import Menu from "../Menu.svelte";
	import Intent from "./Intent.svelte";
	import {showEdit, showDelete} from "./stores"

	let showModalEdit = false;
	let showModalDelete = false;

	showEdit.subscribe((value)=>
	{
		showModalEdit = value
	})

	showDelete.subscribe((value)=>
	{
		showModalDelete = value
	})
</script>

<Menu/>
<Intent/>

<Modal title="Editar" bind:open={showModalEdit} size="xl" autoclose>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </p>
    <svelte:fragment slot='footer'>
      <Button>I accept</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
</Modal>

<Modal title="Remover" bind:open={showModalDelete} size="xs" autoclose>
    <div class="text-center">
      <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
      <Button color="red" class="mr-2">Sim, remover essa intent</Button>
      <Button color='alternative'>Nao, cancelar operaçao</Button>
    </div>
</Modal>