import React, { useState, useEffect } from "react";
import "./HumanCareExp.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faHospital,
  faUserMd,
  faBed,
  faCity,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";

const factsData = [
  { title: "YEARS OF EXPERIENCE", value: 30, icon: faCalendarAlt },
  { title: "HOSPITALS", value: 3, icon: faHospital },
  { title: "DOCTORS", value: 50, icon: faUserMd },
  { title: "BEDS", value: 500, icon: faBed },
  { title: "SERVING CITIES", value: 2, icon: faCity },
  { title: "LAKH LIVES TOUCHED", value: 1.5, icon: faHeartbeat },
];

const HumanCareExp = () => {
  const [facts, setFacts] = useState(
    factsData.map((fact) => ({ ...fact, animatedValue: 0 }))
  );

  useEffect(() => {
    const animateValues = facts.map((fact, index) => {
      const increment = fact.value / 100; // Adjust the speed here
      return setInterval(() => {
        setFacts((prevFacts) => {
          const newFacts = [...prevFacts];
          if (newFacts[index].animatedValue < fact.value) {
            newFacts[index].animatedValue += increment;
          } else {
            newFacts[index].animatedValue = fact.value;
            clearInterval(animateValues[index]);
          }
          return newFacts;
        });
      }, 20); // Adjust the interval time here
    });

    return () => animateValues.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="container human__expCont">
      <div className="row">
        {/* facts content section */}
        <div className="col-12 col-lg-7">
          <div className="facts__mainCard">
            <h3 className="facts__title">THE PRASAD HOSPITALS GROUP</h3>
            <p className="facts__desc">
              The idea to serve and care grew within Dr. K.V.R Prasad, the
              founder Chairman of Prasad Hospitals, until the point of
              inflection happened in 1974. Millions of people, losing lives, due
              to poverty, or lack of knowledge is what it took to ignite Dr.
              Prasad's vision into a reality — a vision where premium healthcare
              was delivered at a very affordable price, where medical excellence
              is an inevitable daily task that has to be accomplished. After
              earning the trust of thousands, it took Dr. Suma's determination
              and knowledge to take the unit to new horizons due to emphasis on
              cutting-edge technology
            </p>
            <p className="facts__desc">
              From a 50-bed single maternity and nursing facility in Warasiguda
              (formerly known as Sridevi Maternity & Nursing Home), the brand
              has become a household name in the locality, courtesy of caring
              and effective healthcare delivery under Dr. K.V. R Prasad & Dr.
              Kandipudi Suma. Prasad Hospitals, Top Hospitals in Hyderabad, now
              aims to become a multi-specialty hospital chain comprising of 500
              beds across 4 hospitals in the span of 5 years and continues to
              build upon its reputation for its humanitarian and selfless
              service.
            </p>
            <Link to="/doctors-list">
              <button className="find__expertdr">Find a Doctor</button>
            </Link>
          </div>
        </div>

        {/* facts  section */}
        <div className="col-12 col-lg-5 p-0">
          <div className="experince__mainCard">
            {facts.map((item, index) => (
              <div key={index} className="fact__card">
                <div className="circle__card">
                  {/* Display FontAwesome Icon here */}
                  <FontAwesomeIcon icon={item.icon} className="fact__icon" />
                </div>
                <div className="facts__contCard">
                  <h3 className="fact__value">
                    {item.animatedValue.toFixed(
                      item.title === "LAKH LIVES TOUCHED" ? 1 : 0
                    )}
                  </h3>
                  <p className="fact__title">{item.title}</p>
                  <hr className="hr__line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanCareExp;
