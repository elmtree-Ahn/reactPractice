import { useEffect, useState } from 'react'

function EventPractice() {
  
  const [inputData, setInputData] = useState('');


  return (
    <div>
      <h1>이벤트 테스트</h1>
      <input type="text" placeholder="내용을 입력하세요" onChange={(e) => {
        setInputData(e.target.value);
      }}/>
      <button onClick={() => {
        alert(inputData);
      }}>확인</button>
    </div>
  )
  
}

export default EventPractice