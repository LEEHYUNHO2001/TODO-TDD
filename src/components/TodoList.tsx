import React from 'react';

import { Todo } from '@/types/todoProps';

import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  const onRemove = (id: number) => {
    console.log(id);
  };
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </ul>
  );
};
