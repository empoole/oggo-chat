<template>
    <MessageContainer v-for="(message, index) in store.messages" :key="index" :message="message" />
</template>

<script setup lang="ts">
import MessageContainer from './MessageContainer.vue'
import { useMessageStore } from '../stores/message'

const store = useMessageStore()
</script>
