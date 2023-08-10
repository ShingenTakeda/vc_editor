<script>

	import { Checkbox, TableBodyCell, TableBodyRow } from "flowbite-svelte";
	import BtnGroup from "./BtnGroup.svelte";
    import IntentStatus from "./IntentStatus.svelte";

    export let intentName = "";
    export let msg = ""
    export let clr = ""
    export let id = 0
</script>


<TableBodyRow id={id}>
    <TableBodyCell class="!p-4">
      <Checkbox />
    </TableBodyCell>
      <TableBodyCell>{intentName}</TableBodyCell>

      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>

    <TableBodyCell>
        <IntentStatus msg={msg} clr={clr}/>
    </TableBodyCell>
      
    <TableBodyCell>
        <!--Add BtnGroup dynamically-->
        <BtnGroup id={id}></BtnGroup>
    </TableBodyCell>
</TableBodyRow>