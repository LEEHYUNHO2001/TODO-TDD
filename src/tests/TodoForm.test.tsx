import { render, screen } from '@testing-library/react';

import { TodoForm } from '@/components/TodoForm';

describe('<TodoForm />', () => {
  it('has input and a button', () => {
    const { container } = render(<TodoForm />);
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const text = screen.getByText('등록하기');
    expect(input).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
