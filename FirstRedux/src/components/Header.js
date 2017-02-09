/**
 * Created by Joey on 1/19/17.
 */
import React, {Component, PropTypes} from 'react';
import './Header.css'

export default class Header extends Component {
  static propTypes = {
    todos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  handleClick = () => {
    const {ajaxTodo} = this.props.actions;
    ajaxTodo(1,2);
  }

  usernameChange = (id) => {
    const {usernameChangeTodo} = this.props.actions;
    usernameChangeTodo(0,this.refs.username.value);
  }

  passwordChange = () => {
    const {passwordChange} = this.props.actions;
    passwordChange(0,this.refs.password.value);
  }

  render() {
    const {todos} = this.props;
    //const {loginTodo, inputTodo} = actions;
    return (
      <div>
        <input type="text" ref='username' value={todos.username} onChange={this.usernameChange} />
        <input type="password" ref='password' value={todos.password} onChange={this.passwordChange} />
        <input type="button" id="submit" value="login" readOnly onClick={this.handleClick(todos.id)}/>
      </div>
    );
  }
}
