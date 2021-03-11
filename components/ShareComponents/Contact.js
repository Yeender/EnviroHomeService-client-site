import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        console.log(e.target);
        emailjs.sendForm('service', 'template', e.target, 'user').then(
            (result) => {
                if (result) {
                    alert('✅Your message has been sent successfully✅');
                }
                console.log(result.text);
            },
            (error) => {
                if (error) {
                    alert('⚠Sorry, your message could not be sent. Please try again🔄');
                }
                console.log(error.text);
            }
        );
    };
    return (
        <div className="contact-area d-flex align-items-center">
            <section className="container-xl">
                <div className="row  align-items-center">
                    <div className="col-md text-center">
                        <h2>ContactUs</h2>
                        <h5> helpmeottawareno@gmail.com</h5>

                        <h6> 1+ (613)-861-1566</h6>
                    </div>
                    <div className="col-md">
                        <div className="row">
                            <form onSubmit={sendEmail} className="col s12">
                                <div className="row mb-0">
                                    <div className="input-field col s6">
                                        <input
                                            name="firstName"
                                            required
                                            id="first_name"
                                            type="text"
                                            className="validate"
                                        />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            name="lastName"
                                            required
                                            id="last_name"
                                            type="text"
                                            className="validate"
                                        />
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="row mb-0">
                                    <div className="input-field col s6">
                                        <input
                                            name="phone"
                                            required
                                            id="phone"
                                            type="text"
                                            className="validate"
                                        />
                                        <label htmlFor="phone">phone</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            name="address"
                                            required
                                            id="Address"
                                            type="text"
                                            className="validate"
                                        />
                                        <label htmlFor="Address">Address</label>
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="input-field col s12">
                                        <input
                                            name="subject"
                                            required
                                            id="subject"
                                            type="text"
                                            className="validate"
                                        />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="input-field col s12">
                                        <input
                                            name="email"
                                            required
                                            id="email"
                                            type="email"
                                            className="validate"
                                        />
                                        <label htmlFor="email">email</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea
                                            name="message"
                                            type="text"
                                            id="textarea1"
                                            required
                                            className="materialize-textarea"
                                        />
                                        <label htmlFor="textarea1">Type your message here</label>
                                    </div>
                                </div>

                                <button
                                    className="btn contact-submit-btn "
                                    type="submit"
                                    value="Send"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
