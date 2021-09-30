import { useState } from 'react'

export default function Counter() {
  const [value, setValue] = useState(0);

  
  return(
    <div>
      <h1>카운터 테스트</h1>
      <p>현재 카우터 값은 <b>{ value }</b>입니다.</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  )
}