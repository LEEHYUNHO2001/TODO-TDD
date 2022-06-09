import styled from '@emotion/styled';
import React, { useCallback } from 'react';

import { TodoItemProps } from '@/types/todoItemProps';

interface LabelProps {
  checked: boolean;
}

export const TodoItem = ({ todo, onRemove }: TodoItemProps) => {
  const { id, text, done } = todo;
  const remove = useCallback(() => onRemove(id), [id, onRemove]);

  return (
    <li>
      <input type="checkbox" id={text} checked={done} readOnly />
      <Label htmlFor={text} checked={done}>
        {text}
      </Label>
      <button type="button" onClick={remove}>
        삭제하기
      </button>
    </li>
  );
};

const Label = styled.label<LabelProps>`
  ${({ checked }) => checked && 'text-decoration: line-through;'}
`;
