import React from "react";
import "./refundpolicy.css";
import MegaNavbar from "../../components/Navbar/MegaNavbar";
import Footer from "../../components/Footer/Footer";

const RefundPolicy = () => {
  return (
    <>
      {/* MegaNavbar component */}
      <MegaNavbar />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="refund__main">
              <div className="refund__card">
                <h3>Refund Policy</h3>
                <p>
                  Prasad Hospitals accepts payment online. Payment for
                  consultation fees can be made with a debit or credit card or
                  through internet banking. Once you have paid your Service
                  Fees, you will be taken to our dependable payment gateway
                  partners. If you use a credit or debit card that you do not
                  legally own or if you permit a third party to use your
                  password or any other means of accessing your account, Prasad
                  Hospitals will keep the aforementioned information
                  confidential at all times and will not utilize or share it
                  with any of the third parties unless it is an authorized third
                  party website and/or required by law, regulation, or court
                  order. No refunds will be made against any online transaction.
                  Prasad Hospitals will not be liable in Before charging you for
                  your first or subsequent payments, Prasad Hospitas reserves
                  the right to change or implement a new pricing structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default RefundPolicy;
