<script>
    import { ButtonGroup, Button } from 'flowbite-svelte';
    import { showEdit, showDelete} from "./stores"

    function changeEditState()
    {
      showEdit.update((n) => n = !n)
    }

    function changeDeleteState()
    {
      showDelete.update((n) => n = !n)
    }
</script>

<ButtonGroup>
    
    <Button on:click={changeEditState}>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-primary-500 dark:text-primary-100"><path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" /></svg>
      Editar
    </Button>

    <Button on:click={changeDeleteState}>

      <svg viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-gray-800 dark:text-primary-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
      </svg>
      Remover
    </Button>
</ButtonGroup>