import React, { useState } from "react";
import "./infertilitytabs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClinicMedical,
  faUserMd,
  faFlask,
  faVial,
} from "@fortawesome/free-solid-svg-icons";

const InfertilityTabs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {/* faq-item1 */}
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(0)}>
          <FontAwesomeIcon icon={faClinicMedical} className="infer__icon" />
          <h3>Department of Reproductive Endocrinology and Infertility</h3>
          <span className={`arrow ${activeIndex === 0 ? "open" : ""}`}>+</span>
        </div>
        {activeIndex === 0 && (
          <div className="faq-answer">
            <div className="facil__mainContainer">
              <h3>Facility</h3>
              <p>
                Prasad Hospitals, a well-known Best Infertility Hospitals in
                Hyderabad, have the State of Art Infertility facility.
              </p>
              <img
                src="/assets/facility-img1.jpg"
                alt="facility image"
                className="facil__img1"
              />
              <p>
                IVF Lab set up with GMP standards, Class 10000 and SS Grade 216
                walls with Electrostatic flooring (polyvinyl with copper
                lining).
              </p>
              <div className="facil__cardcont">
                <div className="facil__leftCard">
                  <img
                    src="/assets/facility-img2.jpg"
                    alt="lab imgage2"
                    className="facil__cardimg"
                  />
                  <img
                    src="/assets/facility-img3.jpg"
                    alt="lab imgage3"
                    className="facil__cardimg"
                  />
                </div>
                <div className="facil__rightCard">
                  <img
                    src="/assets/facility-img4.jpg"
                    alt="lab imgage4"
                    className="facil__cardimg5"
                  />
                  <img
                    src="/assets/facility-img5.jpg"
                    alt="lab imgage5"
                    className="facil__cardimg5"
                  />
                  <img
                    src="/assets/facility-img6.jpg"
                    alt="lab imgage6"
                    className="facil__cardimg5"
                  />
                  <img
                    src="/assets/facility-img7.jpg"
                    alt="lab imgage7"
                    className="facil__cardimg5"
                  />
                  <img
                    src="/assets/facility-img8.jpg"
                    alt="lab imgage8"
                    className="facil__cardimg5"
                  />
                </div>
              </div>
              <p>
                Point of care counseling for male and female partners with
                reproductive failures.
              </p>
            </div>

            <div className="ovula__container">
              <div className="ovula__card">
                <img src="/assets/ovulation-img1.jpg" alt="ovulatio image1" />
                <img src="/assets/ovulation-img2.jpg" alt="ovulatio image2" />
              </div>
              <div className="ovula__desc">
                <h3>Ovulation Induction</h3>
                <ul>
                  <li>
                    Ovulation Induction is a process that helps the ovaries in
                    releasing eggs, to improve the chances of conception through
                    artificial insemination (IUI) or intercourse.
                  </li>
                  <li>
                    Women with low hormone levels for ovulation or women who are
                    not ovulating at all may be aided with this process.
                  </li>
                  <li>
                    Medication through tablets or injections may be required to
                    stimulate hormones.
                  </li>
                  <li>
                    Intrauterine insemination (IUI) is the process of injecting
                    the washed sperm directly into the uterus with a catheter.
                  </li>
                  <li>
                    For the females, who are aged under 30 years have the
                    optimal chances with IUI, whereas, for the males, about 15
                    million per ml of TMS (Total Motile Sperm) is optimal.
                  </li>
                  <li>
                    It's a very simple and less time-consuming process and has a
                    higher success rate.
                  </li>
                </ul>
              </div>
            </div>

            <div className="ivf__container">
              <div className="ivf__imageCard">
                <img src="/assets/ivf-img1.png" alt="ivf image" />
              </div>
              <div className="ivf__desc">
                <h3>IVF (Since 2004)</h3>
                <ul>
                  <li>
                    In-vitro Fertilization (IVF) is the technique in which
                    fertilization of male and female gametes (sperm and ovum)
                    occurs outside the human female body.
                  </li>
                  <li>
                    Prasad Hospitals have the best infertility specialists in
                    Hyderabad and also have a Sterile environment for
                    maintaining embryos and gametes using CO2 incubator.
                  </li>
                  <li>
                    Vitrification or cryopreservation facilities for cold
                    storage of gametes (sperm and egg).
                  </li>
                </ul>
              </div>
            </div>

            <div className="icsi__container">
              <div className="icsi__imageCard">
                <img src="/assets/icsi-img1.jpg" alt="icsi image" />
                <img src="/assets/icsi-img2.jpg" alt="icsi image" />
              </div>
              <div className="icsi__desc">
                <h3>a. ICSI (since 2004)</h3>
                <ul>
                  <li>
                    ICSI is the sophisticated method of IVF and it is the
                    process of injecting a single sperm into an egg for
                    fertilization.
                  </li>
                  <li>
                    The solution for reproductive issues related to severe male
                    infertility by Intra Cytoplasmic sperm injection (ICSI).
                  </li>
                  <li>
                    Practiced since 2004 with a higher success rate at our
                    center.
                  </li>
                  <li>
                    Useful for infertile couples either having too few motile
                    and morphologically normal sperm or where eggs cannot easily
                    be penetrated by sperm. It is also can be used for those
                    males who have undergone a vasectomy.
                  </li>
                </ul>
              </div>
            </div>

            <div className="preimpl__container">
              <div className="preimpl__imageCard">
                <img
                  src="/assets/pre-implantation-img.jpg"
                  alt="Pre implantation image"
                />
              </div>
              <div className="preimpl__desc">
                <h3>
                  b. Pre-implantation Genetic Diagnosis (PGD) / Pre-implantation
                  Genetic Screening (PGS)
                </h3>

                <ul>
                  <li>
                    Pre-implantation Genetic Diagnosis (PGD) is a process in
                    which one or two cells from an embryo on Day 3 or Day 5 are
                    extracted and the cells genetically analyzed.
                  </li>
                  <li>
                    Couples who are at a high risk of having an abnormal number
                    of chromosomes or who have a history of single gene defects
                    or chromosome defects are ideal candidates for this
                    procedure.
                  </li>
                  <li>
                    It is used to diagnose a large number of genetic defects at
                    present.
                  </li>
                  <li>
                    Preimplantation Genetic Screening (PGS) is the process just
                    to denote the procedures but not look for a disease
                    specifically, but PGD is the technique that is used to
                    identify the embryos which are at risk.
                  </li>
                  <li>
                    The PGD technique can study the DNA of embryos or eggs where
                    certain mutations for genetic diseases can be selected.
                  </li>
                  <li>
                    Prasad Hospitals have the Best Infertility Specialists in
                    Hyderabad and trained genetic counselors who would meet with
                    you to discuss your genetic issues and your odds of having
                    to do PGD.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* faq-item2 */}
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(1)}>
          <FontAwesomeIcon icon={faUserMd} className="infer__icon" />
          <h3>Department of Andrology and Male Infertility</h3>
          <span className={`arrow ${activeIndex === 1 ? "open" : ""}`}>+</span>
        </div>
        {activeIndex === 1 && (
          <div className="faq-answer">
            <div className="depert__mainCont">
              <h3>Sensitivity Issues: What Men Need to Know</h3>
              <div className="depert__imgCard">
                <img src="/assets/male-infertility-img1.jpg" alt="Reasons of Male Infertility img" />
              </div>
              <p>
                Establishing a family is a primary desire for many. But about 19
                million Indian couples aren't having the possibility to succeed
                the desire. Male Infertility is one of the most common issues
                faced which is caused due to the quantity, shape and semen
                sample is too a difficult issue for men. High DNA fragmentation
                in the sperm is also one of the major issue of ceasing the
                ability to become a father.
              </p>
              <h3>Reasons of Male Infertility</h3>
              <p>Inability to conceive a child can be due to</p>
              <ul>
                <li>
                  Problems with sexual function (difficulty with ejaculation,
                  low libido, erectile dysfunction & painful erection).
                </li>
                <li>Swelling or lump or pain in one or both testicles.</li>
                <li>Recurrent respiratory infections.</li>
                <li>Hormonal abnormalities like reduced body hair growth.</li>
                <li>
                  Low sperm count (total sperm count less than 20 million per
                  mm3 of the ejaculate).
                </li>
              </ul>

              <h3>Our Doctors Team Can Help!</h3>
              <ul>
                <li>
                  Prasad Hospitals have the Infertility Specialists In
                  Hyderabad, who are very patience in listening and
                  understanding the very sensitive issues faced by many men.
                </li>
                <li>
                  Our Doctors' best counseling sessions and a perfect timely
                  medication have helped many men to get away from fertility
                  issues.
                </li>
                <li>
                  Technology came as a boon for both male infertile patients and
                  Doctors as well.
                </li>
                <li>
                  Whenever necessary, the Electro ejaculator supports a
                  comfortable sample collection.
                </li>
              </ul>
              <div className="depert__imgCard">
                <img src="/assets/male-infertility-img2.jpg" alt="Reasons of Male Infertility img2" />
              </div>

              <p>
                As fertility can be impacted by so many variables, every
                clinical check-up begins with a detailed history and physical
                exam and an ultrasound scan. Although at times tedious, the
                questions asked by the physician or urologist help direct the
                next steps by narrowing the possible diagnoses and subsequent
                treatments. Semen analysis is a critical step in the work-up of
                an infertile couple. These samples will be analyzed for several
                parameters that affect fertility, such as semen volume, sperm
                concentration, shape and size of the sperms. Our team of the
                Andrology lab has the state of art Computer Assisted Sperm
                Analysis (CASA) equipment.
              </p>

              <div className="depert__imgCard">
                <img src="/assets/male-infertility-img3.jpg" alt="Reasons of Male Infertility img3" />
              </div>

              <ul>
                <li>
                  Many chronic conditions can also affect a man's fertility.
                </li>
                <li>
                  Deficiency in sugar levels results in nerve damage and this
                  might be responsible for coordinating ejaculation.
                </li>
                <li>
                  Liver cirrhosis can also impact fertility, as the condition is
                  often associated with hormonal imbalances that can interfere
                  with sperm production.
                </li>
                <li>
                  Drugs like alcohol, heroin, cocaine, and marijuana also cause
                  a great impact on the quality and quantity of sperm
                  production.
                </li>
                <li>
                  Antibiotics, antacids, antidepressants, gout, and blood
                  pressure medications can also impact fertility.
                </li>
                <li>
                  Exposure to lead, and mercury (heavy metals) may also
                  influence sperm production.
                </li>
              </ul>

              <p>
                All the above-mentioned conditions can lead to a lack of sex
                drive and eventually low motivation towards a normal sexual
                activity.
              </p>

              <h3>Risk Factors for Male Infertility</h3>
              <h5>Varicocele</h5>
              <ul>
                <li>
                  Made up of enlarged veins in the scrotum on one or both sides.
                </li>
                <li>
                  Veins making scrotum warm can also reduce sperm production.
                </li>
              </ul>

              <h5>
                Physical Problems With Testicles (e.g., Undescended Testicle)
              </h5>
              <ul>
                <li>
                  An undescended testicle is caused when failing to drop into
                  the normal place of the scrotum, which is found in about 3 - 4
                  % newborns.
                </li>
                <li>
                  During the first 3 months of life, about 50% of testicles do
                  drop on their own. If else it continues after three months,
                  they have to undergo treatment.
                </li>
                <li>
                  Generally, the testicles need to be cooler than normal body
                  temperature about 2 to 3 degrees.
                </li>
                <li>
                  If the testicles are too warm for a long time, there are
                  chances of failing the sperm in that testicle to mature
                  normally.
                </li>
                <li>
                  These causes Infertility problems, and the risk is more when
                  both testicles are affected.
                </li>
                <li>They also cause :</li>
                <li>Testicular Cancer in Adulthood.</li>
                <li>Testicular Torsion.</li>
              </ul>

              <h5>Blockages in the Ducts That Carry Sperm</h5>
              <ul>
                <li>
                  Some men have a problem with a blockage in ejaculatory ducts
                  from birth. These problems cause fertility issues later.
                </li>
                <li>
                  Some of the men face the lack of vas deferens which is the
                  tube carrying out sperm from the testicles.
                </li>
                <li>
                  Sperm transportation is also the issue caused due to the
                  blockage in the ducts which carries sperm from the testes to
                  the urethra.
                </li>
                <li>
                  Problems arising in sperm transportation can be classified
                  into the three categories
                </li>
                <h5>Congenital Disorders</h5>
                <ul>
                  <li>
                    Congenital disorders are birth disorders that cause male
                    fertility issues.
                  </li>
                  <li>
                    They include incomplete development of the sperm ducts,
                    atresia of the duct (natural blockage), and no seminal
                    vesicles present to store sperm.
                  </li>
                </ul>
                <h5>Acquired Disorders</h5>
                <ul>
                  <li>
                    These are caused due to a disease or infection of the
                    reproductive system.
                  </li>
                  <li>Inflammation can lead to scarring.</li>
                  <li>
                    Sperm transportation can be affected by scars in the ducts
                    leading to no place for sperm to travel.
                  </li>
                  <li>
                    During the hernia repair, motility is affected by severe
                    sperm transportation ducts.
                  </li>
                </ul>
                <h5>Functional Obstruction</h5>
                <ul>
                  <li>
                    Functional obstruction is the disorder that ceases sperm
                    movement and therefore cause male infertility.
                  </li>
                  <li>
                    This type of disorders includes conditions like nerve damage
                    caused in an accident, injury to the spinal cord affecting
                    muscular motion.
                  </li>
                  <li>
                    Tranquilizers, blood pressure medications also affect the
                    nervous system.
                  </li>
                </ul>
              </ul>

              <h5>Hormone Problems</h5>
              <ul>
                <li>
                  Lack of disruption in GnRH (Gonadotropin-releasing hormone)
                  released by the brain may lead to a lack of testosterone in
                  sperm production.
                </li>
                <li>
                  In about 30 - 40% of cases, the problem is in the testes, the
                  glands that produce sperm and testosterone (the main male sex
                  hormone). The infections like mumps, cancer treatments may
                  cause damage to the testes.
                </li>
                <li>
                  It's very rare in causing infertility problems due to hormone
                  deficiency.
                </li>
                <li>
                  Testosterone and sperm are produced due to the hormones like
                  Luteinizing hormone (LH) and follicle-stimulating hormone
                  (FSH).
                </li>
                <li>
                  The pituitary gland, located in the brain, makes these
                  hormones. The conditions like pituitary tumors cause low sperm
                  production and level testosterone levels.
                </li>
              </ul>

              <h5>History of High Fevers or Mumps</h5>
              <ul>
                <li>
                  Mumps is caused by a virus and in some complicated cases, it
                  causes salivary glands to swell up.
                </li>
                <li>
                  Patients at any other age other than child or adolescent,
                  though, the infection can have terrible repercussions.
                </li>
                <li>
                  Healthy adults are also having a chance to suffer from
                  inflammation of the brain and spinal cord.
                </li>
                <li>
                  Inflammation of testicles due to the orchitis may cause to
                  face infertility issues.
                </li>
                <li>
                  {" "}
                  The majority of the men who are infected with mumps may not
                  face these issues, but some experience negative fertility
                  effects.
                </li>
              </ul>

              <h5>Genetic Disorders</h5>
              <p>Genetic Disorders that cause infertility issues are</p>
              <ul>
                <li>Klinefelter Syndrome.</li>
                <li> Y Chromosome Deletions.</li>
                <li>Down Syndrome.</li>
              </ul>
              <p>
                Infertility issues due to the mutations in a single gene are
                very less common. Congenital absence of the vas deferens, where
                there is a blockage to sperm flow, is caused by mutations in the
                cystic fibrosis gene.
              </p>

              <h5>Lifestyle or Environmental Factors</h5>
              <ul>
                <h5>Lifestyle: </h5>
                <li>
                  Stress, lack of exercise and sleep will adversely affect
                  fertility.
                </li>
                <h5>Overheating the testicles</h5>
                <ul>
                  <li>
                    Frequent use of saunas or hot tubs or laptop or mobile
                    radiation can elevate core body temperature, which may
                    impair sperm production and reduce the sperm count.
                  </li>
                  <li>
                    The use of tight clothing such as jeans or tight
                    undergarments made of polyester or polycot can increase the
                    temperature near scrotum leading to male infertility and
                    fungal infections in certain cases.
                  </li>
                </ul>
                <h5>Diet:</h5>
                <ul>
                  <li>
                    In an acidic and toxic environment, sperm cells cannot
                    function properly.
                  </li>
                  <li>
                    The deficiency of nutrients in the diet makes the body toxic
                    and leads to fertility issues.
                  </li>
                  <li>
                    Intake of excessive caffeine, lack of vitamin C, zinc, and
                    folic acid is also a factor.
                  </li>
                </ul>

                <h5>
                  Environmental exposure to pesticides and other chemicals:
                </h5>
                <ul>
                  <li>
                    Herbicides and Insecticides may cause low sperm production
                    and also testicular cancer.
                  </li>
                  <li>
                    Exposure of heavy metals like lead causes of male
                    infertility.
                  </li>
                </ul>

                <h5>Smoking and Consumption of Alcohol</h5>
                <ul>
                  <h5>Abuse of cocaine or marijuana</h5>
                  <li>
                    The use of drugs may temporarily lower the number and
                    quality of sperm.
                  </li>
                  <li>Anabolic steroids cause lower sperm production.</li>
                </ul>
                <ul>
                  <h5>Smoking</h5>
                  <li>Tobacco causes lower sperm production.</li>
                </ul>
                <ul>
                  <h5>Substance Abuse:</h5>
                  <li>
                    Alcohol or drug dependency can be associated with poor
                    health leading to affect the nerves and bloodstream as well
                    as in some cases pituitary gland thereby causing reduced
                    fertility.
                  </li>
                </ul>

                <h5>Excessive or Prolonged Emotional Stress :</h5>
                <ul>
                  <li>
                    Excessive stress may interfere with hormones and leads to
                    the cause of deficiency in sperm count.
                  </li>
                </ul>

                <h5>Age :</h5>
                <ul>
                  <li>As age increases, fertility may get down</li>
                </ul>

                <h5>Overweight & Obesity :</h5>
                <ul>
                  <li>
                    Generally, a healthy Body Mass Index (BMI) ranges between
                    18.5 to 24.9.
                  </li>
                  <li>
                    If the BMI ranges 25 to 29.9, the persons are overweighed,
                    if, above 30, they are obese.
                  </li>
                  <li>
                    Men with overweight or obese have low-quality sperm and also
                    cause hormonal changes affecting fertility.
                  </li>
                </ul>

                <h5>Underweight :</h5>
                <ul>
                  <li>
                    Not only Overweight causes lower sperm quality, but
                    Underweight (BMI under 18.5) can also cause fertility
                    issues.
                  </li>
                </ul>
              </ul>

              <h3>Fertility Gradually Decreases in Men Older Than 35 Years</h3>
              <h5>Changes in sperm:</h5>
              <ul>
                <li>The majority of male infertility problems are caused due to sperm abnormalities.</li>
                <li> When a man reaches age 40 and beyond, he gradually experiences several changes in his sperm.</li>
                <li>Lower sperm count.</li>
                <li>A decline in sperm movement.</li>
                <li>A decline in sperm quality.</li>
                <li>Abnormalities in sperm shape and structure (morphology).</li>
              </ul>

              <h5>As men age, increased the incidence of erectile dysfunction (ED)</h5>
              <ul>
                <li>Erectile dysfunction, or ED, is another cause of age-related male infertility.</li>
                <li>ED occurs more often as men age.</li>
                <li> This can occur for a variety of physical and psychological reasons, which need to be diagnosed and treated.</li>
              </ul>

              <h5>Age causes changes in the male reproductive system and organ that can cause the system to operate less efficiently.</h5>
              <ul>
                <li> At the age of 40, there may be changes in male reproductive organs which include softer testes.</li>
                <li>These physical changes can make it more difficult for the body to properly produce and transport sperm for fertilization.</li>
              </ul>

              <h3>Men with Normal Sperm Counts And Abnormal Morphology</h3>
              <ul>
                <li>Those men who present with normal counts above 20 million/mm3 with abnormal morphology of sperms can lead to infertility.</li>
                <li>Various reasons can be due to</li>
                <ul>
                <li>Diabetes</li>
                <li>Chronic Stress</li>
                <li>Obesity</li>
                </ul>
                <li>The test conducted at Prasad Hospital:</li>
                <ul>
                <li>Repeat semen analysis with three days' absence.</li>
                <li>Scrotal scan and color Doppler test.</li>
                <li> Sperm DNA fragmentation test.</li>
                </ul>
              </ul>

              <h3>Men Present With Low Counts With Normal Morphology</h3>
              <ul>
                <li>The approach for fertility management in these men is encouraged with the help of IVF procedures.</li>
                <li>Prasad Hospitals has the best infertility specialists in Hyderabad, uses the most innovative techniques and have higher success rates in conceiving a healthy baby.</li>
              </ul>

              <h5>Men With Extremely Poor Sperm Count Less Than 1 Million/mm3</h5>
              <ul>
                <li>Intracytoplasmic sperm injection (ICSI) is the best suitable method.
                </li>
                <li>The success rate depends on the skill of the IVF specialist.</li>
              </ul>

            </div>
          </div>
        )}
      </div>

      {/* faq-item3 */}
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(2)}>
          <FontAwesomeIcon icon={faFlask} className="infer__icon" />
          <h3>Sperm Retrieval Techniques</h3>
          <span className={`arrow ${activeIndex === 2 ? "open" : ""}`}>+</span>
        </div>
        {activeIndex === 2 && (
          <div className="faq-answer">
            <div className="sperm__mainCont">
              <h3>Non-Surgical Sperm Retrieval</h3>
              <h4>Microsurgical Epididymal Sperm Aspiration (MESA)</h4>
              <p>
                {" "}
                MESA makes to have optimal pregnancy for the men who have the
                unreconstructable reproduction
              </p>
              <h6>Percutaneous Epididymal Sperm Aspiration (PESA)</h6>
              <h6>
                TESA: Percutaneous Testicular Fine Needle Aspiration (TFNA)
              </h6>

              <div className="sperm__imgCard">
                <img
                  src="/assets/surgical-sperm-img1.jpg"
                  alt="Sperm Retrieval image"
                />
              </div>

              <h3>Surgical Sperm Retrieval</h3>
              <h5>1. Testicular Biopsy</h5>
              <div className="surgical__imgCard">
                <img
                  src="/assets/surgical-sperm-img2.jpg"
                  alt="Sperm Retrieval image"
                />
              </div>
              <h5> How it is done</h5>
              <ul>
                <li>
                  Simple procedure to remove a small sample of tissue from one
                  or both testicles.
                </li>
                <li>
                  Using the Microscope, the tissue is examined to know whether
                  the man can be a father.
                </li>
                <li>
                  Local anesthesia is usually adequate for a comfortable
                  procedure. Occasionally required anesthesia is offered.
                </li>
              </ul>
              <h5>Why it is done</h5>
              <p>
                Testicular Biopsy used to find the cause of male infertility but
                in rare cases. It may also be done if both of the following are
                true:
              </p>
              <ul>
                <li> The man's semen does not have sperm.</li>
                <li>
                  It is done when the hormone results are in a normal range.
                </li>
                <li>
                  A testicular biopsy may also be done to get sperm for in vitro
                  fertilization or Intracytoplasmic sperm injection (IVF/ ICSI).
                </li>
                <li>
                  For the confirmation of obstructive azoospermia in men with
                  normal size testes and normal reproductive hormones and no
                  sperm in the ejaculates.
                </li>
              </ul>

              <h5>2. Cryopreservation</h5>
              <ul>
                <li>Sperm Cryopreservation allows having many ICSI cycles.</li>
                <li>
                  Even the ICSI affects oocyte fertilization, but cryopreserved
                  sperm may achieve successful fertilization.
                </li>
                <li>
                  It also has the potential of separating sperm retrieval
                  procedures from reproductive techniques.
                </li>
                <li>
                  For obstructive azoospermia pregnancy rates for frozen and
                  fresh epididymal sperm are virtually identical for
                  Non-Obstructive Azoospermia (NOA), fresh sperm is preferable.
                </li>
                <li>
                  {" "}
                  Freezing of isolated spermatozoa from testicular tissue is
                  difficult because of the low number of spermatozoa present in
                  testicular tissue and the limited sperm motility of testicular
                  sperm, which makes documentation of sperm viability difficult.
                </li>
              </ul>

              <h3>Infertility Specialists in Hyderabad</h3>
              <h5>Results & Conclusions</h5>
              <ul>
                <li>
                  Sperm retrieval from men with non-obstructive and obstructive
                  azoospermia is now possible with excellent pregnancy rates for
                  obstructive azoospermia and acceptable pregnancy rates for NOA
                  when ICSI is applied.
                </li>
                <li>
                  The ability to use cryopreserved epididymal and often
                  testicular spermatozoa will continue to limit the number of
                  sperm retrieval procedures necessary to achieve fertility for
                  a couple.
                </li>
                <li>
                  Before these advancements in sperm retrieval techniques which
                  have the best potential of fertility treatment, there was the
                  only option that is adoption.
                </li>
                <li>
                  Careful evaluation of Azoospermia is needed as some genetic
                  abnormalities are associated with it.
                </li>
                <li>
                  Multiple TESE procedures may cause both transient and
                  occasional permanent alterations in testicular function
                  including testicular atrophy and decrease testosterone levels.
                </li>
                <li>
                  Prasad Hospitals, have the experienced physicians to perform
                  sperm retrieval procedures.
                </li>
              </ul>

              <h5>3. Varicocoele</h5>
              <div className="Varicocoele__imgCard">
                <img
                  src="/assets/surgical-sperm-img3.jpg"
                  alt="Sperm Retrieval image"
                />
              </div>
              <ul>
                <li>Varicocele is present in 15% of all men.</li>
                <li>23% of varicocele is large.</li>
                <li>3% of all men have large varicocele.</li>
                <li>
                  {" "}
                  Large varicocele causes more severe impairments in semen
                  quality.
                </li>
              </ul>

              <h5>Varicocele surgery results</h5>
              <ul>
                <li>Varicocelectomy, carefully performed in selected cases.</li>
                <li>
                  About 60 -80 % of men results in a significant improvement in
                  semen analysis.
                </li>
                <li>
                  After Varicocele surgery, the tendency of having a normal
                  pregnancy is about 43% and 69% at one and two years
                  respectively.
                </li>
                <li>
                  After Varicocele surgery, pregnancy rates may vary from 20% to
                  60%.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* faq-item4 */}
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(3)}>
          <FontAwesomeIcon icon={faVial} className="infer__icon" />
          <h3>Semen Sample Collection</h3>
          <span className={`arrow ${activeIndex === 3 ? "open" : ""}`}>+</span>
        </div>
        {activeIndex === 3 && (
          <div className="faq-answer">
            <div className="semen__mainCont">
              <ul>
                <li>
                  As part of the fertility workup, you'll make an appointment to
                  either produce your sample in office or drop it off at the
                  clinic or lab after you produce a sample at home.
                </li>
                <li>Plan accordingly with sperm, as timing is so essential.</li>
                <li>
                  You'll need to refrain from any sexual activity for at least
                  two to three days, but not more than 10 days before you
                  collect your sample.
                </li>
                <li>
                  The decrease in sperm motility may be resulted due to
                  abstinence.
                </li>
                <li>
                  Samples produced have a higher number of motility sperm after
                  two or three days of abstinence than the samples produced
                  after shorter or longer abstinence.
                </li>
                <li>
                  Some men think saving up all their sperm for the day of their
                  test is what’s preferable, but waiting too long between
                  ejaculates is a big mistake.
                </li>
                <li>
                  With the increase of abstinence, the percentage of live sperm
                  decreases.
                </li>
                <li>
                  Avoid smoking, consumption of alcohol for at least 10 days
                  before preceding sperm collection.
                </li>
              </ul>
              <h4>Things that affect the quality of sperm sample are:</h4>
              <ul>
                <li>Perfumes and body sprays.</li>
                <li>Usage of lubricants.</li>
                <li>Too short abstinence less than one day.</li>
                <li>High temperature.</li>
                <li>Heavy smoking.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfertilityTabs;
