import { useState } from 'react';
function RegistrationForm() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      course: "React"
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent page reload
      console.log("Form Data:", formData);
      alert(`Registered: ${formData.name} (${formData.email})`);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <select name="course" value={formData.course} onChange={handleChange}>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
          <option value="Angular">Angular</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
}
export default RegistrationForm;