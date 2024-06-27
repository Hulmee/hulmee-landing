<template>
  <main class="flex flex-col h-dvh">

    <div class="m-auto flex flex-col items-center justify-center px-4 bg-background p-5">
      <div class=" max-w-md w-full space-y-6">
        <Profile />
        <Links />
        <PostList />
      </div>
    </div>
  </main>
</template>

<script setup>

useSeoMeta({

  ogTitle: 'Ellery Hulme\'s Links',
  ogDescription: 'Discover Ellery Hulme\'s professional journey, connect on LinkedIn, read the blog, explore GitHub projects, and more.',
  icon: 'https://hulmee.net/avatar.png',
  ogImage: 'https://hulmee.net/avatar-600.png',
  lang: 'en',
  twitterTitle: 'Ellery Hulme\'s Links',
  twitterDescription: 'Discover Ellery Hulme\'s professional journey, connect on LinkedIn, read the blog, explore GitHub projects, and more.',
  twitterImage: 'https://hulmee.net/avatar-600.png',
  twitterCard: 'summary',
  keywords: 'Ellery Hulme, LinkedIn, Blog, GitHub, Projects, Featured Posts, Portfolio',
  author: 'Ellery Hulme',
  robots: 'index, follow',
})
</script>