<template>
<div class="card-section">
    <div 
        v-for="i in items"
        :key="i.title"
        class="card-detail"

    >
        <div class="icon-card-container">
            <img 
                class="icon-why-us-detail" 
                :src="require(`../assets/icons/${i.img}`)" 
                :alt="img"
            >
        </div>
        <div class="extension-card-detail">
            <strong class="title-detail">{{i.title}}</strong>
            <p class="desc-detail">{{i.desc}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        items: {
            type: Array,
            require: true,
            default: () => [],
        }
    },
}
</script>

<style>
    .card-section {
        display: flex;
        justify-content: space-around;
    }
    .card-detail {
        width: 300px;
        text-align: -webkit-center;
        padding: 8px;
    }
    .icon-card-container {
        width: 150px;
        height: 150px;
        background-color: rgba(224,193,109,255);
        border-radius: 90px;
    }
    .extension-card-detail {
        margin: 20px auto;
    }
    .title-detail {
        font-size: 20px;
        line-height: 2;
    }
</style>