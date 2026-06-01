function Data(props) {
    return (
      <div className="flex flex-col border-4 p-4 m-4">
        <h3>Name: {props.name}</h3>
        <p>Age: {props.age}</p>
        <p>City: {props.city}</p>
      </div>
    );
  }

export default Data;