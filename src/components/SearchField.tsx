import {ChangeEvent, PropsWithChildren, useState} from 'react';
import {IconMagnifyingGlass} from "../assets/IconMagnifyingGlass.tsx";
import {IconCross} from "../assets/IconCross.tsx";
import styled from "styled-components";

type SearchFieldProps = PropsWithChildren<{
  onTextChange?: (val: string) => void;
  value?: string;
  placeholder?: string;
}>;

const InputFormEl = styled.form`
  width: 100%;
  position: relative;
`;

const InputField = styled.input.attrs(props => ({type: "text"}))`
  border: none;
  margin: 8px;
  width: 100%;
  padding: 8px 2.2em 8px 2.2em;
  color: ${props => props.theme.inputTextColor};
  font-size: ${props => props.theme.fontSize};
  &:focus {
    outline: none;
  }
`;

const LeftIcon = styled.span`
  position: absolute;
  left: calc(.5em + 4px);
  top: calc(.5em + 6px);
`;

const RightIcon = styled.span`
  position: absolute;
  right: calc(.5em - 4px);
  top: calc(.5em + 4px);
`;

// SearchField is a specialized input field with a callback on text change, a search icon
// and a clear input icon that clears the text
export const SearchField = ({ onTextChange, value = "", placeholder = "" }: SearchFieldProps) => {
  const [text, setText] = useState(value)

  function clearText() {
    setText('')
    if (onTextChange) { onTextChange(''); }
  }

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
    if (onTextChange) { onTextChange(e.target.value); }
  }

  return (
    <InputFormEl>
      <InputField onChange={onChange} value={text} placeholder={placeholder} />
      <LeftIcon><IconMagnifyingGlass /></LeftIcon>
      <RightIcon onClick={clearText}><IconCross /></RightIcon>
    </InputFormEl>
  )
}
