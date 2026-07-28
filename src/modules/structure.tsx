import { Intro } from "./sections.tsx";
import { About } from "./sections.tsx";
import { Portfolio } from "./sections.tsx";
import { Ares } from "./sections.tsx";
import { Works } from "./sections.tsx";
import { Technology } from "./sections.tsx";
import { Another } from "./sections.tsx";

const Main = function() {
    return (
        <main>
            <Intro/>
            <About/>
            <Portfolio/>
            <Ares/>
            <Works/>
            <Technology/>
            <Another/>
        </main>
    )
}

export default Main;