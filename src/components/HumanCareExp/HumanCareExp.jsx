import React, { useState, useEffect } from 'react';
import './HumanCareExp.css';
import { Link } from 'react-router-dom';

const factsData = [
  { title: 'YEARS OF EXPERIENCE', value: 30 },
  { title: 'HOSPITALS', value: 3 },
  { title: 'DOCTORS', value: 50 },
  { title: 'BEDS', value: 350 },
  { title: 'SERVING CITIES', value: 2 },
  { title: 'LAKH LIVES TOUCHED', value: 1.5 },
];

const HumanCareExp = () => {
  
  const [facts, setFacts] = useState(
    factsData.map(fact => ({ ...fact, animatedValue: 0 }))
  );

  useEffect(() => {
    const animateValues = facts.map((fact, index) => {
      const increment = fact.value / 100; // Adjust the speed here
      return setInterval(() => {
        setFacts(prevFacts => {
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

    return () => animateValues.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <div className='container human__expCont'>
      <div className='row'>

        {/* facts content section */}
        <div className='col-12 col-lg-7'>
          <div className='facts__mainCard'>
            <h3 className='facts__title'>Human Care Experts</h3>
            <p className='facts__desc'>
                The seeds of our origin were sown as early as 1953 when the founder
                of the Manipal Education and Medical Group (MEMG), Dr. T.M.A. Pai,
                established the Kasturba Medical College in Manipal, Karnataka.
                Manipal Hospitals as an entity came into existence in 1991 with the
                launch of our 650-bed flagship hospital at Old Airport Road,
                Bangalore. Today, we are one of India's leading healthcare groups
                with over 9500 beds across 33 hospitals.
            </p>
            <p className='facts__desc'>
                Our core values are built around the thought of patient-first and
                that each doctor at Manipal Hospitals is a human care expert, going
                above and beyond the call of duty as they live by the belief that
                every single life is priceless. When they embark on these journeys,
                stories emerge - stories of grit, determination and never giving
                up. Join us on a journey to discover stories that reinforce your
                belief in 'Life's On'
            </p>
            <Link to='/doctors-list'>
                <button className='find__expertdr'>Find a Doctor</button>
            </Link>
          </div>
        </div>

        {/* facts  section */}
        <div className='col-12 col-lg-5 p-0'>
          <div className='experince__mainCard'>
            {facts.map((item, index) => (
              <div key={index} className='fact__card'>

                <div className='circle__card'></div>
                <div className='facts__contCard'>
                    <h3 className='fact__value'>
                    {item.animatedValue.toFixed(item.title === 'LAKH LIVES TOUCHED' ? 1 : 0)}
                    </h3>
                    <p className='fact__title'>{item.title}</p>
                    <hr className='hr__line' />
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
