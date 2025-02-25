import axios from "axios";

// Axios 인스턴스 생성
const apiClient = axios.create({
    baseURL: "https://developer-lostark.game.onstove.com", // API 기본 URL
    headers:{
        accept: "application/json", // 모든 요청에 공통적으로 포함되는 헤더
        authorization: "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA1NzIyNjAifQ.R-df33jIHFvK0obAgn9WyW0r6OXEkXn_QrRznzTXQd3DaWs0Jj411tHPLwcNoHe-fXDypEnU2QENCnnO7b1yDapTfln-WiOdTcrU89W-sZkk_LlpMMTrmh9_HDIF-dX0UAsQ9-14PZU-hiYePAsWinotIPKW2vG82TSPv5gM_c39J-fA4fWhapLbHoN18stMsU2TaAn3knL1efuf7-1-lXivAwOQmC2TOE6piKzoVlprdLGhIr4F8LcJDBJv_5UESqYezfx1578mBDr-1dkx_vvCSaTo648Hl7_o3thJhpndvig4h9locI0zco2JfvNJmkpvkYfZAa70w6frQkDgWQ", // 토큰 포함
    },
});

// 카테고리 기본데이터 설정
const defaultPostData = {
  Sort: "GRADE",
  CategoryCode: 50000,
  CharacterClass: "",
  ItemTier: 4,
  ItemGrade: "",
  ItemName: "",
  PageNo: 0,
  SortCondition: "ASC",
};

// 특정 API 호출 함수
export const fetchExampleData = (itemId) => {
    return apiClient.get(`/markets/items/${itemId}`); // API 경로를 추가
  };

export const fetchExampleData2 = (overrides = {}) => {
  // 기본 데이터와 사용자 데이터 병합
  const requestData = {...defaultPostData, ...overrides};
  return apiClient.post(`/markets/items`,requestData); // API 경로를 추가
};


export default {
  fetchExampleData,
  fetchExampleData2,
};