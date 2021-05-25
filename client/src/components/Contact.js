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
                </div>
            </section>
        )

    }
}

export default Contact;