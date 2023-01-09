import React from "react";
import { ContactSection } from "./Contact.styled";

const Contact: React.FC = () => {
    return (
    <ContactSection>
        <h4 className="title">03. What's Next? </h4>
        <h2 className="main__title">Get in Touch</h2>
        <p className="content">
        Although I’m not currently looking for 
        any new opportunities, my inbox is always 
        open. Whether you have a question or just
        want to say hi, I’ll try my best to get 
        back to you!.
        </p>

        <a href="/" className="contact__btn"> Say Hello</a>

        <div className="flex flex-col designed__by_section">
            <p>Inspired by <a href="/">Brittany Chiang</a></p>
            <p>Built By Ahmed Nadjib</p>
            <p>2023</p>
        </div>
    </ContactSection>
    )
};

export default Contact;
