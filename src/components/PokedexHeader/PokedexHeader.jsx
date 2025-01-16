import React from 'react';
import { BottomSearchBarSection, Container, Logo, LogoSection, Point, SearchBarSection, SearchSection } from './styles';

import ThreeDotsButton from '../ThreeDotsButton/ThreeDotsButton';
import SearchInput from '../SearchInput/SearchInput';

const Header = ({ onChangeText, value }) => {
    return (
        <Container>
            <LogoSection>
                <Logo>
                    <Point />
                </Logo>
            </LogoSection>
            <SearchSection>
                <SearchBarSection>
                    <SearchInput
                        onChangeText={onChangeText}
                        value={value}
                    />
                    <ThreeDotsButton />
                </SearchBarSection>
                <BottomSearchBarSection />
            </SearchSection>
        </Container>
    );
};

export default Header;

