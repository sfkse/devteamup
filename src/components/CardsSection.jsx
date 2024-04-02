import styled, { css } from "styled-components";
import icon1 from "../assets/Mobile_app_perspective_matte.png";
import icon2 from "../assets/Code_perspective_matte.png";
import icon3 from "../assets/Dashboard_perspective_matte.png";
function CardsSection() {
  return (
    <SectionWrapper>
      <SectionTitle>Unlock Collaboration, Ignite Innovation</SectionTitle>
      <SectionDescription>
        Ready to transform your software development journey? Connect with
        like-minded developers, contribute to meaningful projects, and elevate
        your coding skills to new heights. Or start one and gather your
        team.Your next project adventure awaits.
      </SectionDescription>
      <CardsWrapper>
        <Card>
          <CardIconWrapper>
            <CardIcon src={icon1} alt="Icon" />
          </CardIconWrapper>
          <CardTitle>Effortless Team-Up</CardTitle>
          <CardDescription>
            Connect and collaborate on software projects easily. Find projects
            that match your skills and passion.
          </CardDescription>
        </Card>
        <Card fetured>
          <CardIconWrapper>
            <CardIcon src={icon2} alt="Icon" />
          </CardIconWrapper>
          <CardTitle fetured>Manage Smartly</CardTitle>
          <CardDescription>
            Utilize kanban boards, Gantt charts, and more for seamless project
            tracking and execution.
          </CardDescription>
        </Card>
        <Card>
          <CardIconWrapper>
            <CardIcon src={icon3} alt="Icon" />
          </CardIconWrapper>
          <CardTitle>Connect & Grow</CardTitle>
          <CardDescription>
            Join a community eager to share, learn, and innovate together in the
            tech space.
          </CardDescription>
        </Card>
      </CardsWrapper>
    </SectionWrapper>
  );
}

export default CardsSection;

const SectionWrapper = styled.section`
  padding: 5rem 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: #f9f9ff;

  @media (max-width: 768px) {
    padding: 5rem 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.8;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 1rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: ${(props) =>
    props.fetured ? "1px solid #57007b" : "2px solid transparent"};

  @media (max-width: 1024px) {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 1px solid #57007b;
  border-radius: 50%;
`;

const CardIcon = styled.img`
  width: 30px;
`;
const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  //change color based on props . set linear gradient if featured
  color: ${(props) =>
    props.fetured
      ? css`
          font-size: 1.5rem;
          background: -webkit-linear-gradient(#f76680, #57007b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `
      : "black"};
`;
const CardDescription = styled.p`
  font-size: 1rem;
`;

