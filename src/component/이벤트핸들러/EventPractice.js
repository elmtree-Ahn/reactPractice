import { useEffect, useState } from 'react' 

function EventPractice() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUserName = e => {
    setUsername(e.target.value);
  }
  const onChangeMessage = e => {
    setMessage(e.target.value);
  }
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  }

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick()
    }
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      {/* 사용자명 입력 */}
      <input 
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUserName}
      />
      {/* 메세지 입력 */}
      <input 
        type="text"
        name="message"
        placeholder="내용을 입력하세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button
        onClick={onClick}>
        확인
      </button>
    </div>

  )
}

export default EventPractice