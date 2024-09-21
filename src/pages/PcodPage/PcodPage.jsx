import React from "react";
import "./pcodpage.css";
import MegaNavbar from "../../components/Navbar/MegaNavbar";
import Footer from "../../components/Footer/Footer";
import pcodImage from "../../../public/assets/PCOD.png";

const PcodPage = () => {
  return (
    <>
      {/* MegaNavbar component */}
      <MegaNavbar />

      <div className="container pcdo__mainContainer">
        <div className="row">
          <div className="col-12">
            <div className="pcdo__imageCard">
              <h2>Polycystic Ovarian Disease (PCOD)</h2>
              <img src={pcodImage} alt="pcdo blog image" />
            </div>
          </div>

          <div className="col-12 col-lg-6 pcdo__card">
            <h3>What is PCOD?</h3>
            <p>
              Polycystic ovaries refer to ovaries having many tiny cysts or
              bumps. These cysts themselves are not harmful and not needed to be
              removed. The name Polycystic Ovarian Disease refers to the
              enlarged ovaries that contain many very small cysts. Women with
              PCOD typically have high levels of androgens. Women with PCOD also
              have higher levels of insulin production which results in excess
              weight gain.
            </p>
            <h3>What causes PCOD?</h3>

            <ul className="pcdo__desc">
              <li>A hormone imbalance causes the symptoms of PCOD.</li>
              <li>Insulin resistance: The body cannot use insulin.</li>
              <li>
                High testosterone: the body produces too much testosterone.
              </li>
              <li>
                Although the exact cause is unknown, we do know that it is a
                result of a hormone imbalance in your brain and ovaries.
              </li>
              <li>
                Also, many women with PCOD have too much insulin, a hormone that
                turns food into energy.
              </li>
              <li>
                Too much insulin causes the body to prepare much testosterone
                which results in excess body hair or irregular periods.
              </li>
              <li>
                Insulin Resistance (Hyperinsulinemia): Despite having good
                nutrition and exercise, Hyperinsulinemia makes to gain more
                weight as being a potent growth hormone.
              </li>
              <li>
                Hyperinsulinemia also leads to high androgens that may cause
                infertility, acne, hair loss on the head, and facial hair
                growth.
              </li>
              <li>
                There is scientific evidence that daughters of women with PCOD
                are at an increased risk of developing PCOD.
              </li>
            </ul>

            <h3>Symptoms</h3>
            <p>
              These warning signs may indicate polycystic ovarian Disease
              (PCOD). Polycystic ovarian Disease symptoms are related to
              hormonal imbalance, lack of ovulation and insulin resistance and
              may include:
            </p>

            <ul className="pcdo__desc">
              <li>Irregular, infrequent or absent menstrual periods.</li>
              <li>Acne or oily skin.</li>
              <li>Infertility (the inability to produce children).</li>
              <li>Hirsutism (excessive growth of body).</li>
              <li>Enlarged and/or polycystic ovaries.</li>
              <li>Male-pattern baldness or thinning hair.</li>
              <li>
                Acanthosis nigricans (darkened skin areas on the back of the
                neck, in the armpits and under the breasts).
              </li>
              <li>Overweight or obesity, especially around the waist.</li>
              <li>Skin tags</li>
            </ul>

            <p>
              Besides, women with PCOD may be at increased risk of developing
              certain health problems. These may include:
            </p>

            <ul className="pcdo__desc">
              <li>Hypertension (high blood pressure)</li>
              <li>Excess body weight</li>
              <li>Elevated cholesterol levels</li>
              <li>Type 2 diabetes or insulin resistance</li>
              <li>Elevated blood clotting factors</li>
              <li>Increased levels of C-reactive protein</li>
              <li>
                Heavy bleeding and endometrial cancer - Lack of ovulation for a
                long period may cause excessive thickening of the endometrium.
              </li>
            </ul>

            <h3>Diagnosis</h3>
            <p>
              You may undergo these tests if your doctor thinks you have PCOD.
              Polycystic ovary disease is easiest to treat when diagnosed early,
              says Reproductive endocrinology specialist, Dr. Suma Prasad.
              That's tricky because so many adolescents have acne and irregular
              periods. “If your daughter has symptoms, don't be afraid to ask
              your doctor,” she says. “If the doctor isn't familiar with PCOD,
              find someone who is.” Even a later-in-life diagnosis is
              worthwhile, says Dr. Suma Prasad, the Best Infertility Specialists
              in Hyderabad. “After menopause, symptoms may ease but the
              underlying insulin problems remain.” These are a few methods used
              for Polycystic Ovary Disease diagnosis:
            </p>

            <h3>Laboratory tests</h3>
            <ul className="pcdo__desc">
              <li>
                Your doctor may ask for a complete blood count, also known as a
                CBC, or may check your hormone levels.
              </li>
              <li>
                These tests involve drawing a sample of blood and checking it.
              </li>
              <li>
                The information from these tests will help your doctor evaluate
                your health.
              </li>
              <li>
                Other blood tests measure chemicals in the blood to see how
                certain organs are working.
              </li>
            </ul>

            <h3>Pelvic examination</h3>
            <ul className="pcdo__desc">
              <li>
                During a pelvic examination, your health care professional will
                feel for lumps or changes in the shape of your vagina, cervix,
                uterus, fallopian tubes, ovaries and rectum.
              </li>
              <li>
                The health care professional also will use a speculum to open
                your vagina to look at your cervix and take samples for a Pap
                test.
              </li>
            </ul>

            <h3>Transvaginal ultrasound (also called ultrasonography)</h3>
            <ul className="pcdo__desc">
              <li>
                Transvaginal ultrasound (TVU) is a procedure used to examine
                your vagina, uterus, Fallopian tubes and bladder.
              </li>
              <li>It is also called an Endovaginal ultrasound.</li>
              <li>
                An ultrasound transducer which is a probe is inserted into the
                vagina and makes high-energy sound waves (which are ultrasound)
                of internal organs or tissues and make echoes.
              </li>
              <li>
                These echoes form a picture of body tissues or organs called a
                sonogram.
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-6 pcdo__card">
            <h3>Treatment</h3>
            <p>
              Individualized approach, personal attention to the health problems
              and nutrition needs has helped most of the women and adolescents
              who attended the PCOD clinic at Prasad Hospitals. Young women and
              for women who don't want to become pregnant, polycystic ovarian
              Disease treatment is focused on correcting the abnormal hormone
              levels, reducing weight and managing cosmetic concerns. PCOD is
              not urable, but the symptoms are treatable by:
            </p>
            <ul className="pcdo__desc">
              <li>A Healthy Lifestyle</li>
              <li>Healthy Diet & Regular Exercise</li>
              <li>Maintaining A Healthy Weight</li>
              <li>
                A healthy diet and increased physical activity allow more
                efficient use of insulin and decrease your blood glucose levels.
              </li>
              <li>
                “The hands-down best strategy is diet and exercise,” Dr. Suma
                Prasad says. “Losing just 10 percent of your body weight
                drastically reduces diabetes risk.”
              </li>
              <li>
                The treatment is focused on weight reduction and promoting
                ovulations especially for women who want to become pregnant.
              </li>
            </ul>

            <h3>Treatment may include:</h3>
            <h5>Medication</h5>
            <ul className="pcdo__desc">
              <li>
                Metformin, a medication used in the treatment of Type 2
                diabetes, often is used to decrease insulin resistance in PCOD.
              </li>
              <li>
                It also may help reduce androgen levels, slow hair growth and
                help you ovulate more regularly. The safety of this medication
                in pregnancy hasn't been established.
              </li>
              <li>
                You also may be prescribed medications to treat hair growth and
                acne.
              </li>
              <li>
                “For relief of acne symptoms, a drug like spironolactone
                (Aldactone) may work quickly,” says our endocrinologist, with
                Prasad Hospitals, the Best Hospitals in Hyderabad.
              </li>
              <li>
                “Hair growth and loss often take much longer to improve.”
                Nutraceuticals, are now most often prescribed and best planned
                by the Gynecologist & Dietitian.
              </li>
            </ul>

            <h5>Oral Contraceptives</h5>
            <ul className="pcdo__desc">
              <li>
                For women above 18 years of age, our Gynecologists may prescribe
                birth control pills to help your periods become more regular.
              </li>
              <li>
                These pills also may improve other symptoms, such as heavy
                menstrual flow and the formation of ovarian cysts.
              </li>
              <li>
                Regulating periods also is important to prevent endometrial
                cancer, which can result from cell buildup in the uterus.
              </li>
              <li>
                Birth control pills stimulate the menstrual cycle and reduce
                male hormones.
              </li>
              <li>Another option is progesterone-only pills.</li>
            </ul>

            <h5>Ovulation Induction Medications</h5>
            <ul className="pcdo__desc">
              <li>
                These medications stimulate your ovaries to make one or more
                follicles (sacs that contain eggs) and release the egg for
                fertilization.
              </li>
              <li>
                For women with PCOD, these medications also increase the risks
                for having multiple births (twins or more) and ovarian
                hyperstimulation, a condition of excessive stimulation of the
                ovaries that can cause hormone changes, abdominal bloating and
                pelvic pain.
              </li>
              <li>
                These treatments are always individualized and discussed
                thoroughly with the woman before initiating it.
              </li>
            </ul>

            <h3>Follow-up Care</h3>
            <h5>
              Prasad Hospital Gynecologists carefully draft the follow up by
              individualizing the case.
            </h5>
            <ul className="pcdo__desc">
              <li>
                Unmarried women and adolescents are given a follow-up chart once
                in a month. The chart includes lifestyle management, dietitian
                advice, weight monitoring, and medication.
              </li>
              <li>
                Many young women appreciate the non-hormonal approach and have
                achieved regular menses and weight loss
              </li>
              <li>
                Married women, who do not seek pregnancy are followed up with
                similar charts and a supplementary monthly ovulation check by
                ultrasound which is safe and simple. Those who are keen on
                pregnancy are treated by our Infertility specialists.
              </li>
              <li>
                Hormone imbalance correction and successful ovulation induction
                are the key principles followed by our Infertility specialists.
              </li>
              <li>
                Infertility treatment is no ordinary medical procedure. There
                are many emotions involved.
              </li>
              <li>
                The best care blends progressive technology with honesty,
                empathy and caring. You have the best chance for success when
                you are relaxed and comfortable.
              </li>
              <li>
                We offer a private setting where we treat you with respect and
                confidentiality.
              </li>
              <li>
                Well help you understand your options and get answers to your
                questions.
              </li>
              <li>
                Were here to support you emotionally as you try to fulfill your
                dreams of becoming a parent.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default PcodPage;
