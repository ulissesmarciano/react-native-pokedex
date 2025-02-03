import React from "react";
import {
  BottomSearchBarSection,
  Container,
  Logo,
  LogoSection,
  Point,
  SearchBarSection,
  SearchSection,
} from "./styles";

import FilterButton from "../FilterButton/FilterButton";
import SearchInput from "../SearchInput/SearchInput";

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
          <SearchInput onChangeText={onChangeText} value={value} />
          <FilterButton />
        </SearchBarSection>
        <BottomSearchBarSection />
      </SearchSection>
    </Container>
  );
};

export default Header;
