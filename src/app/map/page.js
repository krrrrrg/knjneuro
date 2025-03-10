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
        }
        
        // 맵 요소 스타일 강제 적용
        mapContainer.style.width = '100%';
        mapContainer.style.maxWidth = '100%';
        mapContainer.style.height = '400px';
        mapContainer.style.position = 'relative';
        mapContainer.style.overflow = 'hidden';
        
        const mapOptions = {
          center: new window.naver.maps.LatLng(35.1678376, 129.115742),
          zoom: 17,
          zoomControl: true,
          zoomControlOptions: {
            position: window.naver.maps.Position.TOP_RIGHT,
          },
          size: new window.naver.maps.Size(containerWidth, 400),
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
            el.style.height = '400px';
            el.style.overflow = 'hidden';
          });
        }, 100);

        const marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(35.1678376, 129.115742),
          map: map,
        });

        const contentString = [
          '<div class="iw_inner" style="padding:10px;">',
          '   <h3 style="margin-bottom:10px;">강남제신경과</h3>',
          "   <p>부산시 수영구 수영로 697<br/>",
          "   홍인빌딩 5층<br/>",
          "   Tel: 051-759-7676</p>",
          "</div>",
        ].join("");

        const infowindow = new window.naver.maps.InfoWindow({
          content: contentString,
          maxWidth: 300,
          backgroundColor: "#fff",
          borderColor: "#888",
          borderWidth: 2,
          anchorSize: new window.naver.maps.Size(30, 30),
          anchorSkew: true,
          pixelOffset: new window.naver.maps.Point(20, -20),
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
                  borderRadius: "8px",
                  padding: "0",
                  boxSizing: "border-box"
                }}>
                <div id="map" 
                  style={{ 
                    width: "100%", 
                    height: "400px",
                    maxWidth: "100%",
                    position: "relative",
                    overflow: "hidden" 
                  }}></div>
              </div>
              <div className="location-info">
                <div className="info-card">
                  <h3>주소</h3>
                  <p>부산시 수영구 수영로 697</p>
                  <p>홍인빌딩 5층</p>
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
                      수영교차로 / 수영역 하차 <br />
                      5-1, 20, 39, 40, 42, 49, 51, 54, 62, 63, 131, 141,
                      141(심야), 155, 210, 1001, 1003, 1003(심야), 2026
                    </p>
                    <p>
                      <strong>마을버스</strong>
                      <br />
                      수영교차로.팔도시장 : 해운대구3
                    </p>
                  </div>
                </div>
                <div className="info-card">
                  <h3>주차</h3>
                  <p>지정주차장 : 남강민물장어 주차장</p>
                  <p>
                    부산시 수영구 수영로 725번길 55 (병원 뒷편, 킹마트 맞은편
                    가게)
                  </p>
                  <p>※ 주차 후 접수대에 말씀해주시면 주차권 드립니다.</p>
                  <p>
                    ※ 건물 내에 주차장이 없어서 불편 드린 점 너른 양해
                    부탁드립니다.
                  </p>
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
