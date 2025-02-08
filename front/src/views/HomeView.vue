<template>
  <div class ="card container text-center p-3 mt-5">
  <div class="row">
    <div class="col-sm-9 d-flex">
      <div class="card flex-grow-1">
        <div class="card-body">
          <h5 class="card-title">경매장</h5>
          <p class="card-text"></p>
          <img src="https://placehold.co/800x500" class="object-fit-none border rounded " alt="...">
        </div>
      </div>
    </div>
    <div class="col-sm-3 d-flex flex-column ">
      <div class="card flex-grow-1 mb-2">
        <div class="card-body">
          <h5 class="card-title">대표 캐릭터</h5>
          <p class="card-text">로그인 후 대표 캐릭터 이미지 칸</p>
          <img src="https://placehold.co/200x200" class="object-fit-cover border rounded" alt="...">
        </div>
      </div>
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
  <div class="row">
    <div class="col">
      <div class="card mt-2">
        <div class="card-body">
        <h5 class="card-title">숙제 현황(표)</h5>
        <p class="card-text">캐릭터별 상위레이드 표시 및 클리어 여부 표시</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { fetchExampleData } from '@/api'; //API 함수 가져오기

export default {
  data(){
    return{
      apiData: null, // API 응답 데이터를 저장할 변수
      isLoading: true, // 로딩 상태 관리
      errorMessage: null, // 에러 메시지 관리
    };
  },
  methods: {
    async loadApiData() {
      this.isLoading = true; // 로딩 시작
      this.errorMessage = null; // 이전 에러 초기화
      try {
        const response = await fetchExampleData(); // API 호출
        this.apiData = response.data; // 응답 데이터 저장
      } catch (error) {
        console.error("API 호출 실패:", error);
        this.errorMessage = error.response?.data?.message || "API 호출 중 오류가 발생했습니다.";
      } finally {
        this.isLoading = false; // 로딩 종료
      }
    },
  },
  mounted() {
    this.loadApiData(); // 컴포넌트가 로드되면 API 호출
  },
};
</script>
<style>
  
</style>