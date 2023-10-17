<template>
    <form @submit="sendMessage">
        <input type="text" :value="text" @input="(event) => (text = event.target?.value)" />
        <button type="submit">Send</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMessageStore } from '../stores/message'

const text = ref('')

const store = useMessageStore()

const sendMessage = (e: Event) => {
    e.preventDefault()
    store.addMessage({ user: 1, content: text.value })
    text.value = ''
}
</script>

<style lang="scss" scoped>
form {
    width: 100%;
    margin-top: 2rem;
}
input {
    width: calc(100% - 4rem);
    padding: 0.75rem;
    border: none;
    background-color: rgb(47, 47, 48);
    color: whitesmoke;
}
button {
    width: 4rem;
    padding: 0.75rem;
    border: none;
}
</style>
