import {Routes, Route, Link, useParams } from 'react-router-dom';

  function Home() { return <h1>🏠 Home Page</h1>; }
  function About() { return <h1>📖 About Page</h1>; }
  function Contact() { return <h1>📞 Contact Page</h1>; }

  function StudentDetail() {
    const { id } = useParams(); // Read :id from URL
    return <h2>Student ID: {id}</h2>;
  }

  function App() {
    return (
      <>
        <nav>   
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student/:id" element={<StudentDetail />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </>
    );
  }

export default App;