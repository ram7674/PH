import React from "react";
import "./aboutpneumoniapage.css";
import PneumoniaImage from "../../../public/assets/All-You-Should-Know-About-Pneumonia-blog-image.png"

const AboutPneumoniaPage = () => {
  return (
    <>

      <div className="container all__mainContainer">
        <div className="row">
          <div className="col-12">
            <div className="all__knowCard">
              <h2>All You Should Know About Pneumonia</h2>
              <img src={PneumoniaImage} alt="Pneumonia blog image" />
            </div>
          </div>

          <div className="col-12 col-lg-6 about__pneumoniaCont">
            <h3>All You Should Know About Pneumonia</h3>
            <p>
              There's more common infection than you think. It causes more than
              one million hospitalizations each year, and more than 50,000
              deaths. It is an infection in one or both of your lungs which
              causes inflammation and build-up of fluid. It can be causing
              oxygen exchange issues. Here's what you ought to know about this
              dangerous illness.
            </p>
            <h3>
              The chances of getting pneumonia can be substantially reduced.
            </h3>
            <p>
              Each year, get a flu shot to help prevent seasonal influenza. Flu
              is a common cause of pneumonia and flu avoidance is a good way to
              reduce the risk. Additionally, those at risk may get a
              pneumococcal pneumonia vaccine.
            </p>
            <h3>Anyone can get pneumonia.</h3>
            <p>
              While some people are at greater risk than others, pneumonia may
              happen to anyone. The signs include fatigue, wheezing, cough,
              chills, rapid breathing, chest pain, loss of appetite and malaise,
              or a general sense of weakness or sickness.
            </p>
            <h3>Pneumonia can have more than 30 different causes.</h3>
            <p>
              There are many germs that can cause infection, such as bacteria,
              viruses, and fungi. Understanding the cause of pneumonia is
              significant, as treatment for it depends on its cause
            </p>
            <h3>It can be deadly.</h3>
            <p>
              It can be serious, and can lead to death. The risks include
              respiratory failure, sepsis and lung abscess and are more likely
              to affect older adults, young children, those with a weakened
              immune system and those with other medical problems.
            </p>
            <h3>Good health habits can fight pneumonia.</h3>
            <p>
              Washing your hands, having a healthy diet, getting adequate rest,
              exercising regularly and not smoking are all activities that can
              help you get sick from bacteria, viruses and other causes of
              respiratory diseases. Good health habits also promote quick
              recovery when you become sick.
            </p>
          </div>

          <div className="col-12 col-lg-6 about__pneumoniaCont">
            <h3>Symptoms : </h3>
            <p>
              The symptoms can be mild to life-threatening. They can include:
            </p>
            <ul className="all__about__desc">
              <li>coughing that may produce phlegm (mucus)</li>
              <li>fever</li>
              <li>sweating or chills</li>
              <li>
                shortness of breath that happens while doing normal activities
                or even while resting
              </li>
              <li>chest pain that's worse when you breathe or cough</li>
              <li>feelings of tiredness or fatigue</li>
              <li>loss of appetite</li>
              <li>nausea or vomiting</li>
              <li>headaches</li>
            </ul>
            <p>It triggers a number of infectious agents. Many cases can be treated without complications, with proper recognition and care.</p>
            <p>Stopping your antibiotics early can cause the infection to fail to clear completely for bacterial infections. That means your pneumonia can return. Antibiotic stoppage early may also lead to antibiotic resistance. Infections which are resistant to antibiotics are harder to treat.</p>
            <p>With at-home care, viral infection typically recovers within one to three weeks. You may need antivirals, in some cases. Antifungal medications treat fungal pneumonia, and may require longer treatment times.</p>
            <p>Visit a Doctor at the earliest if you notice any symptoms or are concerned about possibilities of infection.</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutPneumoniaPage;
