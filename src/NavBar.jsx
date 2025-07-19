import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import DataIcon from './Icons/DataIcon';
import LangToggle from './LangToggle';

const NavbarContainer = styled.div`
    background-color:rgb(255, 255, 255);
    color: black;
    padding: 10px 20px;
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 2.8em;
    padding: 0 2rem 0 2rem;
    font-weight: 650;
    color: black;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 2.5rem;
`;

const NavLink = styled.a`
    color: ${props => props.color || 'black'};
    text-decoration: none;
    font-weight: 700;
    font-size: 1.2em;

    &:hover {
        color: ${props => props.color ? 'darkred' : 'lightgray'};
        cursor: pointer;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    gap: 1rem;
`;  

const Navbar = () => {

    return (
        <NavbarContainer>
            <Logo
            >
            <DataIcon 
            width={50}
            onClick={()=>console.log("Mew")}
                />
            DataNow
            </Logo>
            <NavLinks>
                <LangToggle/>
            </NavLinks>
            <IconsContainer>
            </IconsContainer>
        </NavbarContainer>
    );
};

export default Navbar;