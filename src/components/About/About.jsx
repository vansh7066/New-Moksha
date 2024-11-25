import React from 'react'
import './about.css'
import img1 from '../Assests/img1.webp'
import img2 from '../Assests/mk2.webp'
import img3 from '../Assests/mk3.webp'

const About = () => {
  return (
    <div className='about'>
      <div className='header'>
        <h1> ABOUT US<hr /> </h1>
      </div>
      <div className='para'>
        <p>In the tranquil serenity of death, there lies a poignant reality often overlooked—the unclaimed ashes of departed souls. Utsav Foundation, guided by compassion and the ethos of karmic seva, undertakes the noble task of honoring these forgotten souls through their Karmic seva.</p>
        <p>Central to the philosophy of Utsav Foundation is the concept of karmic seva—the belief that every action, no matter how small, has a ripple effect in the universe. By performing the last rites for unclaimed ashes, the Foundation fulfills a crucial karmic seva, ensuring that these souls find peace in their journey beyond.</p>
      </div>
      <div className='heading1'>
        <h2>Why we do it?</h2>
        <p>Through Karmic seva, Utsav Foundation not only honors the departed but also fosters a sense of compassion and unity in the community.
           By coming together to perform these rites. It calls upon us to remember those who have departed without a trace, urging us to cherish our loved ones
           and honor the memory of those we have lost. In honoring the unclaimed, foundation honor the essence of humanity itself.</p>
           <br />
        <p>Foundation, through its Karmic Service, ensures that even those who depart without kin receive 
          the final rites prescribed by Hindu scriptures, guiding their souls on their onward journey with dignity and respect.</p>
      </div>
      <div className="heading2">
        <h2>How we do it?</h2>
        <p>Each journey is met with care and mindfulness, as the foundation strives to provide a final resting place that is dignified and respectful.</p>
        <p>The Utsav Foundation's Karmic seva extends to the crematorium, where they compassionately take care of unclaimed ashes to ensure dignified last rites.
          Our service begins by respectfully collecting the mortal remains and ashes, preparing them for immersion at the sacred Ganga in Haridwar. Following the 
          traditional rituals, our team engages with local pujaris to perform the necessary rites, ensuring that each soul finds peace and closure in its final journey.</p>
        <p>Until now, 600 immersions have been fulfilled by the team members. Our main mission is to provide Karmic services 
          so that no one is deprived of the salvation and to help them attain “MOKSH”.</p>
      </div>
      <div className='img'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  )
}

export default About