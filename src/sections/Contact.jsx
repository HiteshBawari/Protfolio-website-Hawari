export default function Contact() {
  return (
    <section id="contact" className="panel section">
      <h2>Contact</h2>

      <form className="contact-form">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button className="btn magnetic">Send</button>
      </form>
    </section>
  );
}