"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Map() {
  useEffect(() => {
    // 네이버 지도 스크립트 로드
    const loadNaverMap = () => {
      const script = document.createElement("script");
      script.src =
        "https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=4h549yr3fc";
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    // 네이버 지도 초기화 함수
    function initMap() {
      try {
        // 지도 컨테이너 사이즈 확인
        const mapContainer = document.getElementById("map");
        const containerWidth = mapContainer.clientWidth;
        
        // 상위 컨테이너 스타일 강제 적용
        const mapWrapper = document.querySelector('.map-container');
        if (mapWrapper) {
          mapWrapper.style.overflow = 'hidden';
          mapWrapper.style.maxWidth = '100%';
          mapWrapper.style.width = '100%';
          mapWrapper.style.position = 'relative';
          mapWrapper.style.minHeight = '600px';
        }
        
        // 맵 요소 스타일 강제 적용
        mapContainer.style.width = '100%';
        mapContainer.style.maxWidth = '100%';
        mapContainer.style.height = '100%';
        mapContainer.style.minHeight = '580px';
        mapContainer.style.position = 'relative';
        mapContainer.style.overflow = 'hidden';
        mapContainer.style.borderRadius = '10px';
        
        const mapOptions = {
          center: new window.naver.maps.LatLng(35.1678376, 129.115742),
          zoom: 17,
          zoomControl: false,
        };

        const map = new window.naver.maps.Map("map", mapOptions);
        
        // 지도 생성 후 스타일 재적용
        setTimeout(() => {
          const mapDiv = document.getElementById('map');
          const mapElements = mapDiv.querySelectorAll('div');
          
          // 모든 하위 요소에 스타일 적용
          mapElements.forEach(el => {
            el.style.width = '100%';
            el.style.maxWidth = '100%';
          });
          
          // 캔버스 요소에도 스타일 적용
          const canvasElements = mapDiv.querySelectorAll('canvas');
          canvasElements.forEach(canvas => {
            canvas.style.maxWidth = '100%';
          });
          
          // 클래스로 네이버 지도 요소 선택해서 스타일 적용
          const naverElements = document.querySelectorAll('.naver-map, .nmap');
          naverElements.forEach(el => {
            el.style.width = '100%';
            el.style.maxWidth = '100%';
            el.style.height = '100%';
            el.style.minHeight = '580px';
            el.style.overflow = 'hidden';
          });
        }, 100);

        const marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(35.1678376, 129.115742),
          map: map,
        });

        const contentString = [
          '<div style="padding: 10px 12px; font-family: &quot;Noto Sans KR&quot;, sans-serif; background: white; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px; width: 210px; max-width: 210px;">',
          '   <h3 style="margin-bottom:6px; color: #4A6CF7; font-weight: 700; font-size: 14px; border-bottom: 1px solid #eee; padding-bottom: 6px;">강남제신경과</h3>',
          "   <p style='line-height: 1.4; font-size: 12px; color: #555; margin: 0;'>부산시 수영구 수영로 697<br/>",
          "   홍인빌딩 5층<br/>",
          "   Tel: 051-759-7676</p>",
          "</div>",
        ].join("");

        const infowindow = new window.naver.maps.InfoWindow({
          content: contentString,
          maxWidth: 210,
          backgroundColor: "transparent",
          borderColor: "transparent",
          borderWidth: 0,
          disableAnchor: true,
          pixelOffset: new window.naver.maps.Point(0, -5)
        });

        window.naver.maps.Event.addListener(marker, "click", function (e) {
          if (infowindow.getMap()) {
            infowindow.close();
          } else {
            infowindow.open(map, marker);
          }
        });

        // 초기에 정보창 표시
        infowindow.open(map, marker);
      } catch (e) {
        console.error("네이버 지도 API 로드 중 오류 발생:", e);
      }
    }

    // 페이지 로드 시 지도 스크립트 로드
    loadNaverMap();

    // 컴포넌트 언마운트 시 스크립트 제거
    return () => {
      const script = document.querySelector(
        'script[src*="maps.js?ncpClientId=4h549yr3fc"]'
      );
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="page-content">
        <section className="map-section" data-aos="fade-up">
          <div className="container">
            <h2>오시는 길</h2>
            <div className="map-content">
              <div className="map-container" 
                style={{ 
                  width: "100%", 
                  maxWidth: "100%", 
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid #e0e0e0",
                  borderRadius: "20px",
                  padding: "1rem",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  boxSizing: "border-box",
                  minHeight: "600px",
                  background: "white"
                }}>
                <div id="map" 
                  style={{ 
                    width: "100%", 
                    height: "100%",
                    minHeight: "580px",
                    maxWidth: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px"
                  }}></div>
              </div>
              <div className="location-info">
                <div className="info-card">
                  <h3>주소</h3>
                  <p>부산시 수영구 수영로 697</p>
                  <p>홍인빌딩(수영약국 건물) 5층</p>
                </div>
                <div className="info-card">
                  <h3>대중교통</h3>
                  <div className="transport-info">
                    <h4>지하철</h4>
                    <p>2호선, 3호선 수영역 3번 출구 도보 1분</p>

                    <h4>버스</h4>
                  <p>
                    <strong>일반버스</strong>
                    <br />
                    5-1, 39, 40, 49, 54, 63, 141, 155, 210, 1001, 1003
                    <br />
                    수영교차로 / 수영역 하차
                  </p>
                  <p>
                    <strong>마을버스</strong>
                    <br />
                    수영구2 : 수영역 하차
                    <br />
                    해운대구3 : 팔도시장 하차
                  </p>
                  </div>
                </div>
                <div className="info-card">
                  <h3>지정 주차장 안내</h3>
                  
                  <div style={{ marginBottom: "20px" }}>
                    <h4>1. 재성 밀면 주차장 (구.남강민물장어)</h4>
                    <p><strong>부산시 수영구 수영로725번길 55</strong></p>
                    <p>병원 뒤편 골목, 킹마트 맞은편 / 보도 2분 소요 (약 150m)</p>
                    <p style={{ fontSize: "14px", color: "#666" }}>
                      기존 지정 주차장이었던 '남강민물장어'가게가<br/>
                      '재성밀면' 가게로 변경되었습니다 주차는 이전과 똑같이 이용하시면 됩니다.
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h4>2. 신한 민영 주차장</h4>
                    <p><strong>부산시 수영구 망미번영로52번길 107</strong></p>
                    <p>맥도날드 뒤편 골목, 브라운 도트 호텔 맞은편 / 보도 3분 소요 (약 230m)</p>
                  </div>

                  <div style={{ borderTop: "1px solid #eee", paddingTop: "15px", marginTop: "20px" }}>
                    <p>※ 주차 후 접수대에 말씀해주시면 주차권 드리겠습니다.</p>
                    <p>※ 건물 내에 주차장이 없어서 불편드린점 너른 양해 부탁드립니다</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
