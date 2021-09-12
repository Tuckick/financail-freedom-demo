<template>
    <div class="about-us-container">
        <HeadTitle title="About Us"/>
        <div class="about-us-detail-section">
            <h1>เราคือใคร ?</h1>
            <p>
                <strong>Wealth Partners Group</strong>เป็นหนึ่งในผู้นำในธุรกิจการวางแผนการเงินส่วนบุคคล ซึ่งการให้บริการของเราครอบคลุมถึงการออกแบบแผนการเงินเฉพาะบุคคล อันประกอบไปด้วยแผนเกษียณอายุ แผนการลงทุน แผนประกันชีวิต/ประกันสุขภาพ  แผนการศึกษาบุตร และแผนมรดก ปัจจุบันเราให้บริการมากกว่า 340 ครอบครัว ทั้งนี้เรายังมีส่วนร่วมสำคัญในการพลักดันบริการเพื่อสังคมต่างๆ มากมาย โดยผู้ให้คำแนะนำของเรามีใบอนุญาตตามกฎหมายในการเสนอผลิตภัณฑ์ทางการเงิน เช่น
            </p>
            <ul class="certificate-ul">
                <li><strong>ใบอนุญาตตัวแทนประกันชีวิต และนายหน้าวินาศภัย</strong> กรณีแนะนำประกันชีวิตหรือประกันสุขภาพ ซึ่งควบคุมโดยสำนักงานคณะกรรมการกำกับและส่งเสริมการประกอบธุรกิจประกันภัย (คปภ.)</li>
                <li><strong>ใบอนุญาตเป็นผู้แนะนำหรือผู้วางแผนการลงทุน (IP License)</strong> ในกรณีแนะนำกองทุนรวมประเภทต่างๆ ซึ่งควบคุมโดยสำนักงานคณะกรรมการกำกับหลักทรัพย์และตลาดหลักทรัพย์ (ก.ล.ต.)</li>
                <li><strong>คุณวุฒิวิชาชีพนักวางแผนการเงิน (CFP)</strong> กรณีแนะนำแนวทางการบริหารเงินส่วนบุคคล ซึ่งได้รับเมื่อผ่านการทดสอบของสมาคมนักวางแผนการเงินไทยเป็นการรับรองความสามารถของที่ปรึกษาการเงินในการให้บริการวางแผน</li>
            </ul>
            <div class='line'/>
        </div>
        <div class="about-us-detail-section">
            <h1>ความรับผิดชอบต่อสังคม</h1>
            <Card :items="socialList" />
            <div class='line'/>
        </div>
        <div class="about-us-detail-section">
            <h1>ค่านิยม</h1>
            <Card :items="socialValuesList" />
        </div>
    </div>
</template>
<script>
import SocialList from '@/content/for-social-data.json'
import SocialValuesList from '@/content/social-values-data.json'

export default {
    data() {
        return {
            socialList : SocialList,
            socialValuesList: SocialValuesList
        }
    },
}
</script>

<style>
    .about-us-container {
        padding: 36px 60px;
    }

    .about-us-detail-section {
        margin: 32px 60px;
        justify-content: center;
        text-align: center;
        text-align: -webkit-center;
    }

    .certificate-ul {
        color: #747474;
        justify-content:left;
        text-align: left;
        text-align: -webkit-left;
        margin-left: 32px;
    }

    .line {
        width: 300px;
        border: 2px solid #e0dede;
        margin: 36px auto 54px;
     }

    h1 {
        margin: 32px;
    }

    strong {
        color: black;
    }
</style>