<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox} from 'flowbite-svelte';
	import { intentStore } from './stores';
	import Intent from './Intent.svelte';
</script>
  
<Table>
  <TableHead>
    <TableHeadCell class="!p-4">
       
      </TableHeadCell>
      
      <TableHeadCell>Nome da intent</TableHeadCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableHeadCell>Estado da intent</TableHeadCell>
      <TableHeadCell>Ações</TableHeadCell>
    </TableHead>
  <TableBody>

    {#each [...$intentStore] as intent}
      <Intent intentName={intent.nome} msg={intent.status} id={intent.id} clr="green"/>
    {/each}

  </TableBody>
</Table>