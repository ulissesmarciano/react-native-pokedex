import React from 'react';
import styled from 'styled-components/native';

const ProgressBar = ({ progress, title }) => {
    return (
        <Container>
            <ProgressTitle>{title}</ProgressTitle>
            <ProgressBarSpace>
                <Progress>
                    <ProgressData>40/100</ProgressData>
                </Progress>
            </ProgressBarSpace>
        </Container>
    );
};

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
`;

const ProgressTitle = styled.Text`
    color: #DBDBDB;
    text-transform: uppercase;
`;

const ProgressBarSpace = styled.View`
    height: 20px;
    max-width: 90%;
    flex: 1;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
`;

const Progress = styled.View`
    padding-right: 8px;
    height: 100%;
    width: 40%;
    background-color: #76c7c0;
    border-radius: 10px;
    align-items: flex-end;
`;

const ProgressData = styled.Text`
    color: #fff;
`;


export default ProgressBar;
