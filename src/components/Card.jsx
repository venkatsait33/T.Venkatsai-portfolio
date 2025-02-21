
import { InfiniteMovingCards } from "../utils/Infinite-Moving-Cards";
import { skill } from "./Skillcons";

const Card = () => {
    return (
        <div className="max-[560px]:max-w-sm mx-auto  max-md:max-w-screen-md max-lg:w-full  rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h1 className="mb-2 text-xl tracking-widest text-center uppercase text-cent max-sm:text-sm">Skills</h1>
            <InfiniteMovingCards
                items={skill}
                direction="left"
                speed="slow"
            />
        </div>
    )
}

export default Card