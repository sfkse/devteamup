import styled from "styled-components";

function HeaderSection() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderTitle>Get early access for a discount</HeaderTitle>
        <HeaderDescription>
          Join our waitlist and get access to DevTeamUp for a discounted
          early-bird prices
        </HeaderDescription>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default HeaderSection;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 10rem;
  margin-top: 5rem;
  border-radius: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #f76680, #57007b);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    padding: 5rem 2rem;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeaderDescription = styled.p`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

