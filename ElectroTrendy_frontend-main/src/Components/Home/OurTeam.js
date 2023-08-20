import React from 'react';
import './OurTeam.css';

function OurTeam() {
  return (
    <section className="ourTeam">
        <div className="title">
        <div className="redBox"></div>
        <p>Our Team</p>
      </div>
      <h1 className="text-4xl browse-by text-white">Meet Our Team</h1>
      <div className="ourTeam_cont">
        <div className="member_Card">
          <div className='memImg h-50'>
            <img
              src="https://trello.com/1/cards/64c2aca04fc09493c05bd9be/attachments/64c62f1290925d5a30509872/previews/64c62f1390925d5a3050997e/download/faten__1_-removebg-preview.png"
              alt="member1"
            
              />
              </div>
            <p className='name'>Faten Hussien</p>
            <p className='stack'>Full stack Developer</p>
        </div>
        <div className="member_Card">
          <div className='memImg h-50'>
            <img
              src="https://trello.com/1/cards/64c2acadde97dfe2b8faf1aa/attachments/64c634b53aa01ae3a79162f7/previews/64c634b53aa01ae3a791652e/download/IbrahimJamalAbuFarha.png"
              alt="member2"
       
              />
              </div>
            <p className='name'>Ibrahim Abu Farha</p>
            <p className='stack'>Full stack Developer</p>
        </div>
        <div className="member_Card">
          <div className='memImg h-50' >
            <img
              src="https://media.discordapp.net/attachments/1125737184180326440/1135537281822900234/image.png?width=733&height=532"
              alt="member1"
            
              />
              </div>
            <p className='name'>Mohammad Awad</p>
            <p className='stack'>Full stack Developer</p>
        </div>
        <div className="member_Card">
          <div className='memImg h-50'>
            <img
              src="https://trello.com/1/cards/64c60edc16eeb4435732fb53/attachments/64c631ba4c7a118d37a41ddb/previews/64c631bb4c7a118d37a41f25/download/Abdelrahman_Haroun.jpeg.jpg"
              alt="member1"
            
              />
              </div>
            <p className='name'>Abdelrahman Haroun</p>
            <p className='stack'>Full stack Developer</p>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
