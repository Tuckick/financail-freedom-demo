<template>
    <div class="why-us-container">
        <HeadTitle title="Why Us"/>
        <div class="why-us-section">
            <Card :items="whyUsList" />
        </div>
    </div>
</template>
<script>
import WhyUsList from '@/content/why-us-data.json'

export default {
    name: 'WhyUs',
    data() {
        return {
            whyUsList: WhyUsList
        }
    }
}
</script>
<style>
    .why-us-container {
        margin: 52px auto;
    }
    .why-us-detail {
        width: 300px;
        height: 300px;
        text-align: -webkit-center;
        padding: 8px;
    }
    .why-us-section {
        display: flex;
        justify-content: space-around;
    }
    .icon-title-container {
        height: 30px;
        padding-right: 8px;
    }
    .icon-why-us-detail-container {
        width: 150px;
        height: 150px;
        background-color: rgba(224,193,109,255);
        border-radius: 90px;
    }
    .icon-why-us-detail {
        width: 100px;
        height: 100px;
        margin-top: 24px;
    }
    .extension-why-us-detail {
        margin: 20px auto;
    }
    .title-detail {
        font-size: 20px;
        line-height: 2;
    }
</style>