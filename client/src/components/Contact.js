import React from "react";

const initialFormValue = {
    name:"",
    email:"",
    message:""
}

class Contact extends React.Component{
    state={
        name:"",
        email:"",
        message:""
    }
    updateFormValue = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm = e =>{
        e.preventDefault();
        //do api call to the server about this feedback or contact
        this.setState(initialFormValue);
    }
    render(){
        return(
            <section>
                <div>
                    <section>
                        <form onSubmit={this.submitForm}>
                            <label>NAME
                                <input
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.updateFormValue}
                                />
                            </label>
                            <label>EMAIL
                                <input
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.updateFormValue}
                                />
                            </label>
                            <label>MESSAGE
                                <input
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.updateFormValue}
                                />
                            </label>
                            <button type="submit">SEND MESSAGE</button>
                            <button>CLEAR</button>
                        </form>
                    </section>
                    <section>
                        <section>
                            <div>
                                <span>Icon</span>
                                <h3>Email</h3>
                                <a>aasd@gmail.com</a>
                            </div>
                        </section>
                        <section>
                            <div>
                                <span>Icon</span>
                                <h3>Phone</h3>
                                <span>xxx-xxx-xxxx</span>
                            </div>
                        </section>
                        <section>
                            <div>
                                <span>Icon</span>
                                <h3>Address</h3>
                                <span>
                                    1234 Somewhere Road #5432
                                    <br></br>
                                     Nashville, TN 00000
                                    <br></br>
                                     United States of America
                                </span>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        )

    }
}

export default Contact;