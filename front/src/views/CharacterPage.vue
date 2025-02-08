<template>
Character page
    <div style="display: flex; gap: 10px;">

        <!-- 1. 캐릭터 이미지 및 장비정보 -->
        <div style="display: flex; flex-direction: column; gap: 10px;">

            <!-- 1) 서버/닉네임/원대렙 -->
            <div style="display: flex; gap: 10px; border: 2px solid black;">
                <h3>실리안</h3>
                <h3>할미의막내공쥬</h3>
                <h3>Lv.213</h3>
            </div>

            <!-- 전투렙, 템렙, 엘릭서, 초월, 앜패수치(진화, 깨달음, 도약) -->
            <div style="display: flex; gap: 10px;">
                <div>Lv.70</div>
                <div>1670</div>
                <div>42(선각자 2단계)</div>
                <div>124개</div>
            </div>

            <!-- 앜패수치(진화, 깨달음, 도약) -->
            <div style="display: flex; gap: 10px;">
                <div style="border-radius: 20px; border: 2px solid yellow; padding: 5px 12px;">108</div>
                <div style="border-radius: 20px; border: 2px solid blue; padding: 5px 12px;">80</div>
                <div style="border-radius: 20px; border: 2px solid green; padding: 5px 12px;">40</div>
            </div>

            <div style="display: flex; gap: 10px;">
                <!-- 2) 캐릭터 이미지 -->
                <div>
                    <img :src="require('@/assets/캐릭터.jpg')" alt="샘플이미지">
                </div>

                <!-- 3) 장비 -->
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/투구.png')" alt="투구">
                    </div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/견갑.png')" alt="견갑">
                    </div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/상의.png')" alt="상의">
                    </div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/하의.png')" alt="하의">
                    </div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/장갑.png')" alt="장갑">
                    </div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/무기.png')" alt="무기">
                    </div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/앜패.png')" alt="앜패">
                    </div>
                </div>

                <!-- 4) 악세 -->
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/목걸이.png')" alt="목걸이">
                    </div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/귀걸이1.png')" alt="귀걸이1">
                    </div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/귀걸이2.png')" alt="귀걸이2">
                    </div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/반지1.png')" alt="반지1">
                    </div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/반지2.png')" alt="반지2">
                    </div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/팔찌.png')" alt="팔찌">
                    </div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/돌.png')" alt="돌">
                    </div>
                </div>
            </div>

            <!-- 5) 보석 -->
            <div style="display: flex; gap: 10px;">
                <div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/보석1.png')" alt="보석1">
                    </div>
                    <h5>Lv.5</h5>
                </div>
                <div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/보석2.png')" alt="보석1">
                    </div>
                    <h5>Lv.7</h5>
                </div>
                <div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/보석3.png')" alt="보석1">
                    </div>
                    <h5>Lv.5</h5>
                </div>
                <div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/보석4.png')" alt="보석1">
                    </div>
                    <h5>Lv.7</h5>
                </div>
                <div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/보석5.png')" alt="보석1">
                    </div>
                    <h5>Lv.6</h5>
                </div>
                <div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/보석6.png')" alt="보석1">
                    </div>
                    <h5>Lv.7</h5>
                </div>
                <div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/보석7.png')" alt="보석1">
                    </div>
                    <h5>Lv.6</h5>
                </div>
                <div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/보석8.png')" alt="보석1">
                    </div>
                    <h5>Lv.7</h5>
                </div>
                <div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/보석9.png')" alt="보석1">
                    </div>
                    <h5>Lv.7</h5>
                </div>
                <div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/보석10.png')" alt="보석1">
                    </div>
                    <h5>Lv.6</h5>
                </div>
                <div>
                    <div style="border: 2px solid black;">
                        <img :src="require('@/assets/보석11.png')" alt="보석1">
                    </div>
                    <h5>Lv.6</h5>
                </div>
            </div>
        </div> <!-- 1. 닫는태그 -->

        <!-- 2. 원정대 보유 캐릭터 -->
        <div>
            <table border="1">
                <thead>
                <tr>
                    <th>닉네임</th>
                    <th>전투렙</th>
                    <th>템렙</th>
                    <th>직업</th>
                    <th>서버</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(character, index) in characters" :key="index">
                    <td>{{ character.name }}</td>
                    <td>{{ character.level }}</td>
                    <td>{{ character.item }}</td>
                    <td>{{ character.job }}</td>
                    <td>{{ character.serve }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            characters: [
                { name: "이할미는아무거또몰라효", level: 70, item:"1670", job: "건슬링어", serve:"실리안" },
                { name: "실속파할미", level: 70, item:"1640", job: "기상술사", serve:"실리안" },
                { name: "단비는곰을찢어", level: 70, item:"1660", job: "도화가", serve:"실리안" },
            ]
        }
    },
}
</script>
<style>
    table {
    width: 100%;
    border-collapse: collapse;
    }

    th, td {
    padding: 8px;
    text-align: center;
    }

    th {
    background-color: #f4f4f4;
    }
</style>