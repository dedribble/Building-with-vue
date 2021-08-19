const app = Vue.createApp({
    data() {
        return {
            books: [
                {title: 'Harry Potter', author: ' Adedamola Samuel', img: './assets/pic2.jpg', isFav: true},
                {title: 'Money++, learn to how to make $', author: ' Adedamola Samuel', img: './assets/pic2.jpg', isFav: false},
                {title: 'Black Lives Matter', author: ' Adedamola Samuel', img: './assets/pic2.jpg', isFav: true}
            ]
        }
    },
    methods: {
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    }
})

app.mount('#app')