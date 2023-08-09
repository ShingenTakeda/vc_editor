<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox} from 'flowbite-svelte';
	import BtnGroup from './BtnGroup.svelte';
	import IntentStatus from './IntentStatus.svelte';
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
      <TableHeadCell>Açoes</TableHeadCell>
    </TableHead>
  <TableBody>

    {#each [...$intentStore] as intent}
      <Intent intentName={intent.nome} msg={intent.status} clr="green"/>
    {/each}

  </TableBody>
</Table>