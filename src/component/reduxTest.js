import { connect } from 'react-redux'

function ReduxTest(props) {
  return (
    <>
      <div className="test">
        <h1>{props.state[0].name}</h1>
        <h2>{props.state[0].job}</h2>
        <h3>나이 {props.state[0].age}</h3>
        <button onClick={()=>{ props.dispatch({ type : '나이증가'}) }}>+</button>
        <button onClick={()=>{props.dispatch({ type : "나이감소"})}}>-</button>
      </div>
    </>
  )
}

function getStore(state) {
  return {
    state: state
  }

}

export default connect(getStore)(ReduxTest)