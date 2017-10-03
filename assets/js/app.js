window.Vue = require('vue');


import oneSection from './components/one-section.vue';

new Vue({
    el:"#one-app",
    components:{oneSection},
    data:{
        mobileNav: false,
        frontLoader: true,
        currentSection: ""
    },
    mounted(){

    },
    methods:{
        onClickNav(){
            this.mobileNav = !this.mobileNav;
        },
        removeLoader(){
            this.frontLoader = false;
        },
        handleScroll(){
            this.currentSection = $.scrollify.current().attr('section-name') || "";

        },
        getSection(name){
            if(this.currentSection.length){
                return this.currentSection.toString() == name.toString();
            }
            return false;
        },
        goToSection(index){

            $.scrollify.move(index);
        }
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
        setTimeout(this.removeLoader,500);
    },
    destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
}
});