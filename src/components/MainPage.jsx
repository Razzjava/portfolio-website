import Projects from "./Projects.jsx";
import Banner from "./Banner.jsx";

function MainPage(){

    return(
        <>

            <body>



            <main>
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
                            <iframe width="560" height="315"
                                    src="https://www.youtube-nocookie.com/embed/X23wDsAbJEM?si=_-bRec7WcEc697K1"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>

                    <h1 className="display-5 fw-bold">Projects</h1>
                    <div className="row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="h-100 p-5 text-bg-dark rounded-3">
                            <h2>Change the background</h2>
                                <p>Swap the background-color utility and add a `.text-*` color utility to mix up the
                                    jumbotron look. Then, mix and match with additional component themes and more.</p>
                                <button className="btn btn-outline-light" type="button">Example button</button>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                                <h2>Add borders</h2>
                                <p>Or, keep it light and add a border for some added definition to the boundaries of
                                    your content. Be sure to look under the hood at the source HTML here as we've
                                    adjusted the alignment and sizing of both column's content for equal-height.</p>
                                <button className="btn btn-outline-secondary" type="button">Example button</button>
                            </div>
                        </div>
                    </div>

                    <footer className="pt-3 mt-4 text-body-secondary border-top">
                        Social Links
                    </footer>
                </div>
            </main>
            <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

            </body>
        </>
    )
}

export default MainPage;