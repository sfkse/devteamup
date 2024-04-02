import styled from "styled-components";
import checkmark from "../assets/Checkmark.png";
import greenCheckmark from "../assets/check_mark.png";
function PriceCards() {
  return (
    <CardsWrapper>
      <Card>
        <CardTitle>Basic</CardTitle>
        <OldPriceWrapper>
          <OldPrice>$16.99</OldPrice>
        </OldPriceWrapper>
        <CardPrice>Free</CardPrice>
        <CardFeatures>
          <Feature>
            <img src={checkmark} alt="" /> Access to public projects
          </Feature>
          <Feature>
            <img src={checkmark} alt="" />
            Ability to join unlimited projects
          </Feature>
          <Feature>
            <img src={checkmark} alt="" />
            Basic project management tools <br />
          </Feature>
        </CardFeatures>
        <CardDescription>
          <img src={greenCheckmark} alt="" />
          Best for individuals and hobbyists exploring collaborative coding and
          seeking to join projects without the need for advanced features.
        </CardDescription>
        <CardButton>Join waitlist</CardButton>
      </Card>
      <Card featured={true}>
        <CardTitle>Pro</CardTitle>
        <OldPriceWrapper>
          <OldPrice>$36.99</OldPrice>
        </OldPriceWrapper>
        <CardPrice>$19.99</CardPrice>
        <CardFeatures>
          <Feature>
            <img src={checkmark} alt="" /> All Basic plan features
          </Feature>
          <Feature>
            <img src={checkmark} alt="" />
            Access to private projects
          </Feature>
          <Feature>
            <img src={checkmark} alt="" />
            Advanced project management tools (e.g., kanban boards, Gantt
            charts)
          </Feature>
          <Feature>
            <img src={checkmark} alt="" />
            Portfolio showcase
          </Feature>
          <Feature>
            <img src={checkmark} alt="" />
            Early access to new features
          </Feature>
        </CardFeatures>
        <CardDescription>
          <img src={greenCheckmark} alt="" />
          Best for professional developers and freelancers looking for enhanced
          collaboration tools and visibility for their contributions.
        </CardDescription>
        <CardButton>Join waitlist</CardButton>
      </Card>
      <Card>
        <CardTitle>Team</CardTitle>
        <OldPriceWrapper>
          <OldPrice>$179.99</OldPrice>
        </OldPriceWrapper>
        <CardPrice>89.99</CardPrice>
        <CardFeatures>
          <Feature>
            <img src={checkmark} alt="" /> All Pro plan features
          </Feature>
          <Feature>
            <img src={checkmark} alt="" />
            Team account with centralized billing
          </Feature>
          <Feature>
            <img src={checkmark} alt="" />
            Private team workspace
          </Feature>
          <Feature>
            <img src={checkmark} alt="" />
            Collaborative document editing
          </Feature>
          <Feature>
            <img src={checkmark} alt="" />
            Priority support
          </Feature>
        </CardFeatures>
        <CardDescription>
          <img src={greenCheckmark} alt="" />
          Best for small teams and startups that need a collaborative
          environment with shared resources and tools for efficient project
          management.
        </CardDescription>
        <CardButton>Join waitlist</CardButton>
      </Card>
    </CardsWrapper>
  );
}

export default PriceCards;

const CardsWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 5rem 10rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 5rem 2rem;
  }
`;

const Card = styled.div`
  background: ${(props) => (props.featured ? "#fff" : "#EFF0FF")};
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 30%;
  max-width: 400px;
  transform: ${(props) => (props.featured ? "scale(1.1)" : "scale(1)")};

  @media (max-width: 1260px) {
    padding: 1rem;
    width: 90%;
  }

  @media (max-width: 968px) {
    margin-bottom: 2rem;
    transform: scale(1);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
    transform: scale(1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: bold;
`;

const OldPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-decoration: line-through;
  color: red;
`;

const OldPrice = styled.p`
  color: #5559dd;
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const CardPrice = styled.p`
  font-size: 1.5rem;
`;

const CardFeatures = styled.ul`
  text-align: left;
  margin-top: 3rem;
  position: relative;
  padding: 2rem;
  border-top: 1px solid #5559dd36;
`;

const Feature = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  line-height: 1.5;
`;

const CardButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: #eff0ff;
  background: #2b1c50;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  z-index: 2;
  outline: none;
`;

