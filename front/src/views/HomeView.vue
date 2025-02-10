<template>
  <!-- 전체  -->
  <div class ="card container text-center p-3 mt-5">
  <div class="row">
  <!-- 경매장 -->
    <div class="col-sm-9 d-flex">
      <div class="card flex-grow-1">
        <div class="card-body">
          <h5 class="card-title">경매장</h5>
          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="btnradio1">강화 재료</label>
            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio2"></label>
            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
          </div>
          <canvas ref="myChart"></canvas>
        </div>
      </div>
    </div> 
    <!-- 경매장 닫기 -->

    <div class="col-sm-3 d-flex flex-column ">
    <!-- 대표 캐릭터 -->
      <div class="card flex-grow-1 mb-2">
        <div class="card-body">
          <h5 class="card-title">대표 캐릭터</h5>
          <p class="card-text">로그인 후 대표 캐릭터 이미지 칸</p>
          <img src="https://placehold.co/200x200" class="object-fit-cover border rounded" alt="...">
        </div>
      </div>
      <!-- 대표 캐릭터 닫기 -->

      <!-- 업데이트 내역 -->
      <div class="card flex-grow-1">
        <div class="card-body">
          <h5 class="card-title">업데이트 내역</h5>
            <ul class="list-group ">
              <li class="list-group-item list-group-item-action">기상술사 대폭상향 대박티비</li>
              <li class="list-group-item list-group-item-action">건슬링어 상향안</li>
              <li class="list-group-item list-group-item-action">모 기상 유저 에스더의 기운 득</li>
              <li class="list-group-item list-group-item-action">환수사 너프점</li>
              <li class="list-group-item list-group-item-action">보석 겁작 변환가능 ㄷㄷ</li>
            </ul>
        </div>
      </div>
      <!-- 업데이트 내역 닫기 -->

    </div>
  </div>
  <!-- 숙제현황표 -->
  <div class="row">
    <div class="col">
      <div class="card mt-2">
        <div class="card-body">
        <h5 class="card-title">숙제 현황(표)</h5>
        <div class="card-text row">
          <div class="row">
          <!-- 첫번째 캐릭 -->
            <img src="https://placehold.co/100x200" class="object-fit-cover border rounded col-sm-1">
            <div class="col-1">
              <ul class="list-group ">
                  <li class="list-group-item list-group-item-action">에기르</li>
                  <li class="list-group-item list-group-item-action">베히모스</li>
                  <li class="list-group-item list-group-item-action">에키드나</li>
              </ul>
            </div>
            <!-- 두번째 캐릭 -->
            <img src="https://placehold.co/100x200" class="object-fit-cover border rounded col-sm-1">
            <div class="col-1">
              <ul class="list-group ">
                  <li class="list-group-item list-group-item-action">에기르</li>
                  <li class="list-group-item list-group-item-action">베히모스</li>
                  <li class="list-group-item list-group-item-action">에키드나</li>
              </ul>
            </div>
            <!-- 세번째 캐릭 -->
            <img src="https://placehold.co/100x200" class="object-fit-cover border rounded col-sm-1">
            <div class="col-1">
              <ul class="list-group ">
                  <li class="list-group-item list-group-item-action">에기르</li>
                  <li class="list-group-item list-group-item-action">베히모스</li>
                  <li class="list-group-item list-group-item-action">에키드나</li>
              </ul>
            </div>
            <!-- 네번째 캐릭 -->
            <img src="https://placehold.co/100x200" class="object-fit-cover border rounded col-sm-1">
            <div class="col-1">
              <ul class="list-group ">
                  <li class="list-group-item list-group-item-action">에기르</li>
                  <li class="list-group-item list-group-item-action">베히모스</li>
                  <li class="list-group-item list-group-item-action">에키드나</li>
              </ul>
            </div>
            <!-- 다섯번째 캐릭 -->
            <img src="https://placehold.co/100x200" class="object-fit-cover border rounded col-sm-1">
            <div class="col-1">
              <ul class="list-group ">
                  <li class="list-group-item list-group-item-action">에기르</li>
                  <li class="list-group-item list-group-item-action">베히모스</li>
                  <li class="list-group-item list-group-item-action">에키드나</li>
              </ul>
            </div>
          <!-- 여섯번째 캐릭 -->
          <img src="https://placehold.co/100x200" class="object-fit-cover border rounded col-sm-1">
            <div class="col-1">
              <ul class="list-group ">
                  <li class="list-group-item list-group-item-action">에기르</li>
                  <li class="list-group-item list-group-item-action">베히모스</li>
                  <li class="list-group-item list-group-item-action">에키드나</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { fetchExampleData } from '@/api'; //API 함수 가져오기
import { Chart, registerables } from 'chart.js'; // Chart.js와 registerables 가져오기

Chart.register(...registerables); // Chart.js에서 필요한 기능 등록

export default {
  name: 'HomeView',
  data() {
    return {
      data: null, // API 응답 데이터를 저장
      error: null, // 에러 메시지 저장
      loading: true, // 로딩 상태 관리
    };
  },
  mounted() {
    this.fetchData(); // 컴포넌트가 마운트되면 데이터 가져오기
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true; // 로딩 시작
        const response = await fetchExampleData(); // API 호출
        const stats = response.data[0].Stats;
        const labels = stats
          .map((item) => item.Date) // 날짜 가져오기
          .map((dateString) => new Date(dateString)) // 문자열을 Date 객체로 변환
          .sort((a, b) => a - b) // 날짜 순으로 정렬
          .map((date) => date.toISOString().split('T')[0]); // ISO 포맷으로 다시 변환 (YYYY-MM-DD)
        const tradeCounts = stats.map((item) => item.TradeCount); // 판매 개수
        const avgPrices = stats.map((item) => item.AvgPrice); // 평균 거래가
        this.createChart(labels,tradeCounts,avgPrices);
        this.data = response.data; // 데이터 저장
      } catch (err) {
        this.error = err.message; // 에러 메시지 저장
      } finally {
        this.loading = false; // 로딩 종료
      }
    },
    // 차트 함수
    createChart(labels,tradeCounts,avgPrices) {
      const ctx = this.$refs.myChart.getContext('2d'); // canvas 요소 가져오기
      console.log(labels);
      console.log(tradeCounts);
      console.log(avgPrices);
      new Chart(ctx, {
        data: {
          labels: labels,
          datasets: [
            {
              label: '판매 개수',
              data: tradeCounts,
              borderWidth: 1,
              type:'bar',
              order: 1,
              yAxisID: 'y'

            },
            {
              label: '평균 거래가',
              data:avgPrices,
              borderWidth: 1,
              type:'line',
              order: 0,
              yAxisID: 'y1'
            },
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              position:'left'
            },
            y1:{
              beginAtZero: true,
              position:'right',
              grid:{
                drawOnChartArea:false,
              },
            }
          }
        }
      });
    },
  }
};
</script>
<style>
  
</style>