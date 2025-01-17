import React, {PropsWithChildren, useState} from 'react';
import {IconChevronRight} from '../assets/IconChevronRight.tsx';
import ContactListItem from "./ContactListItem.tsx";
import styled from "styled-components";
import {Student} from "@/types.ts";


type ListProps = PropsWithChildren<{
  filter: string
  category?: string
  entries: Student[]
}>

const ContactListEl = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.bgColor};
`;

// need config to avoid the 'sel' or 'hover' property to be forwarded to the dom
const ListAccordion = styled.div.withConfig({
  shouldForwardProp: (prop) => !['expanded'].includes(prop),
})<{ expanded?: boolean; }>`
  display: grid;
  grid-template-rows: ${props => props.expanded ? '1fr' : '0fr'};
  transition: grid-template-rows 300ms;
`
const OrderedList = styled.ol`
  list-style: none;
  padding: 8px 12px;
  overflow: hidden;
`
const SectionHeader = styled.h4<{}>`
  display: flex;
  border-top: 2px solid #e4e5e8;
  border-bottom: 2px solid #e4e5e8;
  padding: 16px 8px 8px 16px;
  margin: 0;
`

const SectionHeaderText = styled.div`
  flex-grow: 1;
  text-transform: capitalize;
  font-weight: 500;
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.textLightColor};
  line-height: 20px;
`

const AccordionToggle = styled.span.withConfig({
  shouldForwardProp: (prop) => !['expanded'].includes(prop),
})<{ expanded?: boolean; }>`
  transition: ease-in-out;
  transition-duration: 300ms;
  transform: ${props => props.expanded ? 'rotate(90deg)' : ''};
`;

// toggle item in provided array
export const toggle = (sel: number[], id: number) => sel.includes(id) ? sel.filter((i: number) => i !== id) : [...sel, id];

// The contact list components renders a list of students, highlighting students that are marked as selected (sel).
// The selection handling is done outside the list itself, instead we pass on a toggle event when a contact list item is clicked.

export const ContactList = ({filter = '', category = 'attended', entries = [] }: ListProps) => {

  const [expanded, setExpanded] = useState(true)
  const [selection, setSelection] = useState<number[]>();

  // toggle selection, make sure our array is defined
  function toggleSelection(id: number) {
    setSelection(toggle([...(selection ? selection : [])], id));
  }

  function isSelected(id: number): boolean {
    return selection ? selection.includes(id) : false
  };

  return (
    <ContactListEl>
      <SectionHeader>
        <SectionHeaderText>{category}</SectionHeaderText>
        <AccordionToggle onClick={() => setExpanded(!expanded)} expanded={expanded} role="accordion-toggle">
          <IconChevronRight/>
        </AccordionToggle>
      </SectionHeader>
      <ListAccordion expanded={expanded}>
        <OrderedList role="list">
          {entries
            .filter((i) => i.category == category)
            .filter((i) => filter.trim() == '' || !i.name || i.name.toLowerCase().indexOf(filter) >= 0)
            .map((student) => (<ContactListItem  key={student.id} onClick={toggleSelection} sel={isSelected(student.id)} student={student}/>))}
        </OrderedList>
      </ListAccordion>
    </ContactListEl>
  )
}

export default ContactList
