import PropTypes from "prop-types";

const LandingPageMain = ({ children, props }) => {
  return (
    <>
      <section class="first">
        <div
          class="backgroundImage"
          style={{ backgroundImage: "url(img/3.jpeg)" }}
        ></div>
        <h1>반려생활 궁금증 PetGuru와 함께</h1>
        <h3>반려생활 궁금증 PetGuru와 함께</h3>
      </section>

      <section class="second">
        <h3 class="title">About</h3>
        <p>
          전문 훈련사와 함께 여러분의 반려동물을 더 깊이 알아가세요!
          <br />
          <br />
          너와 이야기를 나눌 수 있으면 얼마나 좋을까.
          <br />
          어디가 아픈지, 니 생각이 어떤지 알 수 있으면 얼마나 좋을까.
          <br />
          <br />
          내 반려동물의 행동과 증상을 등록하면
          <br />
          PetGuru의 검증된 전문 훈련사와 많은 경험의 애견/애묘인들이 답을 줄
          거에요!
        </p>
        <br />
        <hr />
        <ul class="grid">
          <li
            class="small"
            style={{ backgroundImage: "url(/img/QA.png)" }}
          ></li>
          <li
            class="large"
            style={{ backgroundImage: "url(/img/submitPost.gif)" }}
          ></li>
        </ul>
      </section>

      <section class="third">
        <h3 class="title">PetGuru Service</h3>
        <p></p>
        <hr />

        <ul class="grid">
          <li>
            <i class="fas fa-question"></i>
            <h4>질문하기</h4>
            <p>
              PetGuru에 질문을 등록하고 궁금증을 해결하세요! <br /> 수의사,
              훈련사 및 전문가 인증 멘토들이 답변해줄 거에요!
            </p>
          </li>
          <li>
            <i class="fas fa-stethoscope"></i>
            <h4>진단받기</h4>
            <p>
              내 반려동물이 갑자기 아픈가요?<br/>
              PetGuru의 수의사 멘토님께 질문하세요!
            </p>
          </li>
          <li>
            <i class="fas fa-search"></i>
            <h4>내 반려견 찾기</h4>
            <p>
              반려동물의 정보와 실종된 지역을 등록하면
              <br />
              많은 반려인들이 도움을 드릴 거에요!
            </p>
          </li>
        </ul>
      </section>
      {children}
    </>
  );
};

LandingPageMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandingPageMain;
