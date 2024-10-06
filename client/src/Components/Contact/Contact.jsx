import React, { useRef } from "react";
import './Contact.css'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const notify = () => toast("Sent Succesfully");

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm("service_hpi3smd", "template_rknl3nt", form.current, {
         publicKey: "e2Rkts_Hjj1g8tGHj",
       })
       .then(
         () => {
           console.log("SUCCESS!");
         },
         (error) => {
           console.log("FAILED...", error.text);
         }
     );
     
   };
  return (
    <div className="body " id="contact">
      <div className="justify-content-center align-items-center text-center">
        <h2>Contact Me</h2>
      </div>
      <p className="text-center">
        <strong>Lets Keep In Touch</strong>
      </p>
      <div className="form-area mx-5 mt-0">
        <div className="container ">
          <div className="row single-form g-0 rounded">
            <div className="col-sm-12 col-lg-6 rounded">
              <div className="left rounded align-items-center justify-content-center ">
                <h2>
                  <span>Contact Me</span>
                  <br />
                  Bussiness Enquiries
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="right">
                <i className="bi bi-caret-left-fill  icon1"></i>

                <form ref={form} onSubmit={sendEmail}>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Name"
                      required
                      name="from_name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter your email adress"
                      required
                      name="from_email"
                    />
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                      required
                      name="message"
                    ></textarea>
                    <label for="floatingTextarea2">Massage</label>
                  </div>
                  <button
                    type="Submit"
                    className="btn btn-success float-end my-2 rounded-pill"
                    value="Send"
                    onClick={notify}
                  >
                    Send
                  </button>
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
