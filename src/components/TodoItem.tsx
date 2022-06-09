import styled from '@emotion/styled';
import React from 'react';

import { TodoProps } from '@/types/todoProps';

interface LabelProps {
  checked: boolean;
}

export const TodoItem = ({ todo }: TodoProps) => {
  const { text, done } = todo;

  return (
    <li>
      <input type="checkbox" id={text} checked={done} readOnly />
      <Label htmlFor={text} checked={done}>
        {text}
      </Label>
      <button type="button">삭제</button>
    </li>
  );
};

const Label = styled.label<LabelProps>`
  ${({ checked }) => checked && 'text-decoration: line-through;'}
`;
