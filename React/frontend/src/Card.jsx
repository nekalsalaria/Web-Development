  function Card({ title, children }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "16px", margin: "8px" }}>
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    );
  }


  export default Card;