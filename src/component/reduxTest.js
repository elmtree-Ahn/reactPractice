import { connect } from 'react-redux'

function ReduxTest(props) {
  return (
    <>
      <div className="test">
        <h1>{props.state[0].name}</h1>
        <h2>{props.state[0].job}</h2>
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