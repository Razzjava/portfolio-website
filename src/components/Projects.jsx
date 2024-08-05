


export default function Projects(){

return (
    <>
        <div className="row align-items-md-stretch">
            <div className="col-md-6">
                <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                    <h2>Dental Application</h2>
                    <p>Finding a dentist can be tough, but using this dental application willl allow you to register
                        for open spots for dentists in your area.</p>
                    <button className="btn btn-outline-light" type="button" ><a href={"https://github.com/Razzjava/Dental-Application-Spring-Boot"}>View the code</a></button>
                </div>
            </div>

                <div className="col-md-6">
                    <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                        <h2>Rant</h2>
                        <p>A space for people to post their rants anonymously.</p>
                        <button className="btn btn-outline-light" type="button"><a
                            href={"https://github.com/Razzjava/rant"}>View the code</a>
                        </button>
                    </div>
                </div>
            </div>
    </>
)
}


