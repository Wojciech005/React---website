// import React from 'react';
import React, { Component } from 'react'
import '../styles/ContactPage.css'
import {Prompt} from 'react-router-dom'


 class ContactPage extends Component {
     state = {
         value: "",
         isEmpty: true
     }

     handleSubmit = (e) => {
         e.preventDefault();
         this.setState({
             value: "",
             isEmpty: true
            
         })

     }

     handleChange = (e) => {
         if(e.target.value.length > 0) {
            this.setState({
                value: e.target.value,
                isEmpty: false
            })
         } else {
            this.setState({
                value: e.target.value,
                isEmpty: true
            })
        }
        
     }

    render() {
        return (
            <div className="contact">
                <form onSubmit = {this.handleSubmit}> 
                    <h3>Write to us!</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="write message.." ></textarea>
                    <button>send!</button>
                </form>
                <Prompt 
                when={!this.state.isEmpty}
                message={'no finished form, do you want to leave ?'}
                />
            </div>
        )
    }
}


export default ContactPage;