// Contact page to share your email and profiles
export default function Contact() {
    return (
      <section className="max-w-xl mx-auto py-12">
        {/* Page title */}
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="mb-4">Feel free to reach out via email or my social profiles!</p>
        <ul className="space-y-2">
          {/* Add your real details below */}
          <li>Email: <a href="mailto:ashlesha@example.com" className="text-blue-600 underline">ashlesha@example.com</a></li>
          <li>GitHub: <a href="https://github.com/ashlesha" className="text-blue-600 underline">github.com/ashlesha</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/ashlesha" className="text-blue-600 underline">linkedin.com/in/ashlesha</a></li>
        </ul>
      </section>
    );
  }
  