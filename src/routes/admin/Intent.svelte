<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox} from 'flowbite-svelte';
	import BtnGroup from './BtnGroup.svelte';
	import IntentStatus from './IntentStatus.svelte';
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
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
        <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>

        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>

        <TableBodyCell>
          <IntentStatus msg="ATUALIZADA" clr="green"/>
        </TableBodyCell>
        <TableBodyCell>
          <!--Add BtnGroup dynamically-->
          <BtnGroup></BtnGroup>
        </TableBodyCell>
      </TableBodyRow>
  </TableBody>
</Table>