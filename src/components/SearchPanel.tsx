import React, {useState} from 'react';
import {SearchField} from "./SearchField.tsx";
import ContactList from "./ContactList.tsx";
import students from "../data.ts";
import styled from "styled-components";

// SearchPanel is the main component. It combines a SearchField with two ContactLists to show results.
// When the text changes in the SearchField we update the filter property on both lists.

// If the data were coming from an API, we would use slightly different logic here, passing
// in an updated list of students as a result of an API call, when the filtering is done
// server-side.

const SearchPanelEl = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchFieldWrapper = styled.div`
  flex-grow: 0;
`;

export const SearchPanel = () => {
  const [filter, setFilter] = useState('');

  function onChange(val: string) { setFilter(val); }

  return (
    <SearchPanelEl>
      <SearchFieldWrapper>
        <SearchField onTextChange={onChange} value="" placeholder="Search"/>
      </SearchFieldWrapper>
      <ContactList entries={students} filter={filter} category='attended'/>
      <ContactList entries={students} filter={filter} category='absent'/>
    </SearchPanelEl>
  )
};

export default SearchPanel;
