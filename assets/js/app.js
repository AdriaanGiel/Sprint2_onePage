window.Vue = require('vue');


import oneSection from './components/one-section.vue';

new Vue({
    el:"#one-app",
    components:{oneSection},
    data:{
        mobileNav: false,
        frontLoader: true
    },
    mounted(){

    },
    methods:{
        onClickNav(){
            this.mobileNav = !this.mobileNav;
        },
        removeLoader(){
            this.frontLoader = false;
        }
    },
    created(){
        setTimeout(this.removeLoader,500);

    }
});