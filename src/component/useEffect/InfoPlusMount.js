import { useEffect, useState } from 'react'

export default function InfoPlusMount() {

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [age, SetAge] = useState();
  useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
  }, []);


  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickName = e => {
    setNickname(e.target.value);
  }

  const onChangeAge = e => {
    SetAge(e.target.value)
  }

  return(
    <div>
      <h1>input 값 출력하기 마운트 될 때만드 </h1>
      <div className="inputList">
        <input value={name} onChange={onChangeName}type="text" />
        <input value={nickname} onChange={onChangeNickName} type="text" />
        <input value={age} onChange={onChangeAge} type="text" />
      </div>
      <div className="resultList">
        <div className="name">
          이름 : {name}
        </div>
        <div className="nickName">
          닉네임 : {nickname}
        </div>
        <div className="age">
          나이 : {age}
        </div>
      </div>
    </div>
  )
}