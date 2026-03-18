<template>
    <div class="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-base-100">
        <!-- Navbar -->
        <nav class="navbar bg-base-100/90 backdrop-blur sticky top-0 z-50 border-b border-base-300">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <Icon name="heroicons:bars-3" class="w-6 h-6" />
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 gap-2">
                        <li><a href="/">Home</a></li>
                        <li><a href="#skits">Skits</a></li>
                        <li><a href="#music">Music</a></li>
                        <li><a href="#gaming">Gaming</a></li>
                        <li><a href="https://alternate-era.printify.me/" target="_blank" rel="noopener noreferrer">Store</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <NuxtLink to="/" class="btn btn-ghost px-2">
                    <img src="/alteralogotransparent.png" alt="Alt Era Logo" class="h-10 w-auto" />
                </NuxtLink>
            </div>
            <div class="navbar-end hidden lg:flex">
            <ul class="menu menu-horizontal px-1 gap-4 font-bold tracking-wide">
                    <li><a href="/" class="hover:text-primary transition-colors">Home</a></li>
                    <li><a href="#skits" class="hover:text-primary transition-colors">Skits</a></li>
                    <li><a href="#music" class="hover:text-secondary transition-colors">Music</a></li>
                    <li><a href="#gaming" class="hover:text-accent transition-colors">Gaming</a></li>
                    <li><a href="https://alternate-era.printify.me/" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">Store</a></li>
                    <li><a href="#contact" class="btn btn-primary btn-sm ml-4 shadow-[0_0_15px_var(--color-primary)]">Follow Us</a></li>
                </ul>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="flex-grow">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="footer p-10 bg-base-300 text-base-content border-t border-base-200 mt-0">
            <aside>
                <img src="/alteralogotransparent.png" alt="Alternate Era Logo" class="w-16 h-16 opacity-80" />
                <p>
                    <span class="font-bold text-lg">Alternate Era Entertainment</span>
                    <br />Refined Chaos Since 2018
                </p>
            </aside>
            <nav>
                <header class="footer-title">Socials</header>
                <div class="grid grid-flow-col gap-4">
                    <a href="https://youtube.com/@alternateeraofficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="hover:text-primary transition-colors"><Icon name="simple-icons:youtube" class="w-6 h-6" /></a>
                    <a href="https://tiktok.com/@alternateera" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="hover:text-accent transition-colors"><Icon name="simple-icons:tiktok" class="w-6 h-6" /></a>
                    <a href="https://instagram.com/alternateera" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="hover:text-secondary transition-colors"><Icon name="simple-icons:instagram" class="w-6 h-6" /></a>
                    <a href="https://twitch.tv/alternateera" target="_blank" rel="noopener noreferrer" aria-label="Twitch" class="hover:text-primary transition-colors"><Icon name="simple-icons:twitch" class="w-6 h-6" /></a>
                </div>
            </nav>
        </footer>
    </div>
</template>
