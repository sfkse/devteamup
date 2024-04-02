import styled from "styled-components";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import checkMark from "../assets/check_mark.png";
function FeaturesSection() {
  return (
    <SectionWrapper>
      <SectionImageOnTheRight>
        <SectionTextWrapper>
          <SectionTitle>Collaborate in Real Time</SectionTitle>
          <SectionDescription>
            <CheckMark src={checkMark} alt="Point" />
            <HighlightedText>
              Interactive Coding Environments:&nbsp;
            </HighlightedText>
            Work simultaneously on the same codebase with live sync. <br />
            <CheckMark src={checkMark} alt="Point" />
            <HighlightedText>
              Instant Messaging & Video Calls:&nbsp;
            </HighlightedText>
            Communicate seamlessly with your team through integrated chat and
            calls, directly within the project workspace. <br />
            <CheckMark src={checkMark} alt="Point" />
            <HighlightedText>
              Live Brainstorming & Feedback:&nbsp;
            </HighlightedText>
            Share ideas, discuss solutions, and provide immediate feedback to
            accelerate development and innovation. <br />
          </SectionDescription>
        </SectionTextWrapper>
        <SectionImage src={feature1} alt="Feature 1" />
      </SectionImageOnTheRight>
      <SectionImageOnTheLeft>
        <SectionImage src={feature2} alt="Feature 2" />
        <SectionTextWrapper>
          <SectionTitle>
            Streamline Your Workflow with Advanced Project Management
          </SectionTitle>
          <SectionDescription>
            <CheckMark src={checkMark} alt="Point" />
            <HighlightedText>Customizable Kanban Boards:&nbsp;</HighlightedText>
            Organize tasks, track progress, and manage workflows tailored to
            your project's needs. <br />
            <CheckMark src={checkMark} alt="Point" />
            <HighlightedText>
              Gantt Charts & Time Tracking:&nbsp;
            </HighlightedText>
            Visualize your project timeline, set milestones, and keep track of
            time spent on tasks for better productivity management.
            <br />
            <CheckMark src={checkMark} alt="Point" />
            <HighlightedText>
              Task Assignment & Notifications:&nbsp;
            </HighlightedText>
            Assign tasks to team members and set up notifications for deadlines
            and updates to ensure everyone is aligned and informed.
            <br />
          </SectionDescription>
        </SectionTextWrapper>
      </SectionImageOnTheLeft>
      <SectionImageOnTheRight>
        <SectionTextWrapper>
          <SectionTitle>Explore a World of Projects</SectionTitle>
          <SectionDescription>
            <CheckMark src={checkMark} alt="Point" />
            <HighlightedText>Project Variety:&nbsp;</HighlightedText> Access a
            wide range of projects, from mobile applications to AI research,
            fitting all interests and skill levels.
            <br />
            <CheckMark src={checkMark} alt="Point" />
            <HighlightedText>
              Open-Source & Commercial Ventures:&nbsp;
            </HighlightedText>
            Contribute to open-source projects or join commercial ventures,
            expanding your experience and portfolio.
            <br />
            <CheckMark src={checkMark} alt="Point" />
            <HighlightedText>Project Discovery Tools:&nbsp;</HighlightedText>
            Use advanced search and filtering options to find projects that
            match your skills, interests, and career goals quickly.
            <br />
          </SectionDescription>
        </SectionTextWrapper>
        <SectionImage src={feature3} alt="Feature 3" />
      </SectionImageOnTheRight>
    </SectionWrapper>
  );
}

export default FeaturesSection;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const SectionImageOnTheRight = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 5rem 10rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5rem 2rem;
  }
`;

const SectionImageOnTheLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;
  background-color: #f9f9ff;
  padding: 5rem 10rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 5rem 2rem;
  }
`;

const SectionImage = styled.img`
  width: 400px;

  @media (max-width: 1024px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SectionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #6e6e7a;
  line-height: 2.3;
`;

const CheckMark = styled.img`
  width: 1rem;
  margin-right: 0.5rem;
`;

const HighlightedText = styled.span`
  background: -webkit-linear-gradient(#f76680, #57007b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

