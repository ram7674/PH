import React from "react";
import "./disclaimerpage.css";
import MegaNavbar from "../../components/Navbar/MegaNavbar";
import Footer from "../../components/Footer/Footer";

const Disclaimer = () => {
  return (
    <>
      {/* MegaNavbar component */}
      <MegaNavbar />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="disclaimer__main">
              <div className="disclaimer__card">
                <h3>Disclaimer</h3>
                <p>
                  All the information displayed, transmitted or carried by
                  Prasad Hospitals and its related websites including, but not
                  limited to, directories, guides, news articles, opinions,
                  reviews, text, photographs, images, illustrations, profiles,
                  audio clips, video clips, trademarks, service marks and the
                  like, collectively the “Content”, are protected by the
                  copyright and other intellectual property laws and be informed
                  that the content of the same is not intended to be a
                  substitute for professional medical advice and not for
                  solicitation of business.The Content is owned by Prasad
                  Hospitals, its affiliates or third party licensors.
                </p>
                <p>
                  You may not modify, publish, transmit, transfer, sell,
                  reproduce, create derivative work from, distribute, repost,
                  perform, display or in any way commercially exploit any of the
                  Content. You agree to abide by all copyright notices and
                  restrictions attached to any Content accessed through the
                  Prasad Hospitals website and not to alter the content in any
                  way. Permitted Use you may take a single copy of the Content
                  displayed on the Prasad Hospitals for personal, non-commercial
                  use only, provided that you do not remove any trademarks,
                  copyright and any other notice contained in such Content. You
                  shall not archive or retain any Content in any form without
                  written permission. The information provided in this site for
                  the sole purpose of disseminating health information for
                  public benefit.
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

export default Disclaimer;
