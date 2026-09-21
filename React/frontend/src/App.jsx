import Card from './Card.jsx';  
function App() {
    return (
      <div>
        <Card title="Student Info">
          <p>Name: Arjun</p>
          <p>Roll No: 101</p>
        </Card>
        <Card title="Course">
          <p>React JS</p>
          <button>Enroll</button>
        </Card>
      </div>
    );
  }
export default App;