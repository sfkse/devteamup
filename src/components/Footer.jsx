import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>© 2024 Copyright by DevTeamUp.dev. All rights reserved.</Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #4a5568;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

