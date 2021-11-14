import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #dc143c		 ;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  font-family: "Courier New",sans-serif;
  font-weight: 700;

`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
font-family: "Courier New";
font-size: 1.5rem;
font-weight: 600;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color:black;
  text-decoration: underline;
}
&:hover {
  color: black;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

 export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  font-family: "Courier New";
  font-weight: 600;


  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
  &.active{
    background: #fff;
    color: #808080;
    outline-style: solid;
    outline-color: black;

  }
`;

export const Button= styled.button`
border-radius: 5px;
  background: #dc143c;
  padding: 5px 20px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  outline-style: solid;
  outline-color: black;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
