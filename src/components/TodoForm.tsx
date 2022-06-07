import React, { ChangeEvent, useState } from 'react';

export const TodoForm = () => {
  const [value, setValue] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <input placeholder="할 일을 입력하세요" onChange={handleInput} value={value} />
      <button type="submit">등록하기</button>
    </form>
  );
};
