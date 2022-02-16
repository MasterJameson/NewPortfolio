import React, { Component, ReactNode } from "react";

class ClassComponentApp extends Component<{}, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      fName: ''
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  changeColor() {
    const test = document.getElementById('fName');
    if (test) test.style.color = "red";
  }

  componentDidMount() {
    this.changeColor();
  }

  handleUpdate() {
    this.setState({ fName: 'bagain' })
  }
  componentDidUpdate() {
    console.log('prevProps');
  }

  render(): ReactNode {
    return (
      <React.Fragment>
        {
          <>
            <input type="text" value={this.state.fName} />
            <button onClick={this.handleUpdate}>Change it</button>
          </>
        }
      </React.Fragment>
    )
  }

}

export default ClassComponentApp;