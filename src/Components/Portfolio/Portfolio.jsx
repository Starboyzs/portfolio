import React from "react";
import "./Portfolio.css";
import CTA from "../Header/CTA";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    text: "Google Keeper App Clone",
    alt: "Google Keeper App Clone image",
    link1: "https://github.com/Starboyzs/keeper-app-clone.git",
    link2: "https://taupe-frangipane-b94292.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    text: "React Portfolio Website",
    alt: "React Portfolio website image",
    link1: "https://github.com/Starboyzs/portfolio.git",
    link2: "https://ayowebsite.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    text: "Api Fetcher",
    alt: "React Portfolio website image",
    link1: "https://github.com/Starboyzs/TalentQl.git",
    link2: "https://lustrous-muffin-573780.netlify.app/",
  },

  {
    id: 4,
    image: IMG4,
    text: "Omni Food Website",
    alt: "OMNI FOOD image",
    link1: "https://github.com/Starboyzs/foodPalace.git",
    link2: "https://heartfelt-sorbet-a59dc6.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    text: "My Site",
    alt: "My-site image",
    link1: "https://github.com/Starboyzs/my-site.git",
    link2: "https://harmonious-faloodeh-c9d49e.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    text: "Phone Number Combination",
    alt: "Number combination image",
    link1: "https://github.com/Starboyzs/numberCombination.git",
    link2: "https://startling-ganache-b2c2c6.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.alt} />
              </div>
              <h3>{item.text}</h3>

              <div className="portfolio__item-cta">
                <CTA
                  text1={"Repository"}
                  text2={"live Demo"}
                  link1={item.link1}
                  link2={item.link2}
                  target={"_blank"}
                />
              </div>
            </article>
          );
        })}

        {/* <a href="https://github.com/Starboyzs/Starboyzs.github.io" className="btn ">Repository</a>
        <a href="https://github.com/Starboyzs/Starboyzs.github.io" className="btn btn-primary">Live Demo</a> */}

        {/* <article className='portfolio__item'>
        <div className='portfolio__item-image'> 
        <img src= {IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Starboyzs/Starboyzs.github.io" className="btn ">Repository</a>
        <a href="https://github.com/Starboyzs/Starboyzs.github.io" className="btn btn-primary">Live Demo</a>
        </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'> 
        <img src= {IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Starboyzs/Starboyzs.github.io" className="btn">Repository</a>
        <a href="https://github.com/Starboyzs/Starboyzs.github.io" className="btn btn-primary">Live Demo</a>
        </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'> 
        <img src= {IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Starboyzs/Starboyzs.github.io" className="btn ">Repository</a>
        <a href="https://github.com/Starboyzs/Starboyzs.github.io" className="btn btn-primary">Live Demo</a>
        </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'> 
        <img src= {IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Starboyzs/Starboyzs.github.io" className="btn ">Repository</a>
        <a href="https://github.com/Starboyzs/Starboyzs.github.io" className="btn btn-primary">Live Demo</a>
        </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'> 
        <img src= {IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Starboyzs/Starboyzs.github.io" className="btn ">Repository</a>
        <a href="https://github.com/Starboyzs/Starboyzs.github.io" className="btn btn-primary">Live Demo</a>
        </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
