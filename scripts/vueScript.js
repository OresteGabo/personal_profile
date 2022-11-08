const app=Vue.createApp({
    data(){
        return {
            message:'This is a message datad',
            temperature:14.2,
            family_name:'Muhirwa Gabo',
            surname:'Oreste',
            email:'muhirwa.g.oreste@gmail.com',
            tel:'+33769097991',
            linkedin_profile_link:'https://www.linkedin.com/in/orestemg/',
            github_profile_link:'https://github.com/OresteGabo',
            codepen_profile_link:'https://codepen.io/MuhirwaGaboOreste',
            instagram_profile_link:'https://www.instagram.com/gabo.portraits/'
        };
    }
});
const vm=app.mount('#app');