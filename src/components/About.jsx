import { MdMail } from "react-icons/md";
import Education from "./Education";
import { FaAddressBook } from "react-icons/fa";
import { BiMobile } from "react-icons/bi";

const About = () => {
  return (
    <div
      className=" max-[560px]:w-[90%] max-[560px]:text-xl max-[560px]:leading-8 max-[560px]:p-2 max-[560px]:m-2 
    max-[970px]:w-[90%] w-full  flex flex-col gap-2 p-2 m-2 "
    >
      <ul className="flex flex-col gap-2 p-2 m-2 mockup-code">
        <li className="text-xl tracking-widest text-center text-purple-200 uppercase">
          About Me
        </li>
        <p className="text-2xl font-semibold text-orange-300">
          &nbsp; Tumma.Venkata Sai
        </p>
        <p className="flex items-center gap-1 text-lg max-sm:text-sm">
          &nbsp;
          <MdMail /> tvenkatsai33@gmail.com
        </p>
        <p className="flex items-center gap-1 text-lg max-sm:text-sm">
          &nbsp;
          <BiMobile /> +91 8184804933
        </p>
        <p className="flex flex-wrap items-center gap-1 text-lg max-sm:text-sm">
          &nbsp;
          <FaAddressBook /> Jaggayyapet, NTR Krishna<small>(dt)</small>, Andhra
          Pradesh, India - &nbsp; 521175
        </p>

        <p className="flex flex-col gap-2 p-2 mb-2 text-base tracking-wider max-sm:text-sm ">
          <span>
            Frontend Developer | ReactJS | JavaScript | MERN Stack
          </span>
          <span>
            Hey there! I’m Tumma Venkata Sai, a passionate Frontend Developer with a love for building clean, user-friendly web applications. I recently completed an intensive ReactJS course, where I worked on hands-on projects that sharpened my skills in JavaScript, ReactJS, TailwindCSS, and DaisyUI.
          </span>
          {/* <span>
            During my internship at Zummit Infolabs, I had the opportunity to develop a Scientific Blog Page, where I worked with ReactJS, Firebase for authentication and data storage, and TailwindCSS for styling. I also collaborated using GitHub and deployed projects on Vercel, gaining real-world experience in modern web development.
          </span> */}
          <span>
            {/* Beyond my internship,  */}
            I’ve worked on exciting projects like:
          </span>
          <span>
            - MERN Learning Management System (LMS) – A full-stack e-learning platform with user authentication, course management, secure payments (Stripe), and media uploads (Cloudinary).
          </span>

          <span>
            - AI-powered Resume Maker – A tool that generates professional resumes using Gemini AI, with data stored in Firebase Firestore.
          </span>

          <span>
            - MERN Chatty App – A real-time chat application built using MongoDB, Express.js, React.js, and Node.js, featuring real-time messaging, user authentication (JWT), and WebSocket integration for seamless communication.
          </span>

          <span>
            I’m always eager to learn, take on new challenges, and collaborate with like-minded professionals. If you’re looking for a . motivated, fast-learning frontend developerwho loves bringing ideas to life, let’s connect!
          </span>
        </p>
      </ul>
    </div>
  );
};

export default About;
