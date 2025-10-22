import Linkedinicon from "../icons//linkedinicon"
import Githubicon from "../icons/githubicon"
function navbar() {

    return (
    <div className="flex flex-row-reverse pt-7 pr-10 gap-10 w-full h-[15vh] sticky top-0 bg-linear-to-b from-dark to-dark/0 md:bg-transparent">
        <div className="h-10 w-10">
            <a href="https://www.linkedin.com/in/ebberaiber" target="_blank" rel="noopener noreferrer">
            <Linkedinicon/>
            </a>
        </div>
        <div className="h-10 w-10">
            <a href="https://github.com/EbbeRaiber" target="_blank" rel="noopener noreferrer">
            <Githubicon/>
            </a>
        </div>
    </div>
    
    )
}

export default navbar