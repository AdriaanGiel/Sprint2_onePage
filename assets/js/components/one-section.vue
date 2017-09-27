<template>
    <div :id="getSectionId" :class="getCustomClass">
        <div class="container" :class="getDirection">
            <div class="icon flex flex-center" :style="getBackgroundImage">
                <slot name="sectionicon"></slot>
            </div>

            <div class="content flex flex-center">
                <slot name="sectioncontent"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['sectionId','customClass','sectionDirection','image'],
        computed:{
            getBackgroundImage(){
              return "background: url('" + this.image + "'); no-repeat center center; background-size: cover;";
            },
            getSectionId(){
                return "section" + this.sectionId;
            },
            getCustomClass(){
                return this.customClass + " flex flex-center";
            },
            getDirection(){
              if(this.sectionDirection){
                  return "flex flex-center flex-left";
              }
              return "flex flex-center flex-right";
            }
        }
    }
</script>
