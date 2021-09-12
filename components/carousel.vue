<template>
    <div>
        <slider animation="normal" height="440px" interval="4000">
            <slider-item
                v-for= "i in posterlist"
                :key= "i.img"
            >
                <img 
                    :src="require(`../assets/image/${i.img}`)" 
                    :alt="img"
                    class="img-slide-item"
                >
            </slider-item>
        </slider>
    </div>
</template>
<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
    components: {
        Slider,
    SliderItem,
    },
    data() {
    return {
      posterlist: [
        { img: 'poster-001.jpg'},
        { img: 'poster-002.jpg'},
        { img: 'poster-003.jpg'},
        { img: 'poster-004.jpg'},
      ],
    }
  },
}
</script>
<style>
    .img-slide-item {
        height: inherit;
        width: inherit;
    }
</style>