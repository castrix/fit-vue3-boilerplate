<template>
  <router-view></router-view>
</template>

<route lang="yaml">
meta:
  isAuth: true
  role: ['admin', 'tes', 'user']
</route>
