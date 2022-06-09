import type { NextPage } from 'next';

import { TodoItem } from '@/components/TodoItem';

const Home: NextPage = () => {
  const sampleTodo = {
    id: 1,
    text: 'TODO-TDD',
    done: true,
  };

  const onRemove = (id: number) => {
    console.log(id);
  };

  return (
    <ul>
      <TodoItem todo={sampleTodo} onRemove={onRemove} />
    </ul>
  );
};

export default Home;
