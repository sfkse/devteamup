import { useFormspark } from "@formspark/use-formspark";
import { forwardRef, useRef, useState } from "react";
import styled from "styled-components";
import validator from "validator";

const EmailSection = forwardRef(function EmailSection(props, ref) {
  const inputRef = useRef();
  const [submit, submitting] = useFormspark({
    formId: "0BkhzMViq",
  });
  const [thankYouMessage, setThankYouMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = inputRef.current.value;
    if (!validator.isEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    await submit({ email });
    inputRef.current.value = "";
    setThankYouMessage("Thank you for joining the waitlist!");
  };

  return (
    <EmailWrapper ref={ref}>
      <EmailTitle>Join the waitlist now</EmailTitle>
      <form onSubmit={handleSubmit}>
        {thankYouMessage ? (
          <ThankYouMessage>{thankYouMessage}</ThankYouMessage>
        ) : (
          <EmailInput>
            <input ref={inputRef} type="email" placeholder="Enter your email" />
            <JoinButton type="submit" disabled={submitting}>
              Join Now
            </JoinButton>
          </EmailInput>
        )}
      </form>
    </EmailWrapper>
  );
});

export default EmailSection;

const EmailWrapper = styled.section`
  background: #f9f9ff;
  padding: 5rem 0;
`;

const EmailTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const ThankYouMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f16063;
  z-index: 1;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

const EmailInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  position: relative;
  width: 50%;
  margin: auto;

  input {
    padding: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    outline: none;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const JoinButton = styled.button`
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
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 0.8rem;
  }
`;

