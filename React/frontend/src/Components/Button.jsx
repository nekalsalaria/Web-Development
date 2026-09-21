function App() {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Enter pressed!");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default App;