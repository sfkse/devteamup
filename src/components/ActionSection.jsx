import styled from "styled-components";
import buttonSplash from "../assets/button-splash.png";
import { useNavigate } from "react-router-dom";
function ActionSection() {
  const naviigate = useNavigate();
  return (
    <SectionWrapper>
      <SectionText>Turn ideas into impactful software.</SectionText>
      <ButtonWrapper>
        <SplashImage src={buttonSplash} alt="Button Splash" />
        <ActionButton onClick={() => naviigate("/waitlist")}>
          Get Started
        </ActionButton>
      </ButtonWrapper>
    </SectionWrapper>
  );
}

export default ActionSection;

const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  background-color: #f9f9ff;
  margin: 5rem 10rem;
  padding: 4rem;
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 5rem 2rem;
    gap: 2rem;
  }
`;

const SectionText = styled.h2`
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const ActionButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(90deg, #ffc656, #f16063);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 2;
  outline: none;
`;

const ButtonWrapper = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
`;

const SplashImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;
  border-radius: 5px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

