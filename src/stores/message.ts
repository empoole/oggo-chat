import { defineStore } from 'pinia'
import type { Message } from '../types/types'

export const useMessageStore = defineStore('message', {
    state: () => ({
        messages: [
            { user: 1, content: 'Hello' },
            { user: 2, content: 'Hi!' },
            { user: 1, content: 'Test message!!!' }
        ]
    }),
    getters: {
        getMessages(state) {
            return state.messages
        }
    },
    actions: {
        addMessage({ user, content }: Message) {
            this.messages.push({ user, content })
        }
    }
})
