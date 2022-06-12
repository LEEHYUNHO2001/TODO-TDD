import React, { useEffect, useState } from 'react';

import { Todo } from '@/types/todoProps';

import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        text: 'TODO-TDD',
        done: true,
      },
      {
        id: 2,
        text: 'Velog 작성하기',
        done: true,
      },
    ];
    setTodos(data);
  }, []);

  const onInsert = () => {
    console.log('onInsert');
  };
  const onRemove = (id: number) => {
    console.log(id, 'onRemove');
  };
  return (
    <div>
      <TodoForm data-testid="helloworld" onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </div>
  );
};