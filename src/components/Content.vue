<script setup>

</script>
<template>
  <div class="flex justify-between px-50 py-20 bg-[]">
    <div class="flex flex-col gap-5 w-[500px] mt-45">
      <span class="text-4xl font-bold text-amber-50"
        >Finding jobs with us.</span>
      <span class="text-xl break-words text-amber-50"
        >Your dream job is within reach,<br />start your journey now.</span
      >
    </div>
    <!-- login form -->
    <div class="flex flex-col items-center w-[450px] bg-white rounded-xl shadow-lg p-8 mt-6">
    <span class="text-3xl font-semibold text-gray-800 mb-5">Login Account</span>
    
    <input
      class="w-60 h-10 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      type="email"
      name="Gmail"
      placeholder="Email"
    />

    <input
      class="w-60 h-10 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      type="password"
      name="Password"
      placeholder="Password"
    />
    
    <span class="text-blue-600 text-xs mb-3 cursor-pointer hover:underline">Forgot Password?</span>
    
    <button
      class="w-60 h-10 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition duration-300 mb-4"
    >
      Login
    </button>
    
      
    
    <button
      class="w-60 h-10 border border-gray-300 rounded-full flex items-center justify-center gap-2 mb-3 hover:bg-gray-100 transition duration-300"
    >
      <img class="w-5 h-5" src="https://i.pinimg.com/736x/27/fa/9f/27fa9f7a7ce6789c74f3679be56786c8.jpg" alt="Google" />
      Sign up with Google
    </button>
    
    <button
      class="w-60 h-10 border border-gray-300 rounded-full flex items-center justify-center gap-2 mb-3 hover:bg-gray-100 transition duration-300"
    >
      <img class="w-5 h-5" src="https://i.pinimg.com/736x/a9/bb/c6/a9bbc6529fd4ea32bd2a98b56f3925c2.jpg" alt="LinkedIn" />
      Sign up with LinkedIn
    </button>
  </div>
  </div>
</template>

<style scoped></style>
