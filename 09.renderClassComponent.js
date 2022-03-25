class TypesOfVehicles extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Vehicles:</h1>
          <Car />
          <Motorcycle />
        </div>
      );
    }
}


ReactDOM.render(<TypesOfVehicles />, document.getElementById("node-id"));