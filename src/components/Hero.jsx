import styled from "styled-components";
import hero from "../assets/hero.png";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <HeroWrapper>
      <HeroTextContainer>
        <HeroTitle>Team Up, Build Up, Scale Up</HeroTitle>
        <HeroSubtitle>
          Join a community of passionate coders and creators ready to team up on
          projects that inspire. Start collaborating today.
        </HeroSubtitle>
        <HeroButton onClick={() => navigate("/waitlist")}>
          Start Collaborating
        </HeroButton>
      </HeroTextContainer>
      <HeroImage src={hero} alt="Hero Image" />
      <UIEllipse />
    </HeroWrapper>
  );
}

export default Hero;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7rem;
  gap: 5.2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2rem;
    text-align: center;
    margin-top: 3rem;
  }
`;

const HeroTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  margin-top: 1rem;
`;

const HeroButton = styled.button`
  background-color: #3d63ea;
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  margin-top: 1rem;
  border: none;

  @media (max-width: 768px) {
    align-self: center;
  }
`;
const HeroImage = styled.img`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const UIEllipse = styled.div`
  width: 60px;
  height: 30px;
  background: linear-gradient(90deg, #6675f7, #57007b);
  border-top-left-radius: 110px;
  border-top-right-radius: 110px;
  position: absolute;
  bottom: 0;
  transform: translateX(10px) rotate(180deg) translateY(-30px);
`;

