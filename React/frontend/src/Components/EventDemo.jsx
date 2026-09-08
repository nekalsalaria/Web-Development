function EventDemo() {
    const handleClick = () => {
      alert("Button was clicked!");
    };

    const handleMouseOver = (e) => {
      console.log("Mouse over:", e.target.tagName);
    };

    return (
      <div>
        <button onClick={handleClick}>Click Me</button>
        <p onMouseOver={handleMouseOver}>Hover over me</p>
      </div>
    );
  }

export default EventDemo;