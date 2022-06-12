import { render, screen } from '@testing-library/react';

import { TodoApp } from '@/components/TodoApp';

describe('<TodoApp />', () => {
  it('renders TodoForm and TodoList', () => {
    render(<TodoApp />);
    screen.getByText('등록하기');
    screen.getByTestId('TodoList');
  });
});
