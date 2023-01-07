import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

const iconColor = '#60666c';

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2rem;
  padding: 0 1rem;
  height: 42px;
  width: 50vw;
  margin: 48px 0 ;
  border: 1px solid #dadce0;
  transition: all 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover,
  &:focus-within {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 0 0.5rem 0 0.725rem;
  margin-right: 8px;
  flex-grow: 1;
  outline: none;
  border: none;
  font-size: 16px;
  background-color: transparent;
  border-right: 1px solid #dadce0;
  color: black;
`;

interface SearchProps {
  onChange: () => any;
  value: string;
}

const SearchInputField: React.FC <SearchProps>= ({value}) => {
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  
  const [search, setSearch] = useState(value);
  


  return (
    <SearchBox>
      <MdSearch size="1.5em" color={iconColor} />
      <InputField
        type="text"
        value={search}
        placeholder='Search here'
        onChange={handleChange}
      />
    </SearchBox>
  );
  };

export default SearchInputField;
