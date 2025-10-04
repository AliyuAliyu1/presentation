<template>
  <div class="flex justify-center">
    <div class="font-poppins flex flex-col justify-center items-center space-y-7 my-40 w-1/2">
      <h1 class="text-3xl font-semibold">Welcome Back</h1>
      <form @submit="handleLogin" class="flex flex-col justify-center items-center space-y-10 w-1/2">
        <input type="text" placeholder="Enter your email" class="p-5 w-full border border-grey rounded-lg" />
        <section class="relative focus-within:outline border border-grey w-full flex rounded-lg">
          <input type="password" placeholder="Password" class="p-5 w-full outline-none rounded-lg" />
          <EyeOutline class="size-8 mt-4 mx-5 cursor-pointer text-grey" />
        </section>
        <button
          type="submit"
          class="bg-purple text-white p-3 rounded-lg w-full cursor-pointer hover:opacity-70 transition duration-150"
        >
          Login
        </button>
      </form>
      <p>
        Don't have an account?
        <router-link to="/register" class="font-semibold text-gold">Register</router-link>
      </p>
    </div>
    <img src="../assets/login.png" alt="" class="h-[900px]" />
  </div>
</template>

<script setup>
const handleLogin = (e) => {
  e.preventDefault(); // Prevent form default submit

  // Redirect to external dashboard URL
  window.location.href = 'https://https-github-com-aliyu-aliyu1-backe.vercel.app/';
};
</script>

