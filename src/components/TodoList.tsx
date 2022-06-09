import React from 'react';

import { TodoListProps } from '@/types/todoListProps';

import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onRemove }: TodoListProps) => (
  <ul>
    {todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} onRemove={onRemove} />
    ))}
  </ul>
);
