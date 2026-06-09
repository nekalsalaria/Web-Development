const Data = () => {
  const arr = [
    {
      name: 'John',
      age: 30,
      city: 'New York'
    }
  ]
  return (
    <div>
      {arr.map((item, index) => (
        <div key={index}>
          <h3>Name: {item.name}</h3>
          <p>Age: {item.age}</p>
          <p>City: {item.city}</p>
        </div>
      ))}
    </div>
  )
}

export default Data
