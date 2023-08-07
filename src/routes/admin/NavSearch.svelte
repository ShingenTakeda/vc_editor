<script>
    import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
  </script>
  
  <Navbar class="flex" let:hidden let:toggle rounded color="form">
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
  
  