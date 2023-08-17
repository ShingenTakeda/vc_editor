<!--Login page-->
<script>

  import { DarkMode } from 'flowbite-svelte';
  import { badUser } from "./worstDB";
  import { goto } from "$app/navigation";
  import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
  import ada_icon1 from "$lib/assets/ada_transparent.png"
  let user = ""
  let password = ""
</script>

<section class="bg-gray-50 dark:bg-gray-900">
  <DarkMode />
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-16 h-16 mr-2" src={ada_icon1} alt="logo">
          Lovelace Editor
      </div>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Bem vindo!
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="user" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                      <input type="text" name="user" id="user" bind:value={user}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome" required>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" bind:value={password}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  </div>

                  <Button class="w-full" on:click={()=>
                    {
                      //Limit the attempts
                      console.log("User: " + user + " | Password: " + password)
                      if(user == badUser.user && password == badUser.password)
                      {
                        goto("/admin")
                      }
                      else
                      {
                        console.log("ERROR!")
                      }
                    }}>Entrar</Button>
                    <div class="flex items-center justify-between">
                        <div class="text-sm text-gray-100 font-medium text-primary-600 hover:underline dark:text-primary-500">TRE-CE</div>
                    </div>
              </form>
          </div>
      </div>
  </div>
</section>


<!-- <section>
<Card class="flex w-full max-w-md">
  <form class="flex flex-col space-y-6" action="/">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
    <Label class="space-y-2">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="space-y-2">
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <div class="flex items-start">
      <Checkbox>Remember me</Checkbox>
      <a href="/" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500"> Lost password? </a>
    </div>
    <Button type="submit" class="w-full">Login to your account</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500"> Create account </a>
    </div>
  </form>
</Card>
</section> -->