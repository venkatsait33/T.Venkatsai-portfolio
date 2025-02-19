import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import cv from "../assets/cv.png";
import { Link } from "react-router-dom";
import certificate from '../assets/Certificate of Completion - Tumma Venkata Sai (1)_page-0001.jpg'
import Portfolio from "./Portfolio";
import Card from "./Card";
import { AnimatedContainer } from "../utils/AnimatedContainer";
import StarBorder from "../utils/StarBorder";
import { BackgroundLines } from "../utils/Background-lines";
const Home = () => {
  return (
    <div>
      <div className="flex px-5 mt-2 mb-2 sm:flex-wrap " id="title">
        <div className="grid grid-cols-2 mt-2 mb-4 max-[560px]:grid-cols-1 max-[560px]:place-items-center">
          <article className="p-10 text-center max-[560px]:w-full  justify-center items-center">
            <BackgroundLines >
              <h1 className="text-2xl flex flex-wrap gap-4 place-items-center font-medium tracking-wide max-[560px]:text-3xl">
                Hi, I &apos;m{" "}
                <span className="text-3xl animate-charcter text-slate-500">
                  T Venkata Sai
                </span>
                <span className="hand">🤚</span>
              </h1>
              <ul>
                <li className="mt-5 text-base tracking-wide">
                  Front-End Developer
                </li>
                <li className="mt-5 text-base tracking-wide">
                  passionate about creating beautiful and functional websites.
                </li>

                <li className="mt-5 text-lg tracking-wide">
                  <span>📧</span> &nbsp;venkatsait33@gmail.com
                </li>
              </ul>

              <ul className="flex items-center justify-center p-3 mx-auto mt-10 gap-14 place-items-center">
                <li>
                  <a href="https://github.com/venkatsait33" target="_blank" className=" tooltip" data-tip="Git-Hub">
                    <FaGithubSquare className="w-8 h-8 duration-300 text-slate-500 " />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/venkatsai-t/"
                    target="_blank"
                    className=" tooltip" data-tip="LinkedIn"
                  >
                    <FaLinkedin className="w-8 h-8 duration-300 text-slate-500 " />
                  </a>
                </li>
              </ul>


              <div className="flex items-center justify-center gap-6">
                <Link to="/contactForm" >
                  <StarBorder
                    as="button"
                    className="custom-class"
                    color="cyan"
                    speed="5s"
                  >
                    Contact Me
                  </StarBorder>
                </Link>

                <a href="https://drive.google.com/file/d/1DQRLb0Fh_XRL8sLsSMOOgj6RQ2UC1EU9/view?usp=sharing" target="_blank"
                >
                  <StarBorder
                    as="button"
                    className="custom-class"
                    color="cyan"
                    speed="5s"
                  >
                    view Resume
                  </StarBorder>

                </a>
              </div>
            </BackgroundLines>



          </article>
          <article className="w-[100%] max flex items-center justify-center text-center">
            <img
              src={cv}
              alt=""
              className="w-[80%] object-cover block max-[560px]:w-[50%] sm:place-items-center"
            />
          </article>

        </div>

      </div>
      <div className="m-2">
        <Card />
      </div>
      <div>
        <div className="p-2 m-2">
          <h1 className="mb-2 text-xl tracking-widest text-center uppercase text-cent max-sm:text-sm">Internship</h1>

          <AnimatedContainer reverse={false} direction='vertical' distance={100}>
            <div className="mb-5 shadow-2xl lg:card-side card bg-base-100 lg:h-[420px] md:w-[70%] lg:w-full md:mx-auto ">
              <figure className="lg:w-[50%]">
                <img
                  src={certificate}
                  alt="Internship-certificate"
                  className="p-4 mb-2 rounded-lg "
                />
              </figure>
              <div className="card-body lg:w-[50%] ">
                <h2 className="card-title">Web Development Intern</h2>
                <p> Zummit Infolabs</p>
                <p>JULY 2024 - DEC 2024 </p>
                <p className="">
                  Worked as a Web Development Intern at Zummit Infolabs for 5 months, contributing to the development of a Blogs Page based on Figma designs. Utilized ReactJS, TailwindCSS, DaisyUI, and Firebase for user authentication and data storage, with deployment on Vercel. Gained hands-on experience with Agile methodology, team collaboration, and delivering high-quality web solutions. This experience sharpened my technical and professional skills while enhancing my understanding of UI/UX-focused development.
                </p>
              </div>

            </div>
          </AnimatedContainer>
        </div>

      </div>

      <div className="p-2 m-2">
        <h1 className="mb-2 text-xl tracking-widest text-center uppercase text-cent max-sm:text-sm">Project</h1>
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
