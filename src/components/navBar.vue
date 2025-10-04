<template>
  <nav class="font-poppins">
    <div class="bg-gold items-center flex justify-between font-semibold top-0 z-10">
      <router-link to="/" class="ml-14">
        <img src="../assets/skillhub.png" alt="logo" class="w-20">
      </router-link>
      <div class="flex items-center space-x-2 mr-10">
        <section class="relative space-x-2 focus-within:outline bg-[#F3DEA1] flex rounded-full pl-2 pr-10 py-2 my-5 w-100">
          <MagnifyingGlassOutline class="size-7 cursor-pointer text-grey"/>
          <input type="text" placeholder="What do you want to learn?" class="w-full outline-none rounded-full">
        </section>
        <div class="flex flex-col group">
          <button class="flex font-bold text-[#444441] items-center group hover:border hover:border-[#444441] focus:border focus:border-[#444441] rounded-xl p-2 space-x-2 cursor-pointer">
            <UserOutline class="size-6 stroke-3" />
            <p>Sign In</p>
            <ChevronDownOutline class="size-5 stroke-3 group-hover:rotate-180 group-focus:rotate-180 transition-transform ease-in-out duration-300" />
          </button>
          <div class="bg-gold text-[#444441] border border-[#444441] scale-0 rounded-xl origin-top group-hover:scale-100 group-focus-within:scale-100 transition-all duration-220 ease-linear flex flex-col divide-y ml-5 absolute mt-12 px-4 py-3">
            <router-link to="" class="pb-1">Sign Up</router-link>
            <router-link to="/login" class="pt-1">Login</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between border-b-slate-300 border-b-1 py-3 px-10">
      <section class="flex font-semibold space-x-8 ml-5">
        <button class="flex items-center space-x-2 cursor-pointer text-black py-2 group">
          <p>Individual</p>
          <ChevronDownOutline class="size-5 stroke-3 group-hover:rotate-180 group-focus:rotate-180 transition-transform ease-in-out duration-300" />
        </button>
        <button class="flex items-center space-x-2 cursor-pointer text-black py-2 group">
          <p>Business</p>
          <ChevronDownOutline class="size-5 stroke-3 group-hover:rotate-180 group-focus:rotate-180 transition-transform ease-in-out duration-300" />
        </button>
        <button class="flex items-center space-x-2 cursor-pointer text-black py-2 group">
          <p>Courses</p>
          <ChevronDownOutline class="size-5 stroke-3 group-hover:rotate-180 group-focus:rotate-180 transition-transform ease-in-out duration-300" />
        </button>
        <button class="flex items-center space-x-2 cursor-pointer text-black py-2 group">
          <p>Resources</p>
          <ChevronDownOutline class="size-5 stroke-3 group-hover:rotate-180 group-focus:rotate-180 transition-transform ease-in-out duration-300" />
        </button>
      </section>
      <button class="flex items-center space-x-3 cursor-pointer text-white bg-purple rounded-full py-2 px-5 group">
        <p class="font-semibold">View plans</p>
        <ChevronDownOutline class="size-5 stroke-3 group-hover:rotate-180 group-focus:rotate-180 transition-transform ease-in-out duration-300" />
      </button>
    </div>
  </nav>
</template>
