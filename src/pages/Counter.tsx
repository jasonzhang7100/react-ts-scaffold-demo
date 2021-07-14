import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';

import Button from '../components/Button';

// React.FC本身是个可以传入类型参数的泛形类（Function Component类。或者这里理解成FC是个泛形接口感觉也可以），使用的时候传类型参数进去指定给其中的props
const Counter: React.FC<RouteComponentProps> = () => {
  // 给count加数字属性，相当于给useState泛形传参number
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <Button handleClick={handleClick}>+</Button>
    </div>
  );
};

export default Counter;
