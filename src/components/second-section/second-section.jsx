import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaPredicate } from "react-media-hook";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

export const SecondSection = () => {
  const lessthan640 = useMediaPredicate(`(max-width:640px)`);
  return (
    <Row style={{ marginTop: lessthan640 ? "100px" : "150px" }}>
      {lessthan640 && (
        <Col xl={4} lg={12}>
          <LeftContent>
            <p>Fragrance</p>
            <h2>Our Personal Scents</h2>
            <p>
              Unorthodox, evocative, and refined, Aesop fragrances are sensory
              bridges to memory and connection points to those around us.
            </p>
          </LeftContent>
        </Col>
      )}
      <Col xl={!lessthan640 ? 12 : 8} lg={12}>
        <RightContent>
          <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            // infiniteLoop={true}

            renderArrowNext={(clickHandler, hasNext) =>
              hasNext && (
                <NextArrow onClick={() => clickHandler()}>
                  <BsChevronRight className="arrow-icon" />
                </NextArrow>
              )
            }
            renderArrowPrev={(clickHandler, hasPrev) =>
              hasPrev && (
                <NextArrow left={true} onClick={() => clickHandler()}>
                  <BsChevronLeft className="arrow-icon" />
                </NextArrow>
              )
            }
          >
            {!lessthan640 ? (
              <LeftContent>
                <p>Fragrance</p>
                <h2>Our Personal Scents</h2>
                <p>
                  Unorthodox, evocative, and refined, Aesop fragrances are
                  sensory bridges to memory and connection points to those
                  around us.
                </p>
                <StyledBtn lessthan640={lessthan640}>
                  See all Fragrance <BsArrowRightShort className="right-icon" />
                </StyledBtn>
              </LeftContent>
            ) : (
              <noscript />
            )}
            <div>
              <img
                src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
                className="img"
              />
              <FigCaption>
                <p className="legend">Ouranon Eau de Parfum</p>
                <p className="legend">Woody, spicy, resinous </p>
              </FigCaption>
            </div>
            <div>
              <img
                src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
                className="img"
              />
              <FigCaption>
                <p className="legend">Ouranon Eau de Parfum</p>
                <p className="legend">Woody, spicy, resinous </p>
              </FigCaption>
            </div>{" "}
            <div>
              <img
                src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
                className="img"
              />
              <FigCaption>
                <p className="legend">Ouranon Eau de Parfum</p>
                <p className="legend">Woody, spicy, resinous </p>
              </FigCaption>
            </div>
          </Carousel>
        </RightContent>
      </Col>
    </Row>
  );
};

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  /* gap: 10px; */
  padding: 40px;
  margin-bottom: 20px;

  .img {
    width: auto;
    height: 300px;
    background-size: cover;
    /* aspect-ratio: 16/10; */
  }
`;
const RightContent = styled.div`
  height: 70vh;
  .slide {
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
  }
  .slider {
    min-width: 20%;
    max-width: 30%;
    background: transparent;
    gap: 25px;
  }
  @media (max-width: 640px) {
    margin-left: 10%;
  }
  .img {
    width: auto;
    height: 300px;
    background-size: cover;
    /* aspect-ratio: 16/10; */
  }
`;
const NextArrow = styled.div`
  position: absolute;
  z-index: 999;
  top: 50%;
  bottom: 50%;
  ${({ left }) => (left ? "left:0px;" : "right:0px;")}
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  .arrow-icon {
    color: white;
    font-size: 30px;
  }
`;

const FigCaption = styled.div`
  position: absolute;
  bottom: -60px;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  background: white;
`;

const StyledBtn = styled.button`
  display: flex;
  background-color: transparent;
  padding: 10px 20px;
  border: 1px solid white;
  color: black;
  gap: 20px;
  width: ${({ lessthan640 }) => (lessthan640 ? "100%" : "80%")};
  /* &:hover {
    background-color: white;
    color: black;
  } */
  .right-icon {
    font-size: 25px;
  }
`;
