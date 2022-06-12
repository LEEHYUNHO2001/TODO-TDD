import React from 'react';

import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const onInsert = () => {
    console.log('onInsert');
  };
  const onRemove = (id: number) => {
    console.log(id, 'onRemove');
  };
  return (
    <div>
      <TodoForm data-testid="helloworld" onInsert={onInsert} />
      <TodoList todos={[]} onRemove={onRemove} />
    </div>
  );
};
