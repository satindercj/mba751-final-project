import React from "react";

interface IProps {}

interface IState {}

class Settings extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Settings</h1>
      </div>
    );
  }
}

export default Settings;
