<template>
    <div class="chat-container">
        <MessageHistory />
        <MessageForm />
    </div>
</template>

<script setup lang="ts">
import MessageHistory from './MessageHistory.vue'
import MessageForm from './MessageForm.vue'
</script>

<style lang="scss" scoped>
.chat-container {
    background-color: rgb(20, 20, 20);
    max-width: 100%;
    height: 95vh;
    max-height: 100%;
    margin: auto;
    padding: 2rem 3rem;
}
</style>
