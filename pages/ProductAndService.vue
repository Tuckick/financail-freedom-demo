<template>
    <div class="product-service-container">
        <HeadTitle title="Product & Service"/>
        <div class="for-what-container">
            <div class="for-who-content-section">
                <ul> <h1 class="head-title">{{forWho.title}}</h1>
                    <li 
                        v-for="i in forWho.desc"
                        :key="i"
                    >
                        <p>{{i}}</p>
                    </li>
                </ul>
            </div>
            <div class="price-rate-content-section">
                <ul> <h1 class="head-title">{{priceRate.title}}</h1>
                    <li 
                        v-for="i in priceRate.desc"
                        :key="i"
                    >
                        <p>{{i}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class='line'/>
        <div class="can-i-help-container">
            <h1>เราช่วยคุณได้อย่างไร?</h1>
            <div class="plan-menu-container">
                <b-tabs content-class="mt-3" justified>
                    <b-tab title="การวางแผนการศึกษาบุตร" active>
                        <img class="img-plan-menu-container" src="@/assets/image/productsAndServices/1.png">
                    </b-tab>
                    <b-tab title="การวางแผนประกันภัย">
                        <img class="img-plan-menu-container" src="@/assets/image/productsAndServices/2.png">
                    </b-tab>
                    <b-tab title="การวางแผนภาษี">
                        <img class="img-plan-menu-container" src="@/assets/image/productsAndServices/3.png">
                    </b-tab>
                    <b-tab title="การวางแผนการส่งต่อมรดก">
                        <img class="img-plan-menu-container" src="@/assets/image/productsAndServices/4.png">
                    </b-tab>
                    <b-tab title="การวางแผนเกษียณอายุ">
                        <img class="img-plan-menu-container" src="@/assets/image/productsAndServices/5.png">
                    </b-tab>
                    <b-tab title="การวางแผนการลงทุน">
                        <img class="img-plan-menu-container" src="@/assets/image/productsAndServices/6.png">
                    </b-tab>

                </b-tabs>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            forWho: {
                "title": "บริการนี้เหมาะกับใคร?",
                "desc": [
                    "คนที่ต้องการเริ่มต้นวางแผนชีวิตอย่างถูกต้อง",
                    "ไม่จำกัดอายุ ระดับการศึกษา",
                    "ไม่จำกัดเงินเรื่องรายได้ หรือเงินเริ่มต้นลงทุน",
                    "ยินดีเปิดเผยข้อมูลการเงินส่วนตัวได้"
                ]
            },
            priceRate: {
                "title": "คิดค่าบริการอย่างไร?",
                "desc": [
                    "ค่าที่ปรึกษาครั้งแรก: ไม่มี",
                    "ค่าใช้จ่ายในการวางแผน: ขึ้นอยู่กับความยากง่ายของแผนการเงิน (ค่าบริการจะแจ้งก่อนเริ่มวางแผนจริง)",
                    "ท่านไม่มีข้อผูกมัดในการรับบริการจากเรา การตัดสินใจของท่านขึ้นอยู่กับความพึงพอใจในคำแนะนำเบื้องต้นของเรา"
                ]
            }
        }
    }
}
</script>
<style>
    .product-service-container {
        padding: 36px 60px;
    }
    .for-what-container {
        display: flex;
        justify-content: center;
    }
    .for-who-content-section {
        max-width: 40%;
        padding: 16px;
    }
    .price-rate-content-section {
        max-width: 40%;
        padding: 16px;
    }
    ul {
        padding-left: 16px;
    }
    .head-title {
        margin-left: 16px;
    }
    .line {
        width: 300px;
        border: 2px solid #e0dede;
        margin: 36px auto 54px;
     }
     .can-i-help-container {
         justify-content: center;
         text-align: center;
     }
     .img-plan-menu-container {
         width: 50%;
     }
     .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
        color: rgba(248,211,101,255);
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
     }
    .nav-link {
        color: rgba(41,44,52,255);
     }
     .nav-item:hover {
        background-color: transparent ;
    }
     /* .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
     } */

</style>