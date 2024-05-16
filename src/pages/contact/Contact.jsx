import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <span>
        We'd love to hear from you! Whether you have questions, feedback, or
        just want to say hi, there are several ways to connect with the Bloggy
        team:
      </span>
      <ul className="contactList">
        <li className="contactListItem">
          <h4>Shoot us an Email:</h4>
          <span>Our friendly support team is always happy to assist you. Reach out to us at bloggyservice@gmail.com and we'll get back to you as soon as possible.</span>
        </li>
        <li className="contactListItem">
          <h4>Join the Community:</h4>
          <span>Bloggy thrives on its community spirit! We have a dedicated forum where you can connect with other bloggers, share tips, and participate in discussions. You can find the forum by clicking</span>
          <a href="https://youtu.be/dQw4w9WgXcQ?si=_YmDJORh1kphczhZ">(here)</a>
        </li>
        <li className="contactListItem">
          <h4>Social Media:</h4>
          <span>Follow us on social media for the latest Bloggy updates, inspiring stories, and fun contests! We're on Twitter and Discord - just search for #BloggyHQ.</span>
        </li>
      </ul>
      <span>We appreciate your interest in Bloggy! We're here to help you have a successful and enjoyable blogging experience.</span>
    </div>
  );
};

export default Contact;
