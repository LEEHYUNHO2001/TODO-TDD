import { render, screen } from '@testing-library/react';

import { TodoItem } from '@/components/TodoItem';
import { TodoProps } from '@/types/todoProps';

describe('<TodoItem />', () => {
  const sampleTodo = {
    id: 1,
    text: 'TODO-TDD',
    done: false,
  };

  const setup = (props = {} as TodoProps) => {
    const initialProps = { todo: sampleTodo };
    const utils = render(<TodoItem {...initialProps} />);
    const todo = props.todo || initialProps.todo;
    const input = screen.getByLabelText(todo.text, { selector: 'input' });
    const label = screen.getByLabelText(todo.text);
    const button = screen.getByText('삭제');
    return {
      ...utils,
      input,
      label,
      button,
    };
  };

  it('has span and button', () => {
    const { input, label, button } = setup();
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(button).toBeTruthy();
  });
});
