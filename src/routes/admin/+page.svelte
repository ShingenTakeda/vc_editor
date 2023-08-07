<!-- Admin page -->
<script>
	import { Button, Modal, Textarea, Label, Input, ButtonGroup, InputAddon} from 'flowbite-svelte'
	import Menu from "../Menu.svelte";
	import Intent from "./Intent.svelte";
	import {showEdit, showDelete} from "./stores"
	import NavSearch from './NavSearch.svelte';

  //Placeholder, should be dynamic
  let textareaprops = {
    id: 'message',
    name: 'message',
    label: 'Your message',
    rows: 4,
    placeholder: 'Leave a comment...',
  };

  $: id = ""
</script>

<Menu/>
<NavSearch></NavSearch>
<Intent/>

<Modal title="Editar" bind:open={$showEdit} size="xl" autoclose>
  <div class="mb-6">
    <Label for="website-admin" class="block mb-2">Username</Label>
    <ButtonGroup class="w-full">
      <InputAddon>
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
      </InputAddon>
      <Input id="website-admin" placeholder="" />
    </ButtonGroup>
  </div>
  <Button color="blue">Adicionar pergunta do usuario</Button>
  <Textarea {...textareaprops} />
  <Button color="blue">Adicionar resposta da Ada</Button>
</Modal>

<Modal title="Remover" bind:open={$showDelete} size="xs" autoclose>
    <div class="text-center">
      <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Voce tem certeza que quer deletar esta intent?</h3>
      <Button color="red" class="mr-2" >Sim, remover essa intent</Button>
      <Button color='alternative'>Nao, cancelar operaçao</Button>
    </div>
</Modal>