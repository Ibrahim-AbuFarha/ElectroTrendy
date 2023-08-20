import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="aboutUs">
      <div className="Container_About">
        <div className="about_Img">
          <img
            src="https://media.discordapp.net/attachments/1125737184180326440/1134816297553760396/imac-apple-mockup-app-38544.png?width=997&height=662"
            alt="AboutUs"
          />
        </div>
        <div className="content_AboutUs">
          <h2 className="text-4xl">About Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <br />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here.
          </p>
          <div className="about_Icons">
            <i class="fa-brands fa-facebook" style={{ color: "black" }}></i>
            <i class="fa-brands fa-twitter" style={{ color: "black" }}></i>
            <i class="fa-brands fa-instagram" style={{ color: "black" }}></i>
            <i
              class="fa-brands fa-linkedin-in"
              style={{ color: "#ffffff" }}
            ></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
