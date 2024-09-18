import React from "react";
import "./lifeaftersurgerypage.css";
import MegaNavbar from "../../components/Navbar/MegaNavbar";
import Footer from "../../components/Footer/Footer";
import lifeKnewImage from "../../../public/Life-after-image.png";

const LifeAfterSurgeryPage = () => {
  return (
    <>
      {/* MegaNavbar component */}
      <MegaNavbar />

      <div className="container life__mainContainer">
        <div className="row">
          <div className="col-12">
            <div className="life__Card">
              <h2>Life after Knee Ligament (ACL) Surgery</h2>
              <img src={lifeKnewImage} alt="Ligament (ACL) Surgery blog image" />
            </div>
          </div>

          <div className="col-12 col-lg-6 life__surgeryCard">
            <h3>
              Tips to come back to Sports once a Knee Ligament (ACL) Surgery.
            </h3>
            <p>
              An Anterior Cruciate Ligament (ACL) sprain or tear is one of the
              most severe traumatic knee injuries in sports. The ACL is the main
              ligament that helps stabilize the knee joint. Athletes and
              recreational enthusiasts of all ages can experience an ACL tear,
              particularly those involved in high-demand sports such as tennis,
              soccer, volleyball, and basketball. After surgery, athletes appear
              to be very anxious to return to the sport they enjoy. To help them
              return safely to their sport with minimal risk of recurrence
            </p>
            <p>
              For an Athlete after ACL return to sport guidelines and criteria,
              several short-term trials, whether using hamstrings or patellar
              tendon grafts, have shown good to excellent knee performance after
              reconstruction. The same research also shows that in the first
              year most patients (65-88%) were able to return to sport.
            </p>
            <p>
              Evidence suggests that an athlete is likely to retear an ACL 30%,
              20% on the contralateral side, and 10% on the same leg. Upon
              returning to play after an ACL-Reconstruction.
            </p>
            <h3>1. Timing isn't everything</h3>
            <p>
              The most common question of them all is, how long after Knee
              Ligament Surgery can you return to sports?
            </p>
            <p>
              Ten years ago, many patients were discharged from physical therapy
              in around three months, then released by their physician to return
              to play at the six-month mark. Instead of time-based criteria,
              evidence suggests more objective criteria. Educating patients from
              the primary day of post-op a couple of criteria-based come to play
              rather than returning right at the six-month post-op mark can
              facilitate them have realistic expectations.
            </p>
            <h3>2. Hop testing alone is NOT enough</h3>
            <p>
              A recent article has been published stating that hop testing alone
              is not enough to encourage an athlete to return to play.3 When hop
              testing is the only criterion for returning to play, a disservice
              has been done to the athlete. It is also important to use another
              objective, sport-specific criteria.
            </p>
            <p>
              Energy is likewise one of the last things to return. In the
              “prevention” tab, Athletico provides single-leg, triple hop
              screening so we have a benchmark of athletes. If that athlete ever
              gets injured, doctors at Athletico will make sure that the athlete
              does't just return to their average, but exceeds it. The
              6six-month post-op mark also reveals consistency among athletes.
            </p>
          </div>

          <div className="col-12 col-lg-6 life__surgeryCard">
            <h3>3. Fatigue</h3>
            <p>
              Since athletes are most likely to get injured when they are
              exhausted, physicians want to make sure that when tired,
              procedures for landing and cutting are flawless.
            </p>
            <h3>
              4. Athletes should not expect to play their first weekend back in
              contact in a game.
            </h3>
            <p>
              Patients are often allowed to return to non-contact training
              activity before the six-month mark or to pass all return to play
              requirements under exhaustion. It helps the athlete to begin to
              get some muscle memory and conditioning related to the sport. Most
              parents and athletes feel that “being released” means they will
              return the first week to playing a 90-minute soccer match (or
              worse, a whole tournament). Athletes must engage in multiple weeks
              of full-contact practices before attempting only a few minutes in
              each half of a game to ensure safe development when “released.”
            </p>
            <p>
              Physical therapists are working hard to mimic sport-specific
              physical therapy movements, but responsive decision-making during
              training and games is challenging and better replicated. This can
              quickly tire athletes. To minimize their risk of re-injury,
              informing patients about acceptable progression is crucial!
            </p>
            <p>
              And like most of the athletes out there, who are eager to get back
              to playing their favorite sport, if your question is What is the
              fastest way to recover from ACL surgery?
            </p>
            <h3>
              Here are the seven most important things to consider: They are
            </h3>

            <ul className="life__desc">
              <li>
                Control your pain. High levels of pain will keep you from doing
                the workouts you want.
              </li>
              <li>Reduce inflammation.</li>
              <li> Restore full straightening.</li>
              <li> Bending of your knee</li>
              <li> Do not forget the kneecap.</li>
              <li>Get the quads out there.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default LifeAfterSurgeryPage;
