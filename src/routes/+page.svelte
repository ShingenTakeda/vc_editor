<!--Login page-->
<script>
  import { badUser, userStore } from "./worstDB";
  import { goto } from "$app/navigation";
  import ada_icon1 from "$lib/assets/ada_transparent.png"
  //TODO: Check out on how to use stores
  let user = ""
  let password = ""
</script>


<section class="bg-gray-50 dark:bg-gray-900">
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
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <div class="text-sm text-gray-100 font-medium text-primary-600 hover:underline dark:text-primary-500">TRE-CE</div>
                  </div>
                  <button type="submit" on:click|preventDefault={()=>
                  {
                    console.log("User: " + user + " | Password: " + password)
                    if(user == badUser.user && password == badUser.password)
                    {
                      goto("/admin")
                    }
                    else
                    {
                      console.log("ERROR!")
                    }
                  }}
                  class="w-full bg-lime-600 text-white bg-primary-100 hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-primary-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-900 dark:hover:bg-primary-900 dark:focus:ring-primary-900">Entrar</button>
              </form>
          </div>
      </div>
  </div>
</section>