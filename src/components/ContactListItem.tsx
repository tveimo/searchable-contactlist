import React, {MouseEvent, PropsWithChildren} from 'react'
import profileImage from "../assets/profile.jpg";
import styled from "styled-components";
import {Student} from "@/types.ts";

type EntryProps = PropsWithChildren<{
  onClick?: (id: number) => void
  sel?: boolean
  hover?: boolean // for storybook
  student: Student
  showEmail?: boolean
}>

const ListEntry = styled.li`
  paddingBottom: '8px';
`;

// need config to avoid the 'sel' or 'hover' property to be forwarded to the dom
const EntryWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['sel'].includes(prop) && !['hover'].includes(prop),
})<{ sel?: boolean; hover?: boolean; }>`
  display: flex;
  background: ${props => props.sel ? props.theme.bgSelectedColor : props.hover ? props.theme.hoverColor : props.theme.bgColor};
  &:hover {
    background: ${props => props.theme.hoverColor};
  }
  padding: 8px;
  border-radius: 4px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 20px auto;
  align-items: flex-start;
`;

const Thumbnail = styled.img`
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const NameEl = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: ${props => props.theme.textColor}; 
  font-size: ${props => props.theme.fontSize};  
`;

const EmailEl = styled.span`
  color: ${props => props.theme.textLightColor};
  font-size: ${props => props.theme.smallFontSize};  
`;

export const ContactListItem = ({onClick, sel = false, hover = false, student, showEmail = true}: EntryProps) => {

  function onClickEvent(e: MouseEvent<HTMLLIElement>) {
    if (onClick) {
      onClick(student.id ? student.id : -1);
    }
  }

return (
  <ListEntry onClick={onClickEvent} key={student.id} role="listitem">
    <EntryWrapper sel={sel} hover={hover}>
      <Thumbnail src={profileImage} alt='profile'/>
      <TextWrapper>
        <NameEl>{student.name}</NameEl>
        {(showEmail ? <EmailEl>{student.email}</EmailEl> : '')}
      </TextWrapper>
    </EntryWrapper>
  </ListEntry>
  )
}

export default ContactListItem;
