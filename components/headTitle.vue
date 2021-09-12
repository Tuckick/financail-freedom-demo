<template>
    <div class="head-title-container">
        <img class="icon-title-container" src="@/assets/icons/icon-graph.png" alt="graph icon">
        <strong>{{title}}</strong>
    </div>
</template>

<script>
export default {
    name: 'HeadTitle',
    props: {
        title: {
            type: String,
            require: true,
            default: '',
        }
    }
}
</script>

<style>
    .head-title-container {
        align-self: center;
        display: flex;
        font-size: 30px;
        margin-bottom: 32px;
    }
</style>