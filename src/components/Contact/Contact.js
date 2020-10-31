import React from 'react';
import { Navbar } from 'react-bootstrap';
import emailjs from 'emailjs-com'
import Header from '../Header/Header';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_nqem9sc', e.target, 'user_lXCrYTeKU7lV92HbtNAuO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return (
        <div>
            <Header></Header>
            
            <div className="container">
            <form onSubmit={sendEmail}  >

            <h1 style={{color:" #192841", textAlign:"center", margin:"20px 0px 20px 0px"}} >Get In Touch</h1>
                   
                    <div className="row " style={{marginLeft:"110px"}} >
                        
                        <div   className="col-8 form-group mx-auto  ">
                            <input width="300px" style={{width:"500px"}} type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" style={{width:"500px"}} className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" style={{width:"500px"}} className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" style={{width:"500px"}} id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;