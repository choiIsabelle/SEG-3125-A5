import React from 'react';
import styled from 'styled-components';
import {actions, selectors} from './dashboard.slice';
import { useDispatch, useSelector } from 'react-redux';

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const ToggleButton = styled.button`
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: ${(props) => (props.active ? '#ff4500' : '#f0f0f0')};
    color: ${(props) => (props.active ? '#fff' : '#000')};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${(props) => (props.active ? '#ff4500' : '#e0e0e0')};
    }
`;

const LangToggle = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector(selectors.getLanguage);
    const handleSetLanguage=(lang)=> {
        dispatch(actions.setLanguage(lang));
    }

    console.log("Current Language:", currentLanguage);

    return (
        <ToggleContainer>
            <ToggleButton
                active={currentLanguage === 'en'}
                onClick={() => handleSetLanguage('en')}
            >
                English
            </ToggleButton>
            <ToggleButton
                active={currentLanguage == 'fr'}
                onClick={() => handleSetLanguage('fr')}
            >
                French
            </ToggleButton>
        </ToggleContainer>
    );
};

export default LangToggle;