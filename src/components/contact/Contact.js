import { useRef } from "react";
import { Container } from "react-bootstrap";
// import contactImg from "../../assets/contact-img.svg";
import "animate.css";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";
// import 'bootstrap/dist/css/bootstrap.min.css';
import TrackVisibility from "react-on-screen";
import "./contact.css";
import Map from "./Map"
export const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g3ta5xs",
        "template_s3jrfmq",
        form.current,
        "nD7ASYI3nEKBeIe2a"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <>
      <Navbar />
      <section className="contact" >
        <div className="cont">

          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__fadeIn" : ""
                }
              >
                <h1 className="herocontact">Let's start on the right foot.</h1>
                <h3 className="con">Contact Us Today</h3>
                <form ref={form} onSubmit={sendEmail} className="form1">

                  <div classeName="inline">
                    <div size={12} sm={6} className="px-1">
                      <input
                        type="text" name="user_name"
                        placeholder="Name*"
                      />
                    </div>

                    <div className="email">
                      <div className="email1">
                        <div size={12} sm={6} className="px-11" >
                          <input
                            className="em"
                            type="email" name="user_email"
                            // value={formDetails.email}
                            placeholder="Email* "
                          // onChange={(e) =>
                          //   onFormUpdate("email", e.target.value)
                          // }
                          />
                        </div>
                      </div>
                      <div className="email2">
                        <div size={12} sm={6} className="px-11">
                          <input className="phone"
                            type="tel" name="phone"
                            // value={formDetails.phone}
                            placeholder="Phone."
                          // onChange={(e) =>
                          //   onFormUpdate("phone", e.target.value)
                          // }
                          />
                        </div>
                      </div>
                      <div size={12} sm={6} className="px-11"   >
                        <input
                          className="url"
                          type="text" name="url"
                          // value={formDetails.lasttName}
                          placeholder="URL"
                        // onChange={(e) =>
                        //   onFormUpdate("lastName", e.target.value)
                        // }
                        />
                      </div>
                    </div>
                    <div size={12} className="px-12">
                      <textarea
                        rows="6"
                        // value={formDetails.message}
                        placeholder="Message"
                        name="message"
                      // onChange={(e) =>
                      //   onFormUpdate("message", e.target.value)
                      // }
                      ></textarea>

                      <select name="select">
                        <option value="select1" >
                          Select*
                        </option >
                        <option value="fournisseur">
                          Fournisseur
                        </option>
                      </select>


                      <button type="submit" value="send" className="btt">
                        <span>
                          Send
                        </span>
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            )}
          </TrackVisibility>

        </div >
      </section >
      <section>

        <Map />

      </section>
      <section>

        <Footer />

      </section>
    </>
  );
};
export default Contact;
