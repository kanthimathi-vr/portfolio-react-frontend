// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://portfolio-react-backend-fo6t.onrender.com/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully! Thank you.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Failed to send message: ${result.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-purple-50 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-600 mb-4">📬 Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-8">
          If you’d like to collaborate or just say hello, feel free to drop a message below or connect via social platforms.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xl mx-auto mb-8">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 text-white font-semibold py-4 rounded-lg transition-colors duration-300 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status && (
          <p className={`mt-4 text-lg font-semibold ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-6 text-xl mt-8">
          <a href="mailto:mathi.v.r.1990@gmail.com" className="text-purple-600 hover:text-purple-700 transition-colors" aria-label="Email link">
            📧 Email
          </a>
          <a href="https://github.com/kanthimathi-vr" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors" aria-label="GitHub profile">
            🐙 GitHub
          </a>
          <a href="https://linkedin.com/in/kanthimathi" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors" aria-label="LinkedIn profile">
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
