<template>
    <h1> Feed Page</h1>
    <h3> This page is for logged in users only </h3>
</template>

<script setup>
import { getAuth,onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { onBeforeUnmount } from 'vue'

const router = useRouter()
const authListener = onAuthStateChanged(getAuth(),function(user) {
    if (!user) { // not logged in
        alert('you must be logged in to view this. redirecting to the register page')
        router.push('/register')
    }
});

onBeforeUnmount(() => {
    // clear up listener
    authListener()
})
  
</script>