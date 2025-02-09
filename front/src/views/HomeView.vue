<template>
  <!-- 전체  -->
  <div class ="card container text-center p-3 mt-5">
  <div class="row">
  <!-- 경매장 -->
    <div class="col-sm-9 d-flex">
      <div class="card flex-grow-1">
        <div class="card-body">
          <h5 class="card-title">경매장</h5>
          <p class="card-text">아비도스 융화 재료</p>
          <canvas ref="myChart"></canvas>
        </div>
      </div>
    </div>
    <div class="col-sm-3 d-flex flex-column ">
    <!-- 대표 캐릭터 -->
      <div class="card flex-grow-1 mb-2">
        <div class="card-body">
          <h5 class="card-title">대표 캐릭터</h5>
          <p class="card-text">로그인 후 대표 캐릭터 이미지 칸</p>
          <img src="https://placehold.co/200x200" class="object-fit-cover border rounded" alt="...">
        </div>
      </div>
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
// import { fetchExampleData } from '@/api'; //API 함수 가져오기
import { Chart, registerables } from 'chart.js'; // Chart.js와 registerables 가져오기

Chart.register(...registerables); // Chart.js에서 필요한 기능 등록

export default {
  name: 'HomeView',
  mounted() {
    this.createChart(); // 컴포넌트가 화면에 보일 때 차트 생성
  },
  methods: {
    // 차트 함수
    createChart() {
      const ctx = this.$refs.myChart.getContext('2d'); // canvas 요소 가져오기
      new Chart(ctx, {
        data: {
          labels: ['2025-02-04', '2025-02-05', '2025-02-06', '2025-02-07', '2025-02-08', '2025-02-09'],
          datasets: [
            {
              label: '판매 개수',
              data: [10928463, 14877872, 17227409, 15827057, 19122707, 17778198],
              borderWidth: 1,
              type:'bar',
              order: 1,
              yAxisID: 'y'

            },
            {
              label: '평균 거래가',
              data: [70.1, 70.6, 72.2, 72.7, 73.3, 72.9],
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
    }
  }
};
</script>
<style>
  
</style>