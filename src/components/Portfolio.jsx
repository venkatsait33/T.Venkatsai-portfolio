import { LuCode2 } from "react-icons/lu";
import { BsBrowserEdge } from "react-icons/bs";
import { TracingBeam } from "../utils/TrackingBeam";
import { BackgroundGradient } from "../utils/Background-gradient";
import { info } from "../info";

const Portfolio = () => {
  return (
    <div className="relative">
      <TracingBeam>
        <div
          className="grid mx-auto max-md:grid-cols-2 lg:grid-cols-1 
      max-[960px]:w-[90%] gap-10 mt-5  max-[560px]:grid-cols-1 max-[560px]:w-[80%] mb-10 rounded-lg  "
        >
          {info.portfolio.map((item, index) => (
            <div key={index}>
              <BackgroundGradient

                className="shadow-xl rounded-3xl  bg-base-100  md:w-[70%] lg:w-full md:mx-auto hero"
              >
                <div className="flex-col hero-content lg:flex-row-reverse">
                  <figure className="">
                    <img
                      src={item.image}
                      alt="Shoes"
                      className="w-full p-2 rounded-xl"
                    />
                  </figure>
                  <div className="card card-compact scroll-smooth lg:card-side">
                    <div className=" card-body">
                      <h2 className="flex justify-center mt-4 card-title bg-[linear-gradient(90deg,#fffb00,#ff0055,#0ef)] bg-clip-text text-transparent">{item.title}</h2>
                      <p className="font-semibold line-clamp-5">{item.description}</p>
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {item.icons.map((tech, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center rounded-full btn btn-sm btn-circle btn-outline"
                          >
                            <span className="text-2xl duration-300 tooltip hover:scale-105" data-tip={tech.name}>{tech.icon}</span>

                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="mt-4 justify-evenly card-actions ">
                          <a
                            href={item.demo}
                            target="_blank"
                            className="border border-gray-700 hover:text-black dark:hover:text-white btn"
                          >
                            <p className="flex gap-2">
                              <span>
                                <BsBrowserEdge />
                              </span>{" "}
                              Live Demo{" "}
                            </p>
                          </a>
                          <a
                            href={item.code}
                            target="_blank"
                            className="border border-gray-700 btn hover:text-black dark:hover:text-white"
                          >
                            <p className="flex gap-2">
                              <span>
                                <LuCode2 />
                              </span>
                              Source Code
                            </p>
                          </a>
                        </div>
                      </div>

                    </div>
                 </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>

  );
};

export default Portfolio;
