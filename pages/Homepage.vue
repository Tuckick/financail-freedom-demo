<template lang="">
    <div class="home-page-container">
        <Carousel />
        <div class="home-page-content-container">
            <div class='home-page-title'>
                <h1 class='head-title'>เราให้บริการสร้างสรรค์ และออกแบบแผนการเงินที่ตอบโจทย์ “เป้าหมายและความต้องการ” ที่แตกต่างของผู้รับคำปรึกษา โดยนักวางแผนการเงิน CFP</h1>
                <p>การวางแผนการเงิน คือการวางแผนเพื่อบรรลุเป้าหมายในเรื่องต่างๆ ที่แต่ละคนตั้งใจไว้ โดยอาศัยปัจจัยคือเรื่องเงินทองเข้ามาเป็นส่วนประกอบ จริงๆแล้วเรื่องการวางแผนการเงินมีมานาน แล้วในประเทศไทยไม่ว่าจะเป็นการลงทุนในหุ้น กองทุนรวม หรือการซื้อประกันชีวิตและประกันสุขภาพ</p>
                <p>แต่คำถามก็คือว่าการวางแผนนั้นเหมาะกับเป้าหมายที่เราตั้งใจไว้แล้วหรือยัง เวลธ์ พาร์เนอร์ กรุ๊ป ให้บริการออกแบบแผนการเงินที่ตอบโจทย์เป้าหมายและความต้องการที่แตกต่างของลูกค้า โดยนักวางแผนการเงิน CFP มากประสบการณ์</p>
            </div>
            <WhyUs />
            <ProductsAndServicesHome />
        </div>
    </div>
</template>
<script>
import Carousel from '../components/carousel.vue'
import WhyUs from '../components/whyUs.vue'
import ProductsAndServicesHome from '../components/productAndServiceHome.vue'

export default {
    name: "Homepage",
    components: {
        Carousel,
        WhyUs,
        ProductsAndServicesHome,
    },
}
</script>
<style>
    .home-page-container {
        justify-content: center;
        text-align: center;
        text-align: -webkit-center;
    }
    .home-page-title {
        margin: 36px auto;
    }
    p {
        text-align:left;
        color: #747474;
    }
    .head-title {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 24px;
    }
    .home-page-content-container {
        width: 65%;
    }
</style>