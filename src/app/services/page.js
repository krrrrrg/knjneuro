"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="page-content">
        <section id="services" data-aos="fade-up">
          <div className="container">
            <h2>진료 안내</h2>
            <div className="services-content">
              <div className="service-category">
                <h3>주요 진료 분야</h3>
                <div className="services-grid">
                  <div className="service-item">
                    <h4>두통</h4>
                    <p>
                      편두통, 긴장성 두통, 군발성 두통 등 다양한 두통의 정확한
                      진단과 맞춤형 치료를 제공합니다.
                    </p>
                  </div>
                  <div className="service-item">
                    <h4>어지럼증</h4>
                    <p>
                      메니에르병, 양성돌발성체위현훈, 전정신경염 등 어지럼증의
                      원인을 찾아 효과적인 치료를 진행합니다.
                    </p>
                  </div>
                  <div className="service-item">
                    <h4>뇌졸중</h4>
                    <p>
                      뇌경색, 뇌출혈 등의 뇌혈관 질환에 대한 신속한 진단과 치료,
                      재발 방지를 위한 관리를 제공합니다.
                    </p>
                  </div>
                  <div className="service-item">
                    <h4>치매</h4>
                    <p>
                      알츠하이머, 혈관성 치매 등 다양한 치매의 조기 진단과 진행
                      억제를 위한 치료를 제공합니다.
                    </p>
                  </div>
                  <div className="service-item">
                    <h4>수면장애</h4>
                    <p>
                      불면증, 수면무호흡증, 하지불안증후군 등 수면 관련 질환의
                      진단과 치료를 제공합니다.
                    </p>
                  </div>
                  <div className="service-item">
                    <h4>파킨슨병</h4>
                    <p>
                      파킨슨병 및 관련 질환의 조기 진단과 증상 완화를 위한
                      맞춤형 치료를 제공합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="diagnostic-tests">
                <h3>주요 검사</h3>
                <ul className="tests-list">
                  <li>
                    <strong>뇌파검사(EEG)</strong>
                    <p>
                      뇌의 전기적 활동을 측정하여 간질, 수면장애 등을
                      진단합니다.
                    </p>
                  </li>
                  <li>
                    <strong>신경전도검사(NCS)</strong>
                    <p>말초신경의 기능을 평가하여 신경병증을 진단합니다.</p>
                  </li>
                  <li>
                    <strong>근전도검사(EMG)</strong>
                    <p>근육의 전기적 활동을 측정하여 근육질환을 진단합니다.</p>
                  </li>
                  <li>
                    <strong>인지기능검사</strong>
                    <p>치매 및 인지장애의 정도를 평가합니다.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
