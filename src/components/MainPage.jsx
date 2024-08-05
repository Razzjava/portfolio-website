import Projects from "./Projects.jsx";
import Banner from "./Banner.jsx";

function MainPage(){

    return(
        <>


            <main data-bs-theme="auto">


                <div className="container py-4">
                    <header className="pb-3 mb-4 border-bottom">
                        <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">

                            <span className="fs-4">Welcome to RazzCodes</span>
                        </a>
                    </header>

                    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Youtuber & Software Engineer</h1>
                            <p className=" fs-4 align-items-end">Tune in to my youtube channel for the best
                                advice in becoming a
                                great software engineer, all
                                learn't through experience.</p>
                            <p> My number 1 advice to all is to practice coding as often as you can, as this will build
                                your skills
                                to become a better engineer. Once you are able to master problem solving, you will be
                                able to pick up new tools
                                and languages, visit my youtube channel below to learn more:</p>
                            <i className="bi bi-youtube h-70 m-3"><a
                                href={"https://www.youtube.com/@RazCodes404"}>RazzCodes</a></i>
                        </div>
                    </div>

                    <h1 className="display-5 fw-bold">Projects</h1>

                    <Projects></Projects>


                    <footer className="pt-3 mt-5 text-body-secondary border-top align-items-md-stretch ">
                        <i className="bi bi-youtube h-70 m-3"><a
                            href={"https://www.youtube.com/@RazCodes404"}>RazzCodes</a></i>
                        <i className="bi bi-tiktok m-3"><a href={"https://www.tiktok.com/@razcodes"}>RazzCodes</a></i>
                        <i className="bi bi-twitch"><a href={"Twitch.tv/codedaily1"}>RazzCodes</a></i>
                    </footer>
                </div>
            </main>


        </>
    )
}

export default MainPage;