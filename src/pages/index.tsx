import type { NextPage } from 'next';

import { TodoApp } from '@/components/TodoApp';

const Home: NextPage = () => (
  <ul>
    <TodoApp />
  </ul>
);

export default Home;
