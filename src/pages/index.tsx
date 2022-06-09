import type { NextPage } from 'next';

import { TodoItem } from '@/components/TodoItem';

const Home: NextPage = () => {
  const sampleTodo = {
    id: 1,
    text: 'TODO-TDD',
    done: true,
  };

  return (
    <ul>
      <TodoItem todo={sampleTodo} />
    </ul>
  );
};

export default Home;
