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
  const setup = () => {
    const onRemove = jest.fn();
    const utils = render(<TodoList todos={sampleTodos} onRemove={onRemove} />);

    return { ...utils, onRemove };
  };

  it('renders todos properly', () => {
    setup();
    screen.getByText(sampleTodos[0].text);
    screen.getByText(sampleTodos[1].text);
  });
});
