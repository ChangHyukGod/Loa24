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
              <label class="btn btn-outline-primary" for="btnradio1" @click="handleCategoryChange('T4_재련재료')">T4 재련 재료</label>
              <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
              <label class="btn btn-outline-primary" for="btnradio2" @click="handleCategoryChange('유물각인서')">유물 각인서</label>
              <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
              <label class="btn btn-outline-primary" for="btnradio3">보석</label>
            </div>
            <div class="row mt-4">
              <div class="col-4">
                <div class="list-group" id="list-tab" role="tablist">
                  <a v-for="(item, index) in items" :key="item.code" class="list-group-item list-group-item-action" 
                     :class="{'bg-white': index % 2 === 0, 'bg-light': index % 2 !== 0}"
                     :id="'list-' + item.Id + '-list'" data-bs-toggle="modal"
                     :data-bs-target="'#modal-' + item.Id" role="button"
                     :aria-controls="'list-' + item.Id" @click="fetchData(item)">
                    {{ item.Name }}
                  </a>
                </div>
              </div>
              <div v-for="item in items" :key="'modal-' + item.Id" class="modal fade" :id="'modal-' + item.Id" tabindex="-1" :aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">{{ item.Name }}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <canvas :ref="'myChart-' + item.Id"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  <!-- 숙제현황표 닫기 -->
</div>
</template>
<script>
import api from '@/api'; //API 함수 가져오기
import { Chart, registerables } from 'chart.js'; // Chart.js와 registerables 가져오기


Chart.register(...registerables); // Chart.js에서 필요한 기능 등록

export default {
  name: 'HomeView',
  data() {
    return {
      data: null, // API 응답 데이터를 저장
      error: null, // 에러 메시지 저장

      // 카테고리 별 초기 데이터
      selectedCategory: 0, // 카테고리 초기값
      selectedItemTier: null, // 아이템 티어 초기값
      selectedItemGrade:"", // 아이템등급 초기화 값
      datanum: 0,

      items:[],
      totalCount: 0, // 전체 아이템 개수
      page:1,
      charts: {},
    };
  },
  methods: {
    // 카테고리 별 데이터 초기화
    handleCategoryChange(type) {
      // 공통 처리 로직
      switch (type) {
        case "T4_재련재료":
          this.selectedCategory = "50000";
          this.selectedItemTier = 4;
          this.selectedItemGrade = "";
          // console.log("T4 Materials selected:", this.selectedCategory, this.selectedItemTier); // 디버깅
          this.datanum = 0;
          this.items = []; // 함수를 실행시킨 뒤 items 초기화
          break;

        case "유물각인서":
          this.selectedCategory = "40000";
          this.selectedItemTier = null;
          this.selectedItemGrade = "유물";
          // console.log("Engravings selected:", this.selectedCategory, this.selectedItemGrade); // 디버깅
          this.datanum = 1;
          this.items = []; // 함수를 실행시킨 뒤 items 초기화
          break;

        default:
          console.error("Unknown category type:", type);
      }
      this.sendCategory(); // 데이터 초기화 후 아이템 호출
    },
    // 카테고리별 아이템 불러오기
    async sendCategory() {
      try {
        let hasMoreData = true;
        let currentPage = this.page;
        
        while (hasMoreData) {
          // API 호출 시 page 번호와 함께 요청
          const response = await api.fetchExampleData2({
            CategoryCode: this.selectedCategory,
            ItemTier: this.selectedItemTier,
            ItemGrade: this.selectedItemGrade,
            pageNo: currentPage,
          });

          this.items.push(...response.data.Items); // 기존 아이템 배열에 새로 받은 아이템 추가
          
          // 전체 아이템 개수를 업데이트
          this.totalCount = response.data.TotalCount;

          // 데이터 개수(10개)보다 더 많은 데이터가 있는지 확인
          hasMoreData = this.items.length < this.totalCount;

          // 페이지 번호 증가
          currentPage++;
        }
        console.log(this.items);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
      }
    },
    // 아이템 시세 확인
    async fetchData(item) {
      try {
        const response = await api.fetchExampleData(item.Id);
        const stats = response.data[this.datanum].Stats;
        const labels = stats.map((item) => new Date(item.Date).toISOString().split('T')[0]);
        const tradeCounts = stats.map((item) => item.TradeCount);
        const avgPrices = stats.map((item) => item.AvgPrice);
        
        this.createChart(item.Id, labels, tradeCounts, avgPrices);
        
        this.data = response.data;
      } catch (err) {
        this.error = err.message;
      }
    },
    // 차트 설정
    createChart(id, labels, tradeCounts, avgPrices) {
      const canvas = this.$refs[`myChart-${id}`];
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      if (this.charts[id]) {
        this.charts[id].data.labels = labels;
        this.charts[id].data.datasets[0].data = tradeCounts;
        this.charts[id].data.datasets[1].data = avgPrices;
        this.charts[id].update();
      } else {
        this.charts[id] = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              { label: '판매 개수', data: tradeCounts, type: 'bar', yAxisID: 'y' },
              { label: '평균 거래가', data: avgPrices, type: 'line', yAxisID: 'y1' },
            ],
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              y: { beginAtZero: true, position: 'left' },
              y1: { beginAtZero: true, position: 'right', grid: { drawOnChartArea: false } },
            },
          },
        });
      }
    },
  },
  mounted() {
    this.fetchData(); // 컴포넌트가 마운트되면 데이터 가져오기
  },
};
</script>
<style>
  
</style>