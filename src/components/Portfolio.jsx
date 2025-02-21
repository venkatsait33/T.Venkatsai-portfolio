import { LuCode2 } from "react-icons/lu";
import { info } from "../info";
import { BsBrowserEdge } from "react-icons/bs";
import { TracingBeam } from "../utils/TrackingBeam";
import { BackgroundGradient } from "../utils/Background-gradient";

const Portfolio = () => {
  return (
    <div>
      <TracingBeam>
        <div
          className="grid mx-auto max-md:grid-cols-2 lg:grid-cols-2 
      max-[960px]:w-[90%] gap-10 mt-5  max-[560px]:grid-cols-1 max-[560px]:w-[80%] mb-10"
        >
          {info.portfolio.map((item, index) => (
            <div key={index}>
              <BackgroundGradient

                className="shadow-xl card card-compact bg-base-100 scroll-smooth lg:card-side   lg:h-[530px] md:w-[70%] lg:w-full md:mx-auto"
              >
                <div>
                  <figure className="">
                    <img
                      src={item.image}
                      alt="Shoes"
                      className="object-scale-down w-[70%]  p-2 rounded-xl"
                    />
                  </figure>
                  <div className=" card-body">
                    <h2 className="flex justify-center mt-10 card-title">{item.title}</h2>
                    <p className=" max-sm:text-sm line-clamp-5">{item.description}</p>
                    <div>
                      <div className="justify-evenly card-actions ">
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
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>

  );
};

export default Portfolio;
