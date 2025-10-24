
import { InfiniteMovingCards } from "../utils/Infinite-Moving-Cards";
import { skill } from "./Skillcons";

const Card = () => {
    return (
        <div className="max-[560px]:max-w-sm mx-auto  max-md:max-w-screen-md max-lg:w-full  rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <h1 className="mb-4 text-4xl tracking-widest text-center uppercase text-cent max-sm:text-sm bg-[linear-gradient(90deg,#fffb00,#ff00ea,#0ef)] bg-clip-text text-transparent">Skills</h1>
            <InfiniteMovingCards
                items={skill}
                direction="left"
                speed="slow"
            />
        </div>
    )
}

export default Card