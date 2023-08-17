<!-- Admin page -->
<script>
	import { Button, Modal, Textarea, Label, Input, ButtonGroup, InputAddon} from 'flowbite-svelte'
	import Menu from "../Menu.svelte";
	import {showEdit, showDelete , intentStore, modalID} from "./stores"
	import NavSearch from './NavSearch.svelte';
	import IntentList from './IntentList.svelte';

  //Placeholder, should be dynamic
  let textareaprops = {
    id: 'mensagem',
    name: 'mensagem',
    label: 'Resposta',
    rows: 4,
    placeholder: 'Escreva a sua resposta',
  };

  let testIntents = 
  [
    {id: 0, nome: "TRECE.TEST.INTENT1", 
                                      perguntas: 
                                      [
                                        "Ola!",
                                        "Outra Pergunta",
                                      ], 
                                      respostas: 
                                      [
                                        "Oi",
                                        "Resposta da outra pergunta"
                                      ],
                                      status: "ATUALIZADA",
                                      select: false
                                      },
  {id: 1, nome: "TRECE.TEST.INTENT2", 
                                      perguntas: 
                                      [

                                      ], 
                                      respostas: 
                                      [

                                      ],
                                      status: "ATUALIZADA",
                                      select: false
                                      },
  {id: 2, nome: "TRECE.TEST.INTENT3", 
                                      perguntas: 
                                      [

                                      ], 
                                      respostas: 
                                      [

                                      ],
                                      status: "ATUALIZADA",
                                      select: false
                                      }
  
  ]

  $intentStore = testIntents
  
  console.log($intentStore)
</script>

<Menu/>
<!-- <NavSearch></NavSearch> -->
<IntentList/>

<Modal title="Editar" bind:open={$showEdit} size="xl" autoclose>
  <!--The inside section of this modal shoukd be dynamic-->
  <Label for="website-admin" class="block mb-2">Perguntas:</Label>
  <div class="mb-6">
    {#each $intentStore[$modalID].perguntas as pergunta}
    <ButtonGroup class="w-full">
      <InputAddon>
        <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
          <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
        </svg>
      </InputAddon>
      <Input id="website-admin" placeholder="Pergunta" value={pergunta}/>
    </ButtonGroup>
    {/each}
  </div>
  <Button color="blue">Adicionar pergunta do usuario</Button>
  <Label for="website-admin" class="block mb-2">Respostas:</Label>
  <!-- <Textarea {...textareaprops}> </Textarea> -->
  {#each $intentStore[$modalID].respostas as resposta}
  <div>
    <Textarea {...textareaprops} value={resposta}></Textarea>
  </div>
  {/each}
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