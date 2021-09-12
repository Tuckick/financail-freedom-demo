<template>
    <div>
        <HeadTitle title="Produsts and Service"/>
            <img 
                class="img-products-and-services"
                src="@/assets/image/productsAndServices/retire.jpg"
            />
            <img 
                class="img-products-and-services"
                src="@/assets/image/productsAndServices/tax.jpg"
            />
            <img 
                class="img-products-and-services"
                src="@/assets/image/productsAndServices/education.jpg"
            />
            <img 
                class="img-products-and-services"
                src="@/assets/image/productsAndServices/money-plan.jpg"
            />
            <img 
                class="img-products-and-services"
                src="@/assets/image/productsAndServices/estate-planing.jpg"
            />
            <img 
                class="img-products-and-services"
                src="@/assets/image/productsAndServices/insturance.jpg"
            />
    </div>
</template>
<script>
export default {
    name: 'ProductsAndServicesHome',
    data() {
        return {
            productsAndServiceList: [
                { img: 'retire.jpg'},
                { img: 'tax.jpg'},
                { img: 'insurance.jpg'},
                { img: 'education.jpg'},
                { img: 'money-plan.jpg'},
                { img: 'estate-planing.jpg'},
            ],
        }
    }
}
</script>
<style>
    .img-products-and-services {
        width: 160%;
        height: 260px;
        margin-left: -30%;
    }
</style>