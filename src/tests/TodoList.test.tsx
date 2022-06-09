import { render, screen } from '@testing-library/react';

import { TodoList } from '@/components/TodoList';

describe('<TodoList />', () => {
  const sampleTodos = [
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

  it('renders todos properly', () => {
    render(<TodoList todos={sampleTodos} />);
    screen.getByText(sampleTodos[0].text);
    screen.getByText(sampleTodos[1].text);
  });
});
