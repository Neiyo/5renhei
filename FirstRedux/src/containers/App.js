/**
 * Created by Joey on 1/19/17.
 */

import React,{PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
// import Footer from '../components/Footer'
// import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

const App = ({todos,actions}) => (
  <div>
      <Header todos={todos} actions={actions} />
  </div>
);

App.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

/* 将组件升级为 与store实时通信的组件
 *
 * mapStateToProps   组件将会监听 Redux store 的变化
 * mapDispatchToProps 返回一个对象，每个定义在该对象上的函数都必须是Redux action creator
 * http://www.redux.org.cn/docs/react-redux/api.html
 *
 */

//将state树上的props注入组件
const mapStateToProps = state => ({
   todos: state.todos
});

//将actionCreator注入组件
const mapDispatchToProps = dispatch => ({
   actions: bindActionCreators(TodoActions, dispatch)
});

//最后返回一个注入了state和actionCreator的拓展组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
