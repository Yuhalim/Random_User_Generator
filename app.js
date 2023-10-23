const app = Vue.createApp({
    data(){
        return{
            title: 'Mr',
            firstname: 'Halim',
            lastname: 'Yusuf',
            email : 'yusufhalimu@gmail.com',
            age: '22',
            country: 'Nigeria',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods:{
        async getuser(){
            var res = await fetch('https://randomuser.me/api')
            var {results} = await res.json()
            this.title = results[0].name.title,
            this.firstname = results[0].name.first,
            this.lastname = results[0].name.last,
            this.email = results[0].email,
            this.age = results[0].dob.age,
            this.country = results[0].location.country,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')
