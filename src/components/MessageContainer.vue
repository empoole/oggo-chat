<template>
    <div class="message-container">
        <div class="message-meta">
            <span class="message-user">{{ message.user }}</span>
            <span class="message-timestamp">{{ new Date() }}</span>
        </div>
        <span class="message-content">{{ message.content }}</span>
    </div>
</template>

<script setup lang="ts">
import type { Message } from '../types/types'
defineProps<{
    message: Message
}>()
</script>

<style lang="scss" scoped>
.message-container {
    width: 100%;
    color: whitesmoke;
    padding: 0.25rem;
    border-bottom: 1px solid gray;
}
.message-meta {
    display: flex;
    justify-content: space-between;
}
.message-content {
    display: block;
}
.message-timestamp {
    font-size: 0.75rem;
    color: darkgray;
}
</style>
