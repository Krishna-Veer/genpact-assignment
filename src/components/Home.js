import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDepartment: "",
      selectedemployeeId: ""
    };
  }

  changeState(item: IDropdownOption) {
    this.setState({ selectedDepartment: item });
  }
  getDetails() {}
  clearAll() {
    this.setState({ selectedDepartment: "" });
  }

  render() {
    return (
      <div>
        <Dropdown
          placeHolder="Select Department"
          selectedKey={
            this.state.selectedDepartment !== ""
              ? this.state.selectedDepartment.key
              : undefined
          }
          label="Departments:"
          id="departmnt"
          onChanged={() => this.changeState}
          options={[
            { key: "A", text: "HR" },
            { key: "B", text: "ENGINEERING" }
          ]}
        />
        <Dropdown
          label="Employee Id:"
          placeHolder="Select an Option"
          options={[
            { key: "A", text: "Option a" },
            { key: "B", text: "Option b" },
            { key: "C", text: "Option c" },
            { key: "D", text: "Option d" },
            { key: "E", text: "Option e" },
            { key: "F", text: "Option f" },
            { key: "G", text: "Option g" }
          ]}
        />

        <button type="button" onClick={() => this.getDetails}>
          GetDetails
        </button>
        <button type="button" onClick={() => this.clearAll}>
          Clear
        </button>
        <img src="https://www.w3schools.com/images/w3schools_green.jpg" />
      </div>
    );
  }
}

export default connect(null, null)(Home);
