<template>
  <div class="font-poppins grid grid-cols-1">
    <section class="hero flex items-center justify-evenly text-left w-full">
      <section class="space-y-8 w-2/5">
        <h1 class="text-5xl font-bold">Level up your
          <span class="text-purple">skill</span>
        </h1>
        <h1 class="text-5xl font-bold -mt-4">Level up your
          <span class="text-gold">future</span>
        </h1>
        <p class="text-xl opacity-50">Build in-demand skills with 10,000+ programs from top companies like Walure,
           Google, and more—only on MyskillHub.</p>
        <section class="grid grid-cols-2 gap-3">
          <h3 class="flex items-center w-fit">
            <CheckCircleSolid class="size-7 text-purple mr-1" />
            5000+ tech courses
          </h3>
          <h3 class="flex items-center w-fit">
            <CheckCircleSolid class="size-7 text-purple mr-1" />
            400+ skill assessments
          </h3>
          <h3 class="flex items-center w-fit">
            <CheckCircleSolid class="size-7 text-purple mr-1" />
            Access 3,500+ practice labs
          </h3>
          <h3 class="flex items-center w-fit">
            <CheckCircleSolid class="size-7 text-purple mr-1" />
            Over 150+ certifications
          </h3>
        </section>
        <button class="cursor-pointer bg-purple text-white py-3.5 px-10 rounded-lg mt-2 mr-8 hover:opacity-70 transition duration-150">Enroll Today</button>
        <button class="cursor-pointer border-2 border-gold py-3 px-10 rounded-lg hover:bg-gold hover:text-white transition duration-150">Explore Courses</button>
      </section>
      <img src="../assets/hero-girl.png" alt="" class="w-1/3 mt-5" />
    </section>
    <section class="bg-slate-200 w-full pt-5">
      <p class="text-center">Trusted By Learners & Organisation Worldwide</p>
      <section class="flex space-x-30 mx-30 my-5 justify-center items-center">
        <img src="../assets/cyberspace.png" alt="" class="size-20">
        <img src="../assets/walure.png" alt="" class="w-40 h-12">
        <img src="../assets/meta.png" alt="" class="w-24">
        <img src="../assets/interswitch.png" alt="" class="w-40">
        <img src="../assets/google.png" alt="" class="w-32">
      </section>
    </section>
    <section class="px-72 border-b border-slate-300 space-y-3 py-20">
      <h1 class="font-bold text-3xl">Complete Course Catalog</h1>
      <p>Learn from a library of over 250,000 video courses, updated monthly.</p>
      <section class="flex space-x-3">
        <button @click="toggleDesign" class="rounded-full text-slate-500 font-semibold border p-2 text cursor-pointer hover:text-white hover:bg-purple
         focus:text-white focus:bg-purple transition duration-150">Product Design</button>
        <button class="rounded-full text-slate-500 font-semibold border p-2 text cursor-pointer hover:text-white hover:bg-purple
         focus:text-white focus:bg-purple transition duration-150">Web Development</button>
        <button class="rounded-full text-slate-500 font-semibold border p-2 text cursor-pointer hover:text-white hover:bg-purple
         focus:text-white focus:bg-purple transition duration-150">JavaScript</button>
        <button class="rounded-full text-slate-500 font-semibold border p-2 text cursor-pointer hover:text-white hover:bg-purple
         focus:text-white focus:bg-purple transition duration-150">Data Science</button>
        <button class="rounded-full text-slate-500 font-semibold border p-2 text cursor-pointer hover:text-white hover:bg-purple
         focus:text-white focus:bg-purple transition duration-150">Project Management</button>
      </section>
      <Transition name="fade">
        <section v-if="showDesign" class="border border-grey space-y-5 mt-10 px-5 py-10">
          <h1 class="text-2xl font-bold ">Boost your career with Product Design skills.</h1>
          <p>
            Start your Product Design journey with MyskillHub’s courses and gain the skills to craft impactful user experiences. <br>
            Learn usability, creativity, and problem-solving to design apps, websites, and digital products that connect with people.
          </p>
          <button class="cursor-pointer bg-purple text-white py-3.5 px-10 rounded-lg mt-2 mr-8">Explore More</button>
          <section class="grid grid-cols-3 gap-10">
            <div class="hover:shadow-2xl rounded-2xl w-fit space-y-3 transition-all duration-150">
              <img src="../assets/ui-ux.png" alt="Course Picture" class="rounded-2xl w-full h-59 hover:outline-4 hover:outline-yellow-200">
              <h2 class="text-xl px-3 font-bold">Complete UI/UX Design Course - For Beginners</h2>
              <p class="opacity-50 px-3">Master Evan. O Training</p>
              <div class="flex mx-3 space-x-1.5">
                <div class="flex">
                  <p class="mr-2">5.0</p>
                  <StarSolid v-for="rating in ratings" :key="rating" class="size-5 text-yellow-500"/>
                </div>
                <p class="opacity-50 font-semibold">(42,067)</p>
              </div>
              <p class="mx-3 space-x-2">
                <span class="text-xl font-bold">#12,500</span>
                <span class="line-through opacity-50">#17,500</span>
              </p>
              <p class="bg-gold opacity-80 text-black font- w-fit px-3 py-1 mb-5 ml-3 rounded-lg">Best seller</p>
            </div>
            <div class="hover:shadow-2xl rounded-2xl w-fit space-y-3 transition-all duration-150">
              <img src="../assets/data.png" alt="Course Picture" class="rounded-2xl w-full h-59 hover:outline-4 hover:outline-yellow-200">
              <h2 class="text-xl px-3 font-bold">Complete Data Analysis Course - For Beginners</h2>
              <p class="opacity-50 px-5">Segun O Training</p>
              <div class="flex mx-5 space-x-1.5">
                <div class="flex">
                  <p class="mr-2">5.0</p>
                  <StarSolid v-for="rating in ratings" :key="rating" class="size-5 text-yellow-500"/>
                </div>
                <p class="opacity-50 font-semibold">(42,067)</p>
              </div>
              <p class="mx-5 space-x-2">
                <span class="text-xl font-bold">#21,800</span>
                <span class="line-through opacity-50">#17,500</span>
              </p>
              <p class="bg-gold opacity-80 text-black font- w-fit px-3 py-1 mb-5 ml-5 rounded-lg">Best seller</p>
            </div>
            <div class="hover:shadow-2xl rounded-2xl w-fit space-y-3 transition-all duration-150">
              <img src="../assets/project-m.png" alt="Course Picture" class="rounded-2xl w-full h-59 hover:outline-4 hover:outline-yellow-200">
              <h2 class="text-xl px-5 font-bold">Extensive Project Management Course</h2>
              <p class="opacity-50 px-5">Tiana smart</p>
              <div class="flex mx-5 space-x-1.5">
                <div class="flex">
                  <p class="mr-2">5.0</p>
                  <StarSolid v-for="rating in ratings" :key="rating" class="size-5 text-yellow-500"/>
                </div>
                <p class="opacity-50 font-semibold">(42,067)</p>
              </div>
              <p class="mx-5 space-x-2">
                <span class="text-xl font-bold">#25,000</span>
                <span class="line-through opacity-50">#17,500</span>
              </p>
              <p class="bg-gold opacity-80 text-black font- w-fit px-3 py-1 mb-5 ml-5 rounded-lg">Best seller</p>
            </div>
          </section>
        </section>
      </Transition>
    </section>
    <section class="space-y-5 mx-auto py-20 px-72 border-b border-slate-300">
      <section class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Testimonials</h1>
        <section class="flex space-x-3">
          <section class="size-12 border border-slate-300 cursor-pointer rounded-full flex justify-center items-center">
            <ChevronLeftOutline class="text-black stroke-2 size-10"/>
          </section>
          <section class="size-12 border border-slate-300 cursor-pointer rounded-full flex justify-center items-center">
            <ChevronRightOutline class="text-black stroke-2 size-10"/>
          </section>
        </section>
      </section>
      <section class="grid grid-cols-3 gap-10">
        <div class="flex flex-col py-5 border rounded-2xl w-fit space-y-5">
          <p class="px-8 text-xl text-balance text-center">"Myskillhub made learning so easy for me.
            The wide range of courses and progress tracking kept me motivated every step of the way."</p>
          <div class="flex items-center mx-7 mt-40">
            <img src="../assets/sarah.png" alt="" class="w-20">
            <div class="font-semibold text-xl ml-3">
              <p class="">Sarah O.</p>
              <p>Student</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col py-5 border rounded-2xl w-fit space-y-5">
          <p class="px-8 text-xl text-center">"I gained practical skills that I now use at work every day.
             Myskillhub is more than a platform, it’s an opportunity booster."</p>
          <div class="flex items-center mx-7 mt-40">
            <img src="../assets/chidinma.png" alt="" class="w-20">
            <div class="font-semibold text-xl ml-3">
              <p class="">Chidinma E.</p>
              <p>Graduate</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col py-5 border rounded-2xl w-fit space-y-5">
          <p class="px-8 text-xl text-center">"The platform is user-friendly, and my students love how they can track their growth.
             It makes teaching and learning more effective."</p>
          <div class="flex items-center mx-7 mt-34">
            <img src="../assets/amina.png" alt="" class="w-20">
            <div class="font-semibold text-xl ml-3">
              <p class="">Amina T.</p>
              <p>Instructor</p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="space-y-5 mx-auto px-52 mt-20">
      <section class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Trending Courses</h1>
      </section>
      <section class="grid grid-cols-4 gap-10">
        <div class="hover:shadow-2xl rounded-2xl w-fit space-y-3 transition-all duration-150">
          <img src="../assets/ui-ux.png" alt="Course Picture" class="rounded-2xl w-full h-59 hover:outline-4 hover:outline-yellow-200">
          <h2 class="text-xl px-3 font-bold">Complete UI/UX Design Course - For Beginners</h2>
          <p class="opacity-50 px-3">Master Evan. O Training</p>
          <div class="flex mx-3 space-x-1.5">
            <div class="flex">
              <p class="mr-2">5.0</p>
              <StarSolid v-for="rating in ratings" :key="rating" class="size-5 text-yellow-500"/>
            </div>
            <p class="opacity-50 font-semibold">(42,067)</p>
          </div>
          <p class="mx-3 space-x-2">
            <span class="text-xl font-bold">#12,500</span>
            <span class="line-through opacity-50">#17,500</span>
          </p>
          <p class="bg-gold opacity-80 text-black font- w-fit px-3 py-1 mb-5 ml-3 rounded-lg">Best seller</p>
        </div>
        <div class="hover:shadow-2xl rounded-2xl w-fit space-y-3 transition-all duration-150">
          <img src="../assets/data.png" alt="Course Picture" class="rounded-2xl w-full h-59 hover:outline-4 hover:outline-yellow-200">
          <h2 class="text-xl px-3 font-bold">Complete Data Analysis Course - For Beginners</h2>
          <p class="opacity-50 px-5">Segun O Training</p>
          <div class="flex mx-5 space-x-1.5">
            <div class="flex">
              <p class="mr-2">5.0</p>
              <StarSolid v-for="rating in ratings" :key="rating" class="size-5 text-yellow-500"/>
            </div>
            <p class="opacity-50 font-semibold">(42,067)</p>
          </div>
          <p class="mx-5 space-x-2">
            <span class="text-xl font-bold">#21,800</span>
            <span class="line-through opacity-50">#17,500</span>
          </p>
          <p class="bg-gold opacity-80 text-black font- w-fit px-3 py-1 mb-5 ml-5 rounded-lg">Best seller</p>
        </div>
        <div class="hover:shadow-2xl rounded-2xl w-fit space-y-3 transition-all duration-150">
          <img src="../assets/project-m.png" alt="Course Picture" class="rounded-2xl w-full h-59 hover:outline-4 hover:outline-yellow-200">
          <h2 class="text-xl px-5 font-bold">Extensive Project Management Course</h2>
          <p class="opacity-50 px-5">Tiana smart</p>
          <div class="flex mx-5 space-x-1.5">
            <div class="flex">
              <p class="mr-2">5.0</p>
              <StarSolid v-for="rating in ratings" :key="rating" class="size-5 text-yellow-500"/>
            </div>
            <p class="opacity-50 font-semibold">(42,067)</p>
          </div>
          <p class="mx-5 space-x-2">
            <span class="text-xl font-bold">#25,000</span>
            <span class="line-through opacity-50">#17,500</span>
          </p>
          <p class="bg-gold opacity-80 text-black font- w-fit px-3 py-1 mb-5 ml-5 rounded-lg">Best seller</p>
        </div>
        <div class="hover:shadow-2xl rounded-2xl w-fit space-y-3 transition-all duration-150">
          <img src="../assets/python.png" alt="Course Picture" class="rounded-2xl w-full h-59 hover:outline-4 hover:outline-yellow-200">
          <h2 class="text-xl px-5 font-bold">Complete Python Course - For Beginners</h2>
          <p class="opacity-50 px-5">Master Evan. O Training</p>
          <div class="flex mx-5 space-x-1.5">
            <div class="flex">
              <p class="mr-2">5.0</p>
              <StarSolid v-for="rating in ratings" :key="rating" class="size-5 text-yellow-500"/>
            </div>
            <p class="opacity-50 font-semibold">(42,067)</p>
          </div>
          <p class="mx-5 space-x-2">
            <span class="text-xl font-bold">#16,500</span>
            <span class="line-through opacity-50">#17,500</span>
          </p>
          <p class="bg-gold opacity-80 text-black font- w-fit px-3 py-1 mb-5 ml-5 rounded-lg">Best seller</p>
        </div>
      </section>
      <button class="relative flex items-center cursor-pointer border-2 font-bold border-purple py-3 px-7 rounded-lg group hover:bg-purple hover:text-white transition duration-150">
        View All
        <ArrowRightOutline class="text-black size-7 ml-2 group-hover:text-white transition duration-150"/>
      </button>
    </section>
    <section class="mt-20 px-52">
      <h1 class="text-2xl font-bold mb-10">Explore MySkillHub</h1>
      <section class="grid grid-cols-4 gap-16">
        <p class="space-y-5 text-center font-semibold rounded-xl hover:shadow-2xl transition-all duration-150">
          <img src="../assets/design.png" alt="" class="h-59">
          <span>Design</span>
        </p>
        <p class="space-y-5 text-center font-semibold rounded-xl hover:shadow-2xl transition-all duration-150">
          <img src="../assets/development.png" alt="" class="h-59">
          <span>Development</span>
        </p>
        <p class="space-y-5 text-center font-semibold rounded-xl hover:shadow-2xl transition-all duration-150">
          <img src="../assets/marketing.png" alt="" class="h-59">
          <span>Marketing</span>
        </p>
        <p class="space-y-5 text-center font-semibold rounded-xl hover:shadow-2xl transition-all duration-150">
          <img src="../assets/it-software.png" alt="" class="h-59">
          <span>IT and Software</span>
        </p>
        <p class="space-y-5 text-center font-semibold rounded-xl hover:shadow-2xl transition-all duration-150">
          <img src="../assets/business.png" alt="" class="h-59">
          <span>Business</span>
        </p>
        <p class="space-y-5 text-center font-semibold rounded-xl hover:shadow-2xl transition-all duration-150">
          <img src="../assets/data-science.png" alt="" class="h-59">
          <span>Data Science</span>
        </p>
        <p class="space-y-5 text-center font-semibold rounded-xl hover:shadow-2xl transition-all duration-150">
          <img src="../assets/p-development.png" alt="" class="h-59">
          <span>Personal Development</span>
        </p>
        <p class="space-y-5 text-center font-semibold rounded-xl hover:shadow-2xl transition-all duration-150">
          <img src="../assets/management.png" alt="" class="h-59">
          <span>Management</span>
        </p>
      </section>
    </section>
    <section class="flex items-center justify-center space-x-20 my-32">
      <img src="../assets/instructor.png" alt="" class="bg-[#E2BC4C] rounded-2xl">
      <section class="w-1/3 space-y-10">
        <h1 class="text-4xl font-bold">Become an Instructor</h1>
        <p class="opacity-70">Experts worldwide share their knowledge with learners on MyskillHub.
          We empower you with the right tools to teach your passion and reach more people.
        </p>
        <button class="cursor-pointer bg-purple text-white py-3.5 px-10 rounded-lg mt-2 mr-8 hover:opacity-70">Start teaching today</button>
      </section>
    </section>
    <footer class="border-t-2 border-slate-300 border-dashed py-8 space-y-20">
      <div class="flex justify-evenly">
        <section class="w-1/5 space-y-3">
          <img src="../assets/skillhub.png" alt="" class="w-32">
          <p>From beginner to pro — start your journey today and prepare for the world ahead.</p>
          <p>Follow Us:</p>
          <section class="flex items-center space-x-3">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="#4C545C"/>
            </svg>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#4C545C"/>
            </svg>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="mt-1 cursor-pointer">
              <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" fill="#4C545C"/>
            </svg>
          </section>
        </section>
        <ul class="space-y-3">
          <li class="font-semibold">Quick link</li>
          <li class="opacity-70">Home</li>
          <li class="opacity-70">Services</li>
          <li class="opacity-70">About us</li>
          <li class="opacity-70">Contact us</li>
          <li class="opacity-70">Careers</li>
        </ul>
        <ul class="space-y-3">
          <li class="font-semibold">Resources</li>
          <li class="opacity-70">Blog</li>
          <li class="opacity-70">Help Center</li>
          <li class="opacity-70">Career resource</li>
          <li class="opacity-70">Student success story</li>
          <li class="opacity-70">Learning Path</li>
        </ul>
        <ul class="space-y-3">
          <li class="font-semibold">Legal & Access</li>
          <li class="opacity-70">Term of service</li>
          <li class="opacity-70">Privacy Policy</li>
          <li class="opacity-70">Cookie Policy</li>
          <li class="opacity-70">Site map</li>
        </ul>
      </div>
      <div class="flex items-center justify-evenly">
        <p class="opacity-70">2025 MyskillHub. All right reserved.</p>
        <section class="flex space-x-5">
          <img src="../assets/visa.png" alt="" class="h-10">
          <img src="../assets/mastercard.png" alt="" class="h-10">
          <img src="../assets/paypal.png" alt="" class="h-10">
          <img src="../assets/google-g.png" alt="" class="h-10">
        </section>
        <button class="flex items-center space-x-2 cursor-pointer border border-slate-300 rounded-full p-2 group">
          <GlobeAltOutline class="size-6 text-slate-500"/>
          <p class="font-semibold">English (US)</p>
          <ChevronDownOutline class="size-5 group-hover:rotate-180 group-focus:rotate-180 transition-transform ease-in-out duration-300" />
        </button>
        <button class="flex items-center space-x-2 cursor-pointer border border-slate-300 rounded-full py-2 px-5 group">
          <p class="font-semibold">Currency</p>
          <ChevronDownOutline class="size-5 group-hover:rotate-180 group-focus:rotate-180 transition-transform ease-in-out duration-300" />
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const ratings = [1, 2, 3, 4, 5]

  const showDesign = ref(false)

  const toggleDesign = () => {
    showDesign.value = !showDesign.value
  }
</script>
