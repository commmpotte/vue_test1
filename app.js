const App = {
    data() {
        return {
            placeholderString: 'Put your note here',
            title: 'Notes',
            inputValue: '',
            notes: ['Note 1', 'Note 123']
        }
    },
    methods: {
        // inputChangeHandler(event) {
        //     // console.log("inputChangeHandler", event.target.value);
        //     this.inputValue = event.target.value
        // },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        // inputKeyPress(event) {
        //     if (event.key === 'Enter') {
        //         this.addNewNote()
        //     }
        // },
        deleteItem(idx) {
            this.notes.splice(idx, 1)
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        // doubleCount() {
        //     return this.notes.length * 2
        // }
    },
    // Вычисляемые свойства
    computed: {
        doubleCountComputed() {
            // console.log('doubleCountComputed')
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 30) {
                this.inputValue = ''
            }
            // console.log('inputValue changed', value);
        }
    }
}

const app = Vue.createApp(App)
app.mount('#app')