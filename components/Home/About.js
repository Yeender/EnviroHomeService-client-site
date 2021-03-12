import React from 'react';

const About = () => {
    const hello = 44;
    return (
        <div className="about-area d-flex align-items-center">
            <section className="container-xl">
                <div className="row d-flex align-items-center">
                    <div className="col-md">
                        <h2>About Enviro Home Service</h2>
                        <p>
                            We are Trained professionals who can help you renovate your house. We
                            are a Proud and local Canadian owned company. We offer any cosmetic
                            renovation work you may need done in your home such as bathrooms,
                            kitchens and basements! If it is Quality work you are looking for, we
                            have you well covered! With over 10 years of experience, we have been
                            handling projects with the skill and professionalism our clients have
                            come to respect. We always stand behind our work, with customer
                            satisfaction being our #1 priority.
                        </p>
                    </div>
                    <div className="col-md">
                        <img
                            className="img-fluid"
                            src="https://i.imgur.com/ngQPTuI.jpg"
                            alt="about img"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
