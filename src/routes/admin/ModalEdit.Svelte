<script>
    import { Button, Modal } from 'flowbite-svelte'
    let id = 'size-modal';
    let sizesModal = false;
    let size;
  </script>
  
  <div class="block space-y-4 md:space-y-0 md:space-x-4">
    <Button size="xs" on:click={()=> {id='extrasmall-modal'; size = 'xs'; sizesModal = true}}>xs</Button>
    <Button size="sm" on:click={()=> {id='small-modal'; size = 'sm'; sizesModal = true}}>sm</Button>
    <Button size="md" on:click={()=> {id='medium-modal'; size = 'md'; sizesModal = true}}>md</Button>
    <Button size="lg" on:click={()=> {id='large-modal'; size = 'lg'; sizesModal = true}}>lg</Button>
    <Button size="xl" on:click={()=> {id='extralarge-modal'; size = 'xl'; sizesModal = true}}>xl</Button>
  </div>
  
  <Modal {id} title="Terms of Service" bind:open={sizesModal} {size} autoclose>
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