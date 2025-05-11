<template>
  <div class="navbar from-primary via-neutral to-primary bg-gradient-to-r shadow-lg">
    <div class="navbar-start flex space-x-4">
      <div class="dropdown dropdown-hover md:hidden">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </label>
        <ul tabindex="0" class="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <LazyNuxtLink to="/">Home</LazyNuxtLink>
          </li>
          <!-- <li><LazyNuxtLink to="/music">Music</LazyNuxtLink></li>
                    <li><LazyNuxtLink to="/videos">Videos</LazyNuxtLink></li> -->
          <li>
            <LazyNuxtLink to="/blog">Blog</LazyNuxtLink>
          </li>
          <li>
            <LazyNuxtLink to="/featuredartists">Featured Artists</LazyNuxtLink>
          </li>
          <!-- <li><LazyNuxtLink to="/epk">EPK</LazyNuxtLink></li> -->
        </ul>
      </div>
      <div class="hidden md:flex space-x-4">
        <LazyNuxtLink to="/" class="link link-hover">
          <h2 class="text-primary-content">Home</h2>
        </LazyNuxtLink>
        <!-- <LazyNuxtLink to="/music" class="link link-hover">
                    <h2 class="text-primary-content">Music</h2>
                </LazyNuxtLink>
                <LazyNuxtLink to="/videos" class="link link-hover">
                    <h2 class="text-primary-content">Videos</h2>
                </LazyNuxtLink> -->
        <LazyNuxtLink to="/blog" class="link link-hover">
          <h2 class="text-primary-content">Blog</h2>
        </LazyNuxtLink>
        <LazyNuxtLink to="/featuredartists" class="link link-hover">
          <h2 class="text-primary-content">Featured Artists</h2>
        </LazyNuxtLink>
        <LazyNuxtLink to="/epk" class="link link-hover">
          <h2 class="text-primary-content">EPK</h2>
        </LazyNuxtLink>
      </div>
    </div>
    <div class="navbar-center">
      <LazyNuxtLink to="/" class="flex items-center justify-center">
        <NuxtPicture width="120" height="60" format="webp" src="/alteralogotransparent.png"
          class="transition-transform duration-300 hover:scale-110" />
      </LazyNuxtLink>
    </div>
    <div class="navbar-end flex space-x-4">
      <LazyNuxtLink to="/#contact" class="link link-hover">
        <h2 class="text-primary-content">Contact</h2>
      </LazyNuxtLink>
    </div>
  </div>
</template>
