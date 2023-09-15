import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaGripLines } from "react-icons/fa";
import { useMediaPredicate } from "react-media-hook";

const Navbar = () => {
  const lessthan1024 = useMediaPredicate(`(max-width:1024px)`);
  const lessthan640 = useMediaPredicate(`(max-width:640px)`);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    console.log({ currentScrollPos });
    if (prevScrollPos > currentScrollPos) {
      setVisible(true); // Scrolling up, show the navbar
    } else {
      setVisible(false); // Scrolling down, hide the navbar
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navArray = lessthan1024
    ? ["Shop", "Read", "Stores"]
    : [
        "Skin Care",
        "Body & Hand",
        "Hair",
        "Fragrance",
        "Home",
        "Kits & Travel",
        "Gifts",
        "Read",
        "Stores",
        "Facial Apointments",
      ];
  return !lessthan640 ? (
    <NavbarWrapper visible={visible}>
      <LeftDiv>
        {navArray?.map((item) => (
          <NavItem key={item}>
            <a href="#">{item}</a>
          </NavItem>
        ))}
        <NavItem>
          <BsSearch style={{ marginLeft: "10px" }} />
        </NavItem>
      </LeftDiv>
      <RightDiv>
        <NavItem>
          <a href="#">Log In</a>
        </NavItem>
        <NavItem>
          <a href="#">Cabinet</a>
        </NavItem>
        <NavItem>
          <a href="#">Cart</a>
        </NavItem>
      </RightDiv>
    </NavbarWrapper>
  ) : (
    <MobileNavbarWrapper visible={visible} prevScrollPos={prevScrollPos}>
      <MobileLeftDiv prevScrollPos={prevScrollPos}>
        <h4>Aesop.</h4>
      </MobileLeftDiv>
      <MobileRightDiv prevScrollPos={prevScrollPos}>
        <NavItem>
          <BsSearch className="mobile-icon" />
        </NavItem>
        <NavItem>
          <AiOutlineHeart
            className="mobile-icon"
            style={{ fontSize: "20px" }}
          />
        </NavItem>
        <NavItem>
          <a href="#">Cart</a>
        </NavItem>
        <NavItem>
          <FaGripLines className="mobile-icon" />
        </NavItem>
      </MobileRightDiv>
    </MobileNavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  z-index: 9999;
  display: flex;
  background-color: rgb(255, 254, 242);
  height: 80px;
  padding: 0px 40px;
  justify-content: space-between;
  position: fixed;
  /* ${({ visible }) => !visible && { position: "fixed" }}; */
  top: ${({ visible }) => (visible ? "0px" : "-80px")};
  left: 0%;
  right: 0px;
  transition: all ease-in-out 0.2s;
`;
const LeftDiv = styled.div`
  display: flex;
  background-color: rgb(255, 254, 242);
  gap: 10px;
`;
const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  a {
    text-decoration: none;
    color: black;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    padding: 3px;
    word-spacing: -2px;
    box-sizing: border-box;
  }
`;
const RightDiv = styled.div`
  display: flex;
  background-color: rgb(255, 254, 242);
  gap: 10px;
`;

// mobile view

const MobileNavbarWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 111;
  display: flex;
  justify-content: space-between;
  top: ${({ visible }) => (visible ? "0px" : "-80px")};
  ${({ visible }) => (visible ? `color:white` : "")};
  background: ${({ prevScrollPos }) =>
    prevScrollPos > 0 ? "white" : "transparent"};
  height: 80px;
  padding: 0px 20px;
`;
const MobileLeftDiv = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  h4 {
    font-family: "Courier New", Courier, monospace;
    font-weight: 100;
    font-size: 25px;
    color: ${({ prevScrollPos }) => (prevScrollPos > 0 ? "black" : "white")};
  }
`;
const MobileRightDiv = styled.div`
  display: flex;
  gap: 20px;
  a {
    color: ${({ prevScrollPos }) => (prevScrollPos > 0 ? "black" : "white")};
  }
  .mobile-icon {
    color: ${({ prevScrollPos }) => (prevScrollPos > 0 ? "black" : "white")};
  }
`;
