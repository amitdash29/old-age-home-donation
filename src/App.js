import { useEffect } from "react";
import "./App.css";
// import child from "./img/child.jpg";

function App() {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_LejpNF3LknlI2L";
      rzpPaymentForm.appendChild(script);
    }
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            AMIT FOUNDATION
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active bhh" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="tm1.jpg"
              height="400"
              width="300"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block carousel-text ">
              <h5>Support us with your Donation</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="tm3.jpg"
              height="400"
              width="300"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h5>Helping people by charity is the human thing we can do</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="tm2.jpg"
              height="400"
              width="300"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h5>Be the smile of somebody's face</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="signup mt-4">
        <h3> SignUp</h3>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
      <form id="rzp_payment_form"></form>

      <section>
        <div className="containerA">
          <h1 className="text-center text-capitalize p-4">about us </h1>
          <hr className="w-25 mx-auto " />

          <div className="row mb-5">
            <div className="col-lg-6 col-md-6 col-12 bbgg ">
              <h1>Amit Foundation </h1>
              <hr />
              <p className="guchu">
                Blessing of elderly people are very important in our life .But
                now-a-days nobody is understanding the importance of their old
                parents .So there is need of this old age home to provide
                support to the elderly people for rest of their life .They need
                more emotional support than that of monetary help .You can also
                visit us and spend time with them and make them feel special .
                If you can donate some money whatever possible in your part it
                will be a great help to us .
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-12 ">
              <img
                src="ttp.jpg"
                className="img-fluid"
                // height="200"
                // width="400"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary">
        <div>
          <article className="py-5 text-center">
            <div>
              <h3 className="display-4 text-white">+91 1234567876</h3>
              <p>Kindly help us </p>
              <button className=" btn btn-warning">Contact Now</button>
            </div>
          </article>
        </div>
      </section>
      <section>
        <footer>
          <p className="text-center bg-dark text-white">
            @copyright AmitFoundation.com 2023
          </p>
        </footer>
      </section>
    </>
  );
}

export default App;
