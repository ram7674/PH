import React from "react";
import "./choosingrighthospitalpage.css";
import bestHospitalImg from "../../../public/assets/choosing-right-hosp-img.png"

const ChoosingRightHospitalPage = () => {
  return (
    <>

      <div className="container right__mainContainer">
        <div className="row">

          <div className="col-12">
            <div className="right__knowCard">
              <h2>Choosing The Right Hospital</h2>
              <img src={bestHospitalImg} alt="blog image" />
            </div>
          </div>

          <div className="col-12 col-lg-6 rigth__hospitalsCard">
            <p>Think about the last time you bought an automobile or a major appliance. Have you done your homework? Have you compared the functionality, the promises and the costs?</p>
            <p>Just think about the last time you went to hospital, or a member of your family. You probably didn't even know that you could have had a preference. And you are unable to compare programs or efficiency, because there are few resources to help you select the best treatment.</p>
            <p>That is what Leapfrog is shifting. They will help you find the best possible care for you and your family by publicly sharing important safety and quality information. And we're helping hospitals achieve the best possible care for their patients by making consistency the standard of health care.</p>
            
            <h3>Are not all hospitals identical?</h3>
            <p>For brief, no. Patient safety and high quality are top priorities in some hospitals. Effective health care teams are minimizing infection rates, setting up checks to prevent errors and maintaining effective lines of communication between hospital staff, patients and families. But certain hospitals are trailing behind. In addition, medical errors are the country's third-leading cause of death, exceeding the number of deaths caused by car accidents, breast cancer and HIV / AIDS.</p>
            <p>Which means it's important that choosing the right hospital with a good track record to keep its patients safe from harm. The Leapfrog Hospital Safety Standard grades hospitals on the very basics of medical care, such as handwashing, the entry of medications via a computer, and the availability of trained nurses. But patient safety should be the number one priority, no matter the reason for a hospital visit.</p>

            <h3>Anything else you need to know?</h3>
            <p>See how the hospital measures mortality rates of certain high-risk operations when you or a family member needs surgery.</p>
            <p>If you're pregnant, find out how the hospital is treating high-risk deliveries on maternity care metrics such as C-sections.</p>
            <p>If you're worried about a parent or family member who is seriously ill, look at ICU staffing procedures and how the hospital avoids accidents and harmful infections.</p>
          </div>

          <div className="col-12 col-lg-6 rigth__hospitalsCard">
            <h3>Benefits of a Specialty Hospital</h3>
            <p>Patients at specialty hospitals have access to extraordinary expertise, resources and therapy programs that aren't often available at general rehabilitation centers. Specialty hospitals often have years of experience treating individuals with spinal cord injuries (SCI) and traumatic brain injuries (TBI). These dedicated facilities have patient and family support programs designed for SCI and TBI patients and the staff at specialty hospitals know how to help families navigate complex SCI/TBI care at an emotionally challenging time.</p>
            <p>And an obvious fact is that multi specialty Hospitals Offer Better Outcomes as specialty hospitals put together a custom team of physicians, therapists and caregivers, every patient's plan is designed with unprecedented expertise.</p>

            <p>Here are a few Benefits of Choosing the Right Hospital</p>
            <ul className="rigth__cont">
              <li>High-quality, focused professional personnel.</li>
              <li>Peer assistance from other hospitalized patients.</li>
              <li>Programs targeted for patients and families.</li>
              <li>Further opportunities for participating in research studies.</li>
              <li>Treatment coverage not available in most recovery facilities.</li>
              <li>Specialized support over the long term.</li>
            </ul>
            <p>And another obvious fact is that Prasad Hospitals has been proving its capabilities over the years and marking its presence as the best multi specialty hospital in Hyderabad, through state of the art facilities, world-class doctors, advance medical procedures & Research Programmes & on the whole successful & happy outcomes. If you or a loved one need medical assistance or diagnosis, lets book your appointments now.</p>
          </div>
        </div>
      </div>


    </>
  );
};

export default ChoosingRightHospitalPage;
