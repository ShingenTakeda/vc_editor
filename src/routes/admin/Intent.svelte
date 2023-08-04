<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox} from 'flowbite-svelte';
	  import BtnGroup from './BtnGroup.svelte';
    export let showEdit = false;
    export let showDelete = false;
  </script>
  
  <Table showEdit={showEdit} showDelete={showDelete}>
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

        <TableBodyCell>3.0 lb.</TableBodyCell>
        <TableBodyCell>
          <!--Add BtnGroup dynamically-->
          <BtnGroup showEdit={showEdit} showDelete={showDelete}></BtnGroup>
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>