
import './App.scss'
import micFoto from './assets/mic.jpg'
import aboutImage from './assets/person.png'
import facebookIcon from './assets/facebook.svg'
import linkedinIcon from './assets/linkedin.svg'
import githubIcon from './assets/github.svg'
import webIcon from './assets/webD.png'
import rightIcon from './assets/right.svg'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [sticky, setSticky] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;
      if(scroll == 0){
          setSticky(true)
        } else {
          setSticky(false)
      }
  });
  })

  return (
    <div className="App">

      {/*  // ! nav */}
      <nav className={sticky ? '' : 'sticky'}>
        <div className="navbar container px-1">
            <div className="left">
              <h1>O</h1>
            </div>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>              
        </div>
      </nav>
      {/*  // ! end nav --------------------------------------- */}



      {/* // ! section - 1 */}
      <section className="sectionOne" id='home'>
        <div className="container one px-1">
          <div className='name'>
            <h1>I'M OMADBEK</h1>
            <p>web developer</p>
          </div>
        </div>
      </section>
      {/* // ! end section - 1 --------------------------------------- */}



      {/* // ! section - 2 */}
      <section className="sectionTwo" id='about'>
        <div className="container px-1">

          <h1 className='title on'>About Me</h1>

          <div className="top">
            <div className="left">
              <div className="image">
                <img src={aboutImage} alt="" />
              </div>
            </div>
            <div className="right">
              <h1 className='title'>About Me</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque unde tempora neque asperiores provident veniam suscipit illum. Voluptates, odit doloremque qui doloribus sit dolorem quibusdam illum recusandae reprehenderit delectus placeat.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit ea dolor vel suscipit error quam id quibusdam. Natus, quasi, expedita reiciendis doloribus, soluta dignissimos maxime veritatis ad illo nulla sed. Nisi, soluta. Quod ab voluptatem, accusantium ut numquam excepturi itaque inventore error, unde nesciunt corporis quo. Doloribus voluptate fuga quis vitae incidunt minima inventore?</p>

              <div className="social">
                <span>Share: </span>
                <a href="">
                  <img src={facebookIcon} alt="" />
                </a>
                <a href="">
                  <img src={linkedinIcon} alt="" />
                </a>
                <a href="">
                  <img src={githubIcon} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="bottom">
            
            <div className="cardBlock">
              <div className="card">
                <div className="left">
                  <img src={webIcon} alt="" />
                </div>
                <div className="right">
                  <h1>Web Design</h1>
                  <p>I brought to just trying that with my boss; I'd get kicked out on the spot. But who knows would be the best</p>
                </div>
              </div>
            </div>

            <div className="cardBlock">
              <div className="card">
                <div className="left">
                  <img src={webIcon} alt="" />
                </div>
                <div className="right">
                  <h1>Web Design</h1>
                  <p>I brought to just trying that with my boss; I'd get kicked out on the spot. But who knows would be the best</p>
                </div>
              </div>
            </div>

            <div className="cardBlock">
              <div className="card">
                <div className="left">
                  <img src={webIcon} alt="" />
                </div>
                <div className="right">
                  <h1>Web Design</h1>
                  <p>I brought to just trying that with my boss; I'd get kicked out on the spot. But who knows would be the best</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* // ! end section - 2 --------------------------------------- */}



      {/* // ! section - 3 */}
      <section className="sectionThree" id='portfolio'>
        <div className="container three px-1">

          <div className="portfolio">
            <h1 className='title'>Portfolios</h1>
          </div>

          <div className="categories">
              <div className="buttonGroup">
                <button>All</button>
                <button>Marketing</button>
                <button>Web</button>
                <button>Graphics</button>
              </div>
          </div>

          <div className="content">

            <div className="card">
              <img src={micFoto} alt="" />
            </div>

            <div className="card">
              <img src={micFoto} alt="" />
            </div>

            <div className="card">
              <img src={micFoto} alt="" />
            </div>

            <div className="card">
              <img src={micFoto} alt="" />
            </div>

            <div className="card">
              <img src={micFoto} alt="" />
            </div>

            <div className="card">
              <img src={micFoto} alt="" />
            </div>

          </div>

        </div>
      </section>
      {/* // ! end section - 3 --------------------------------------- */}




      {/* // ! section - 4 */}
      <section className="sectionFour" id='contact'>
        <div className="container px-1">
          <div className="top">
            <h1 className='title'>Get In Touch</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <p>Soy boyi, Altinkul, Andijan, Uzbekistan</p>
              <p>omadbek.web@gmail.com</p>
              <p>+998 - 99 - 519 - 41 - 37</p>

              <div className="social">
                <span>Share: </span>
                <a href="">
                  <img src={facebookIcon} alt="" />
                </a>
                <a href="">
                  <img src={linkedinIcon} alt="" />
                </a>
                <a href="">
                  <img src={githubIcon} alt="" />
                </a>
              </div>

            </div>
            <div className="right">
              <div className="form">
                <input className='inp' type="text" placeholder='Name Here*' />
                <input className='inp' type="text" placeholder='Email Here*' />
              </div>
              <textarea rows='4' className='inp' placeholder='Message Here*'></textarea>
              <div className="send">
                <button>
                  SEND MESSAGE
                  <img src={rightIcon} alt="" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* // ! end section - 4 --------------------------------------- */}

    </div>
  )
}

export default App