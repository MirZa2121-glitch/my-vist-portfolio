import { Intro } from "./sections.tsx";
import { Portfolio } from "./sections.tsx";
import { About } from "./sections.tsx";
import { Works } from "./sections.tsx";

const Main = function() {
    return (
        <main>
            <Intro/>
            <Portfolio/>
            <About/>
            <Works/>
        </main>
    )
}

export default Main;