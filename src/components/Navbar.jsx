import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/Brand/Vector.png";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarBrand onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
          DevTeamUp
        </NavbarBrand>
        <NavbarLinks>
          <NavbarLink to="/waitlist">Pricing</NavbarLink>
        </NavbarLinks>
        <NavbarLinks>
          <ButtonLink to="/waitlist">Sign up</ButtonLink>
        </NavbarLinks>
      </NavbarContainer>
      <Hamburger onClick={() => setIsOpen(true)}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21"
            stroke="#6675F7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="#6675F7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="#6675F7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Hamburger>
      {isOpen && (
        <MobileMenu>
          <MobileMenuLink onClick={() => setIsOpen(false)} to="/waitlist">
            Pricing
          </MobileMenuLink>
          <ButtonLink onClick={() => setIsOpen(false)} to="/waitlist">
            Sign up
          </ButtonLink>
          <CloseMenu onClick={() => setIsOpen(false)}> X</CloseMenu>
        </MobileMenu>
      )}
    </NavbarWrapper>
  );
}

export default Navbar;

const NavbarWrapper = styled.nav`
  padding: 2rem 4rem;

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarBrand = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;
`;
const NavbarLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
const NavbarLink = styled(Link)`
  text-decoration: none;
  margin-right: 20px;
`;

const ButtonLink = styled(Link)`
  //Linear Gradient
  background: linear-gradient(90deg, #6675f7, #57007b);
  color: white;
  text-decoration: none;
  padding: 15px 20px;
  border-radius: 5px;
  margin-left: 10px;
`;

const Hamburger = styled.div`
  display: none;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: white;
  padding: 2rem;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 10;
  gap: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: flex;
  }

  body {
    overflow: hidden;
  }
`;

const MobileMenuLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1.5rem;
`;

const CloseMenu = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  cursor: pointer;
`;

