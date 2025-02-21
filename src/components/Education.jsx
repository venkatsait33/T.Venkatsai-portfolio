const Education = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-2 m-2 mx-auto ">
        <p className="text-xl tracking-widest text-center text-purple-200 uppercase max-sm:text-base">
          Education
        </p>
        <ul className="grid grid-cols-3 gap-4 p-2 max-sm:grid-cols-1 ">
          <li className="flex flex-col gap-1 p-4 shadow-2xl card h-[250px] border-2 border-purple-200 ">
            <p
              className="mt-4 text-lg font-semibold text-center max-sm:text-base"
              data-prefix=""
            >
              &nbsp; B.TECH
            </p>
            <div className="flex flex-col max-[560px]:flex-wrap max-[560px]:mx-auto max-[560px]:place-content-between p-1 m-1 max-sm:text-sm text-center">
              <p>CGPA: 7.13</p> &nbsp;
              <p className="max-sm:text-sm max-[560px]:ml-2">
                Year of Passing:2022
              </p>{" "}
              &nbsp;
              <p className="max-sm:text-sm max-[560px]:ml-6">
                GIET Engineering collage,Rajahmundary,Andhra Pradesh
              </p>
            </div>
          </li>
          <li className="flex flex-col gap-1 shadow-2xl max-sm:text-sm card h-[250px] border-2 border-purple-200">
            <p className="mt-4 text-lg font-semibold text-center max-sm:text-base " data-prefix="">
              &nbsp;Diploma
            </p>
            <div className="flex flex-col gap-1 max-[560px]:flex-wrap max-[560px]:mx-auto  max-[560px]:place-content-between p-1 m-1 text-center">
              <p className=" max-[560px]:ml-2 max-sm:text-sm">
                Percentage: 68.3
              </p>{" "}
              &nbsp;
              <p className="max-sm:text-sm max-[560px]:ml-2">
                Year of Passing:2018
              </p>{" "}
              &nbsp;
              <p className="max-sm:text-sm max-[560px]:ml-6">
                Mandava Institute of Engg & Tech,Jaggayyapet,Andhra Pradesh
              </p>
            </div>
          </li>
          <li className="flex flex-col gap-1 shadow-2xl card h-[250px] border-2 border-purple-200">
            <p
              className="mt-4 text-lg font-semibold text-center max-sm:text-base "            
            >
              &nbsp; SSC
            </p>
            <div className="flex text-center flex-col max-[560px]:flex-wrap max-[560px]:mx-auto max-[560px]:place-content-between p-1 m-1 max-sm:text-sm">
              <p>CGPA: 7.3</p>&nbsp;
              <p className="max-sm:text-sm max-[560px]:ml-2">
                Year of Passing:2014
              </p>{" "}
              &nbsp;
              <p className="max-sm:text-sm max-[560px]:ml-6">
                SSS Model School,Penuganchiprolu,Andhra Pradesh
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
