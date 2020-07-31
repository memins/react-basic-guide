import React, { Component } from "react";
import classses from "./person.module.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import ProTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenicated</p>
        ) : (
          <p>Please Log in</p>
        )}

        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          ref={this.inputElementRef}
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: ProTypes.func,
  name: ProTypes.string,
  age: ProTypes.number,
  changed: ProTypes.func,
};

export default withClass(Person, classses.Person);
