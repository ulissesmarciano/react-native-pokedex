import React from 'react';
import { BottomSearchBarSection, Container, Logo, LogoSection, Point, SearchBarSection, SearchSection } from './styles';

import ThreeDotsButton from '../ThreeDotsButton/ThreeDotsButton';
import SearchInput from '../SearchInput/SearchInput';

const Header = () => {
    return (
        <Container>
            <LogoSection>
                <Logo>
                    <Point />
                </Logo>
            </LogoSection>
            <SearchSection>
                <SearchBarSection>
                    <SearchInput />
                    <ThreeDotsButton />
                </SearchBarSection>
                <BottomSearchBarSection />
            </SearchSection>
        </Container>
    );
};

export default Header;

