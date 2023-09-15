import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { StyledButton } from "../styled-elements/styled-elements";
import { useMediaPredicate } from "react-media-hook";
import { SecondSection } from "../second-section/second-section";

const Main = () => {
  const lessthan640 = useMediaPredicate(`(max-width:640px)`);

  const Content = () => {
    return (
      <FirstContent lessthan640={lessthan640}>
        <Row
          style={{
            marginLeft: "0px",
            marginRight: "0px",
            boxSizing: "border-box",
          }}
        >
          {!lessthan640 && (
            <Col lg={2} md={2} sm={2}>
              <LogoH2> Aesop. </LogoH2>
            </Col>
          )}
          <Col lg={4} md={5} sm={lessthan640 ? 12 : 7}>
            <p>Doorways to the undiscovered</p>
            <h2>Othertopias: a collection of unorthodox fragrances</h2>
            <p style={{ marginBottom: "20px" }}>
              Step inside six fragrant worlds that transcend our immediate
              perception—vivid and distinctive.
            </p>
            <StyledButton text={"Discover the fragrances"} />
          </Col>
        </Row>{" "}
      </FirstContent>
    );
  };

  return (
    <MainWrap dis={window.scrollY}>
      <LeftDiv lessthan640={lessthan640}>{!lessthan640 && <Content />}</LeftDiv>
      {lessthan640 && <Content />}
      <SecondSection />
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  z-index: -1;
  margin-top: ${({ dis }) => (dis == 0 ? "0px" : dis > 80 ? "-80px" : "0px")};
`;
const LeftDiv = styled.div`
  padding-top: 80px;
  padding-left: 40px;

  background-image: url(https://www.aesop.com/u1nb1km7t5q7/51ATQtZl3wy8KBBgt4MACM/1588c8b4d7e2291b47796d3d42884f1f/Aesop_Othertopias_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg);
  background-position: center;
  background-size: cover;
  height: 100vh;

  p,
  h2 {
    color: white;
  }
`;
const FirstContent = styled.div`
  padding-top: 140px;
  gap: 20px;
  position: relative;
  ${({ lessthan640 }) =>
    lessthan640
      ? `padding:20px; background: #5b3e45; padding:40px 20px; gap:25px;`
      : ``}
  color: white;
  h2,
  p {
    ${({ lessthan640 }) => (lessthan640 ? `margin-bottom : 20px` : ``)};
  }
`;
const LogoH2 = styled.h2`
  align-self: self-start;
`;
