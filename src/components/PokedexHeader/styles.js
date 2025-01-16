import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LogoSection = styled.View`
    padding: 14px;
    background-color: #FF010B;
    border-bottom-width: 12px;
    border-bottom-color: #A40003;
    border-radius: 0 0 10px 0;
    flex: 1;
`;

export const Logo = styled.View`
    height: 60px;
    width: 60px;
    background-color: #02A9D9;
    border: 3px solid #fff;
    border-radius: 50px; 
    padding: 5px;

    align-items: center;
    justify-content: flex-end;
`;

export const Point = styled.View`
    height: 8px;
    width: 8px;

    background-color: #fff;
    border-radius: 50px;
`;

export const SearchSection = styled.View`
    height: 100%;
    flex: 2;
`;

export const SearchBarSection = styled.View`
    padding-right: 14px;
    flex: 3;
    gap: 30px;
    flex-direction: row;
    align-items: center;
`;

export const BottomSearchBarSection = styled.View`
    border-left-width: 12px;
    border-top-width: 12px;
    border-color: #A40003;
    border-radius: 50px 0 0;
    flex: 1;
    margin-left: -10px;
`;