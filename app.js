const app = Vue.createApp({
    data(){
        return{
            firstname: 'Halim',
            lastname: 'Yusuf',
            email : 'yusufhalimu@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods:{
        async getuser(){
            var res = await fetch('https://randomuser.me/api')
            var {results} = await res.json()

            this.firstname = results[0].name.first,
            this.lastname = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')