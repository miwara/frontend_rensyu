'use strict';
import React from 'react';

let ENTER_KEY_CODE = 13;

let TodoTextInput = React.createClass({
  propsTypes: {
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onSave: React.PropTypes.func.isRequired,
    value: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  _save: function(event) {
    this.props.onSave(this.state.value);
    this.setState({value: ''});
  },

  _onChange: function(event) {
    this.setState({value: event.target.value});
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  },

  render: function() {
    return (
     <input
       className={this.props.className}
       id={this.props.id}
       placeholder={this.props.placeholder}
       onBlur = {this._save}
       onChange = {this._onChange}
       onKeyDown = {this._onKeyDown}
       value={this.state.value}
       autoFocus={true}
     />
    );
  }
});

module.exports = TodoTextInput;
