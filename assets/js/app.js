window.Vue = require('vue');


import oneSection from './components/one-section.vue';
import secSection from './components/sec-section.vue';
new Vue({
    el:"#one-app",
    components:{oneSection,secSection},
    data:{
        scrollPosition: 0
    },
    mounted(){

    },
    methods:{
        checkScrollDirection: function (newPosition) {
            return newPosition > this.scrollPosition;
        },
        handleScroll: function (e) {
            e.preventDefault();
            let test = this.checkScrollDirection(window.scrollY);

            this.scrollPosition = window.scrollY;
            console.log(test);

        }
    },
    created: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
    }
});