const data = {
  hospitals: {
    PragathiNagar: {
      specialties: {
        Infertility: ["Dr. k. Suma Prasad"],
        Gynecology: ["Dr. k. Suma Prasad", "Dr. K Shravanya"],
        Cardiology: ["Dr. V Sravan Kumar"],
        Orthopedics: ["Dr. Siddharth Potluri", "Dr. Jampani Ravitheja"],
        GeneralPhysician: ["Dr. Y Ramesh", "Dr. Navya Mandadapu"],
        ENT: ["Dr. S Nishanth"],
        Pediatrics: ["Dr. Shyam Sunder", "Dr. Mohan Chand Gutta"],
        Radiology: ["Dr. V Revanth"],
        Neurology: ["Dr. Sravanthi Pavuluri"],
        Neurosurgery: ["Dr. N Rithvic"],
        Neonatology: ["Dr. Mohan Chand Gutta"],
        Pulmonology: ["Dr. Yashwanth KO"],
        Urology: ["Dr. Kalyan Varma"],
        Nephrology: ["Dr. Nagarjuna CH"],

        SurgicalGastroenterology: ["Dr. Kapil Tejaswy"],
        Dental: ["Dr. Ravi Sekhar"],
      },
    },
    Nacharam: {
      specialties: {
        Infertility: ["Dr. k. Suma Prasad", "Dr. Tejashwani"],
        Gynecology: ["Dr. k. Suma Prasad", "Dr. Tejashwani", "Dr. Sneha"],
        Cardiology: ["Dr. Sampath"],
        Orthopedics: ["Dr. Karthik"],
        GeneralPhysician: ["Dr. S. Raghavender", "Dr. Vamshi Krishna RVN"],
        ENT: ["Dr. S Nishanth"],
        Pediatrics: ["Dr. Lakshmi Prasanna"],
        Radiology: ["Dr. Suprabatham"],
        Neurology: ["Dr. P.Chandra Shekar"],
        Neurosurgery: ["Dr. Shyam"],
        Neonatology: ["Dr. Madhavchari"],
        Pulmonology: ["Dr. Rajesh Palvai"],
        Urology: ["Dr. Srikanth Munna"],
        Nephrology: ["Dr. Ramesh Chadda"],

        GeneralSurgeon: ["Dr. Basaweshwar", "Dr. Akshitha"],
        Dermatology: ["Dr. Sravanthi"],
        Anesthesiology: ["Dr. S. Raghavender", "Dr. Jayanth Varma Bahadur"],
        CriticalCare: ["Dr. Manogna", "Dr. Kishore", "Dr. Gowtham"],
      },
    },
    Manikonda: {
      specialties: {
        Infertility: ["Dr. k. Suma Prasad", "Dr. Tejashwani"],
        Orthopedics: ["Dr. Karthik"],
        Gynecology: ["Dr. k. Suma Prasad", "Dr. Tejashwani", "Dr. Sneha"],
      },
    },
  },

  doctors: {
    /* nacharam doctors data */
    "Dr. k. Suma Prasad": {
      qualification: "MBBS, DGO, MD - Obstetrics & Gynaecology",
      overview: [
        "Dr K Suma Prasad, MD, DGO., Infertility specialist known for her specialized skills in improving IVF success through modern technology. With a strong research background, Dr Suma Prasad has vast experience in handling implantation failure and improving IVF & ICSI results through advanced techniques. With experience for more than 25years, Dr Suma Prasad is popular in kukatpally as a friendly and a very supportive doctor.",
        "PCOD - Dr Suma Prasad has an experience of 20 years in a scientific analysis and treatment to the PCOD problem, a hormone imbalance affecting young women leading to obesity and menstrual problems.",
        "Patients specially appreciate the short waiting period and quick access to the doctor. Graduated from Gandhi Medical College, Hyderabad, Dr Suma Prasad is a Fetal Medicine Diploma holder from UCL, London and a Diploma in Advance Endoscopic Surgery and Hysteroscopy from Keil’s school of endoscopy, Germany. Dr Suma Prasad has specialized in Intracytoplasmic Sperm Injection (ICSI), Testicular sperm Extraction (TESE) & Preimplantation Genetic Screening (PGS). She has extensive experience in treating male infertility & PCOD. Her research publications are extensive and available on our website.",
      ],
      fellowship: "Member of American Medical Association",
      expertise: "Gynecologist & IVF Specialist",
      languages: ["English", "Telugu"],
      publications: ["Gynecology Advances", "Women's Health"],
      image: "php-dr-k-suma-prasad.jpg",
    },
    "Dr. k Shravanya": {
      qualification: "MBBS, DGO, FMAS, DMAS",
      overview: [
        "Dr K Shravanya is a Gynaecologist, Obstetrician & an Infertility specialist with the fellowship in minimally invasive surgeries. She completed MBBS from NTRUHS and post-graduation from Gandhi Medical College. Further she has pursued Infertility fellowship from IMA (Indian Medical Association) and took an advanced diploma in ART & Reproductive Medicine at UKSH (University Medical Centre Schleswig Holstein, Germany). She has completed her fellowship and diploma in surgery under Dr R. K. Mishra (World Laparoscopy hospital, Delhi).",
        "Initially she has done her practices at SriDevi Nursing home, Warasiguda Hyderabad and currently continuing with Prasad Infertility solutions, kphb hyderabad . She took part in presentations at State conferences and won a prize for poster presentation of high-risk cases in Obstetrics (Second Trimester Rupture Uterus). Her interest towards the passion made her to be a part of an article on Evaluation of pregnancy outcome in heart disease complicating pregnancy in (JMEDS - The Journal of Medical Sciences).",
        "Dr Shravanya is known for her empathic and ethical approach towards patient care and has good experience in managing high risk pregnancy, normal vaginal delivery, caesarean sections, gynaecological procedures, PCOD/PCOS and Menstrual Irregularities, Infertility Laparoscopy, hysteroscopic procedures, early pregnancy care and multiple procedures.",
      ],
      fellowship: "Fellow of Royal College of Physicians",
      expertise: "Infertility Specialist",
      languages: ["English", "Hindi"],
      publications: ["Infertility Research 2020", "Advanced IVF Techniques"],
      image: "php-dr-k-shravanya.jpg",
    },
    "Dr. S. Raghavender": {
      qualification: "MD - General Medicine, MBBS",
      overview:
        "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of Orthopedic Society",
      expertise: "Orthopedic Surgeon",
      languages: ["English", "Kannada"],
      publications: ["Bone Health 2019", "Joint Replacement Techniques"],
      image: "phn-dr-s-raghavender.jpg",
    },
    "Dr. Vamshi Krishna RVN": {
      qualification: "MD - General Medicine, MBBS",
      overview:
        "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of International Orthopedic Society",
      expertise: "Sports Injuries",
      languages: ["English", "Gujarati"],
      publications: ["Sports Medicine 2021", "Advanced Orthopedics"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Lakshmi Prasanna": {
      qualification: "MBBS, Diploma in Child Health (DCH)",
      overview:
        "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of Gynecological Society",
      expertise: "Obstetrician",
      languages: ["English", "Marathi"],
      publications: ["Women's Health 2018", "Childbirth Techniques"],
      image: "phn-dr-i-laxmi-prasanna.jpg",
    },
    "Dr. Madhavchari": {
      qualification: "Diploma in Child Health (DCH)",
      overview:
        "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of American College of Gynecology",
      expertise: "Gynecology and Obstetrics",
      languages: ["English", "Tamil"],
      publications: ["Gynecology Today", "Advanced Obstetrics"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Tejashwani": {
      qualification: "MBBS, DGO",
      overview:
        "7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of Pulmonology Society",
      expertise: "Pulmonologist",
      languages: ["English", "Malayalam"],
      publications: ["Respiratory Medicine 2017", "Advanced Pulmonology"],
      image: "phn-dr-g-tejashwini.jpg",
    },
    "Dr. Sneha": {
      qualification: "MBBS, DGO",
      overview:
        "8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of Pulmonology Society",
      expertise: "Asthma Specialist",
      languages: ["English", "Spanish"],
      publications: ["Asthma Care", "Respiratory Health"],
      image: "phn-dr-sneha-teddu.jpg",
    },
    "Dr. P.Chandra Shekar": {
      qualification: ".....MBBS, DM Nephrology.....",
      overview:
        "9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of Nephrology Society",
      expertise: "Kidney Transplant",
      languages: ["English", "Punjabi"],
      publications: ["Nephrology Research", "Kidney Health"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Karthik": {
      qualification: "MBBS, MS - Orthopaedics",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of International Nephrology Society",
      expertise: "Dialysis Specialist",
      languages: ["English", "Bengali"],
      publications: ["Dialysis Advances", "Renal Care"],
      image: "phn-dr-s-s-karthik.jpg",
    },
    "Dr. Suprabatham": {
      qualification: "MBBS, Diploma in Medical Radio-Diagnosis",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of International Nephrology Society",
      expertise: "Dialysis Specialist",
      languages: ["English", "Bengali"],
      publications: ["Dialysis Advances", "Renal Care"],
      image: "phn-dr-k-suprabatham.jpg",
    },
    "Dr. Basaweshwar": {
      qualification: "MBBS, DNB - General Surgery",
      overview:
        "9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of Urology Society",
      expertise: "Urological Surgery",
      languages: ["English", "Telugu"],
      publications: ["Urology Today", "Advanced Urological Techniques"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Akshitha": {
      qualification: "MBBS, DNB - General Surgery",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American Urological Association",
      expertise: "Urology Specialist",
      languages: ["English", "Tamil"],
      publications: ["Prostate Health", "Kidney Stone Treatment"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Srikanth Munna": {
      qualification: "MBBS, MCh - Urology/Genito-Urinary Surgery",
      overview:
        "10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of Cardiology Society",
      expertise: "Cardiologist",
      languages: ["English", "Hindi"],
      publications: ["Heart Health", "Cardiology Research"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Sravanthi": {
      qualification: "MBBS, DDVL",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "DR. Nishanth": {
      qualification: "MS - ENT, MBBS",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "phn-dr-s-nishanth.jpg",
    },
    "Dr. Shyam": {
      qualification: "MBBS, MS - General Surgery, MCh - Neuro Surgery",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Ramesh Chadda": {
      qualification: "MBBS, MD - General Medicine, DM - Nephrology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Sampath": {
      qualification: "MBBS, MD - General Medicine, DM - Cardiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "phn-dr-sampath-kumar-madapat.jpg",
    },
    "Dr. Rajesh Palvai": {
      qualification: "MBBS, MD - Pulmonary Medicine",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "phn-dr-rajesh-palvai.jpg",
    },
    "Dr. Jayanth Varma Bahadur": {
      qualification: "MBBS, DA (ANAESTHESIA )",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Manogna": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Kishore": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Gowtham": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },

    /* pragathinagar doctors data */
    "Dr. V Sravan Kumar": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: [
        "Dr. Sravan Kumar V is a Cardiologist and Interventional Cardiologist in JP Nagar, Bangalore and has an experience of 12 years in these fields. Dr. Sravan Kumar V practices at Practo Instant Full Time 2 in JP Nagar, Bangalore,Prasad Hospital in Pragathi Nagar, Hyderabad and Prasad Hospital in Nacharam, Hyderabad. He completed MBBS from Santhiram Medical College, Nandyal in 2010,MD - Tuberculosis & Respiratory Diseases/Medicine from JSS University, Mysore in 2015 and DM - Cardiology from GB Pant Hospital, New Delhi in 2020.",
        "Some of the services provided by the doctor are: Cardiology Consultation,Pacemaker Implantation,Electrocardiography (ECG),Cardiac Catheterisation and 2D - Echocardiography (2D-Echo) etc.",
      ],
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-v-sravan-kumar.jpg",
    },
    "Dr. Siddharth Potluri": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: [
        "Dr. Siddharth Potluri is a Orthopedic surgeon in Pragathi Nagar, Hyderabad and has an experience of 13 years in this field. Dr. Siddharth Potluri practices at Prasad Hospital in Pragathi Nagar, Hyderabad,Prasad Hospitals in Manikonda, Hyderabad and Apollo Clinic in Manikonda, Hyderabad. He completed MBBS from Dr. NTR University of Health Sciences Andhra Pradesh in 2011,MS - Orthopaedics from Dr. NTR University of Health Sciences Andhra Pradesh in 2016 and Mch/MMed Programme Fellowship from NHS in 2021.",
        "Some of the services provided by the doctor are: Knee Replacement,Minimally Invasive Knee Correction,ACL Surgery,Arthritis Management and Frozen Shoulder Treatment etc.",
      ],
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Jampani Ravitheja": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-jampani-ravitheja.jpg",
    },
    "Dr. Y Ramesh": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: [
        "Dr. Yerrabothu Ramesh is a General Medicine and Internal Medicine in Pragathi Nagar, Hyderabad and has an experience of 10 years in these fields. Dr. Yerrabothu Ramesh practices at Prasad Hospital in Pragathi Nagar, Hyderabad. He completed MBBS from Rajiv Gandhi University of Health Sciences in 2014 and MD - General Medicine from Kamineni Institute of Medical Sciences, Narketpally in 2020.",
        "Some of the services provided by the doctor are: Anemia Treatment,Dengue Fever Treatment,Abdominal Pain Treatment,Chronic Obstructive Pulmonary Disease (COPD) Treatment and Diabetic Ulcer Treatment etc.",
      ],
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-yerrabothu-ramesh.jpg",
    },
    "Dr. Navya Mandadapu": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: [
        "Dr. Navya Mandadapu is a Family Physician and General Physician in Pragathi Nagar, Hyderabad and has an experience of 10 years in these fields. Dr. Navya Mandadapu practices at Prasad Hospital in Pragathi Nagar, Hyderabad. She completed MBBS from Bharath University, Chennai in 2013 and DNB - Family Medicine from National Board of Examination, India in 2017.",
        "Some of the services provided by the doctor are: Balance Exercises,Piles Treatment,Typhoid Fever Treatment,Dressings and Acute Diarrhea Treatment etc.",
      ],
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-mandadapu-navya.jpg",
    },
    "Dr. S Nishanth": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: [
        "Dr. S.Nishanth is a ENT/ Otorhinolaryngologist in Nacharam, Hyderabad and has an experience of 12 years in this field. Dr. S.Nishanth practices at Prasad Hospital in Nacharam, Hyderabad and Prasad Hospital in Pragathi Nagar, Hyderabad. He completed MS - ENT from Manipal University in 2017 and MBBS from Gandhi Medical College, Hyderabad in 2012.",
        "Some of the services provided by the doctor are: Microscopic Voice Surgery,Canalith Repositioning (CR),Ossiculoplasty,Tinnitus Treatment and Nasal and Sinus Allergy Care etc.",
      ],
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-s-nishanth.jpg",
    },
    "Dr. V Revanth": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: [
        "Dr. Revanth V is a Radiologist in Kondapur, Hyderabad and has an experience of 15 years in this field. Dr. Revanth V practices at KIMS Hospital in Kondapur, Hyderabad and Prasad Hospital in Pragathi Nagar, Hyderabad. He completed MBBS from Kurnool Medical College, Kurnool in 2009 and MD - Radio Diagnosis/Radiology from Navodaya Medical College in 2013.",
      ],
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Sravanthi Pavuluri": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: [
        "Dr. Sravanthi Pavuluri is a Neurologist in Pragathi Nagar, Hyderabad and has an experience of 10 years in this field. Dr. Sravanthi Pavuluri practices at Prasad Hospital in Pragathi Nagar, Hyderabad. She completed MBBS from Dr. NTR University of Health Sciences Andhra Pradesh in 2013,MD - General Medicine from Dr. NTR University of Health Sciences Andhra Pradesh in 2017 and DM - Neurology from Rajiv Gandhi University of Health Sciences in 2021.",
        "Some of the services provided by the doctor are: Vascular Surgery,Cerebrospinal Fluid Shunt,Parkinson's Disease Treatment,Neuromuscular Disorders and Epilepsy surgery etc.",
      ],
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-sravanthi-pavuluri.jpg",
    },
    "Dr. N Rithvic": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: [
        "Dr. M.Rithvic Nimmakayala is a Neurosurgeon in Pragathi Nagar, Hyderabad and has an experience of 6 years in this field. Dr. M.Rithvic Nimmakayala practices at Prasad Hospital in Pragathi Nagar, Hyderabad. He completed MBBS from Dr. NTR University of Health Sciences Andhra Pradesh in 2014,MS - General Surgery from Dr. NTR University of Health Sciences Andhra Pradesh in 2018 and MCh - Neuro Surgery from The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU) in 2022.",
        "Some of the services provided by the doctor are: Vertigo Treatment,Epilepsy Treatment, Laminectomy,Foot Drop and Brain Aneurysm Treatment etc.",
      ],
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Shyam Sunder": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-syam-sunder-r.jpg",
    },
    "Dr. Mohan Chand Gutta": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-gutta-mohan-chand.jpg",
    },
    "Dr. Yashwanth KO": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-yashwant-k-o.jpg",
    },
    "Dr. Kapil Tejaswy": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Kalyan Varma": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Ravi Sekhar": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Nagarjuna CH": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
  },

  specialtiesData: {
    Infertility: {
      bannerbg:"banner-infertility.png",
      icons: "icon-infertility.png",
      title: "Infertility",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Center for Infertility at Prasad Hospitals has the Best Infertility Specialists In Hyderabad with good experience and have a high success rate. Prasad Hospitals, the Best Infertility Hospitals in Hyderabad, treats the patients with the advanced technologies in the processes like IVF, ICSI, Male Infertility, IUI, PGD, and many. Many patients with fertility issues approached us and got the best treatment with the best success rate.",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. k. Suma Prasad", "Dr. Tejashwani"],

      departmentContentTab: [
        {
          mainTitle: "Infertility",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "General Orthopedics.",
                "Joint Replacement.",
                "Arthroscopic Surgery.",
                "Complex Trauma and Fracture Treatment.",
                "Pediatric Orthopedics.",
                "Spine Care.",
                "Sports Medicine.",
                "Total Hip Replacement (Cemented and Uncemented).",
                "Hip Resurfacing Surgeries.",
                "Total Knee Replacement.",
                "Total Elbow, Ankle & Shoulder Replacement.",
                "Total Joint Replacement Revision (Hip, Knee & Shoulder).",
                "Partial Joint Revision (Hip, Knee).",
                "Rheumatology.",
                "Physical Medicine & Rehabilitation.",
                "Pain Management.",
              ],
            },
            {
              tabsTitle: "Arthroplasty (Knee Replacement)",
              tabsdesc: [
                "Knee Replacement: In India, Knee replacements are very common. Here the diseased ends of the thigh and leg bones and sometimes the surface of knee cap are replaced.",
                "Hip Replacement: In Traditional total hip replacement the diseased ball along with the top part of the thigh bone and the surface of the socket is removed and replaced with artificial components.",
              ],
            },
            {
              tabsTitle: "Sports Medicine",
              tabsdesc: [
                "Ligaments are strong tissues that connects bones.  Anterior Cruciate Ligament (ACL) is one of the two ligaments which connects the thighbone (Femur) to the shinbone (Tibia) and it crosses in the middle of the knee which helps to stabilize knee joint. Mostly, the injuries to ACL occur during sports and fitness activities. While twisting or overextending the knee, this ligament may tear. But not everyone who tears an ACL requires ACL reconstruction. The people who can recover well with physical therapy and some conservative treatments. The Doctors at Prasad Hospitals, Best Orthopedic Hospital in Hyderabad, may recommend ACL reconstruction if:",
                "The athlete wants to continue in the sport which involves jumping, pivoting.",
                "More than one ligament or the cartilage in one’s knee is injured.",
                "A person is young and active.",
                "The injury is caused to knee to buckle during everyday activities, such as stair climbing.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],
      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Gynecology: {
      bannerbg: "banner-gynecology.png",
      icons: "icon-gynecology.png",
      title: "Gynecology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Prasad Hospitals with its vision to provide the best health care to the women, now well renowned as the Best Gynecology Hospitals in Hyderabad. The Department of Gynecology and Obstetrics at Prasad Hospitals believes that the best healthcare is crucial for a mother and her child. We have the Best Gynecology Specialists who are highly experienced and adept modern techniques and are prominently known at Hyderabad. The woman either facing the irregular periods or any reproductive issues, our doctors provide the best treatment with care and friendly atmosphere.",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: [
        "Dr. k. Suma Prasad",
        "Dr. K Shravanya",
        "Dr. Tejashwani",
        "Dr. Sneha",
      ],

      departmentContentTab: [
        {
          mainTitle: "Gynecology",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "Vaginal, Laproscopic & Open Hystrectomy",
                "Normal, Caesarean Delivery",
                "Hysteroscopy & Diagnostic Laproscopy",
                "IVF",
                "TESA ICSI",
                "IUI",
                "Ectopic Surgery",
                "Ovarian Cystectomy",
                "Hystrosalpingogram(HSG)",
                "Sonosalpingogram(SSG)",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],
      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Cardiology: {
      bannerbg: "banner-cardiology.png",
      icons: "icon-cardiology.png",
      title: "Cardiology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "At Prasad Hospitals, our Cardiology Department is dedicated to providing comprehensive heart care, from diagnostics to advanced treatments. Our team of expert cardiologists specializes in managing a wide range of heart conditions, including",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. V Sravan Kumar", "Dr. Sampath"],

      departmentContentTab: [
        {
          mainTitle: "Cardiology",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs.",
              ],
            },
            {
              tabsTitle: "Specialized Care",
              tabsdesc: [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments.",
              ],
            },
            {
              tabsTitle: "Advanced Treatments",
              tabsdesc: [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care.",
              ],
            },
            {
              tabsTitle: "Comprehensive Diagnostics",
              tabsdesc: [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],
      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Orthopedics: {
      bannerbg: "banner-orthopedics.png",
      icons: "icon-orthopedics.png",
      title: "Orthopedics",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Centre for Orthopedics, Trauma & Joint Diseases at Prasad Hospitals is on par with the best Joint Replacement Units in India with the 0% surgical-side infection rate. All types of Joint Replacements (Hip, Knee & Shoulder) are performed here. Prasad Hospitals have the best modular operation theatres with the latest technology called Laminar Flow, for joint resurfacing procedures. Being the Best Orthopedic Hospital in Hyderabad, Prasad Hospitals have the experienced orthopedic doctors who are specialized with advanced techniques like Computer Assisted Surgery (CAS), Arthroscopy (Diagnostic & Therapeutic) of knee & shoulder & Arthroscopic Surgeries with advanced techniques in ligament repair",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: [
        "Dr. Siddharth Potluri",
        "Dr. Jampani Ravitheja",
        "Dr. Karthik",
      ],

      departmentContentTab: [
        {
          mainTitle: "Orthopedics",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "General Orthopedics.",
                "Joint Replacement.",
                "Arthroscopic Surgery.",
                "Complex Trauma and Fracture Treatment.",
                "Pediatric Orthopedics.",
                "Spine Care.",
                "Sports Medicine.",
                "Total Hip Replacement (Cemented and Uncemented).",
                "Hip Resurfacing Surgeries.",
                "Total Knee Replacement.",
                "Total Elbow, Ankle & Shoulder Replacement.",
                "Total Joint Replacement Revision (Hip, Knee & Shoulder).",
                "Partial Joint Revision (Hip, Knee).",
                "Rheumatology.",
                "Physical Medicine & Rehabilitation.",
                "Pain Management.",
              ],
            },
            {
              tabsTitle: "Arthroplasty (Knee Replacement)",
              tabsdesc: [
                "Knee Replacement: In India, Knee replacements are very common. Here the diseased ends of the thigh and leg bones and sometimes the surface of knee cap are replaced.",
                "Hip Replacement: In Traditional total hip replacement the diseased ball along with the top part of the thigh bone and the surface of the socket is removed and replaced with artificial components.",
              ],
            },
            {
              tabsTitle: "Sports Medicine",
              tabsdesc: [
                "Ligaments are strong tissues that connects bones.  Anterior Cruciate Ligament (ACL) is one of the two ligaments which connects the thighbone (Femur) to the shinbone (Tibia) and it crosses in the middle of the knee which helps to stabilize knee joint. Mostly, the injuries to ACL occur during sports and fitness activities. While twisting or overextending the knee, this ligament may tear. But not everyone who tears an ACL requires ACL reconstruction. The people who can recover well with physical therapy and some conservative treatments. The Doctors at Prasad Hospitals, Best Orthopedic Hospital in Hyderabad, may recommend ACL reconstruction if:",
                "The athlete wants to continue in the sport which involves jumping, pivoting.",
                "More than one ligament or the cartilage in one’s knee is injured.",
                "A person is young and active.",
                "The injury is caused to knee to buckle during everyday activities, such as stair climbing.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],

      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    GeneralPhysician: {
      bannerbg: "banner-general-medicine.png",
      icons: "icon-genera medicine.png",
      title: "General Physician",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Division of General Internal Medicine at Prasad Hospitals consists of a Top General Physician in Hyderabad, group of specialist doctors and allied health staff who are dedicated to providing patient-centered, evidence-based medical care in a clinical environment supported by education and research. The internal medicine clinic comprises of a multi-disciplinary team of doctors provide holistic outpatient care for the adult population and consultative services for individuals suffering from complicated clinical problems. Prasad Hospitals have the Top General Physician in Hyderabad, with a comprehensive Clinical Programme. ",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: [
        "Dr. Y Ramesh",
        "Dr. Navya Mandadapu",
        "Dr. S. Raghavender",
        "Dr. Vamshi Krishna RVN",
      ],

      departmentContentTab: [
        {
          mainTitle: "GeneralPhysician",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs.",
              ],
            },
            {
              tabsTitle: "Specialized Care",
              tabsdesc: [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments.",
              ],
            },
            {
              tabsTitle: "Advanced Treatments",
              tabsdesc: [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],
      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    ENT: {
      bannerbg: "banner-ent.png",
      icons: "icon-ear-nose-throat.png",
      title: "Ear Nose Throat (ENT)",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Prasad Hospitals is one of the Best ENT Hospitals in Hyderabad who diagnose and treat problems such as hoarseness, hearing loss, vertigo, nosebleeds, and sinusitis. Our Department of ENT has earned a pedagogy in treating common ear-related problems including hearing loss, ear discharge, ear-ache, balance disorders, and Tinnitus. Problems associated with the nose such as nasal blockage, nasal deformity, Sinusitis, Allergic Rhinitis and tumors of the nose and sinuses are also redressed here. The common problems associated with the throat like sore throat including tonsillitis, snoring, hoarse voice, swallowing disorders and tumors of the throat and larynx are well- treated by our ENT panelists.",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["DR. Nishanth"],

      departmentContentTab: [
        {
          mainTitle: "Ear Nose Throat (ENT)",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "Functional Endoscopic Sinus Surgery (FESS).",
                "Tonsillectomy and adenoidectomy.",
                "Balloon Sinuplasty.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],
      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Pediatrics: {
      bannerbg: "banner-pediatrics.png",
      icons: "icon-pediatrics.png",
      title: "Pediatrics",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Pediatrics Department of Prasad Hospitals, the Best Children Hospital in Hyderabad, serves the medical needs of infants, children, and adolescents with compassionate care, bringing innovation to work to retain that innocent smile on those beautiful faces. Prasad Hospitals, the Best Children Hospital in Hyderabad, provides health services for the children from birth to early adulthood. Department of Pediatrics provides the full range of clinical services for children and adolescents. Our Pediatricians are well experienced and best in pediatric surgeries. Our Department of Pediatrics educates and gives emotional support to all the patients and their families",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: [
        "Dr. Shyam Sunder",
        "Dr. Mohan Chand Gutta",
        "Dr. Lakshmi Prasanna",
      ],

      departmentContentTab: [
        {
          mainTitle: "Pediatrics",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "Management of newborn complications : ",
                "Aprea",
                "Respiratory distress",
                "Neonatal Jaundice, Hypoglycemia, Hypothermia",
                "Neonatal sepsis",
                "Feeding Intolerance",
                "Management of complication/infant of Diabetic mother / Infant of Hypothyroid Mother",
                "Multiple births",
                "Common genetic problem",
                "IEM (Inborn error of metabolism) Screening",
                "Respiratory diseases : ",
                "Pharyngitis",
                "Bronchial asthma",
                "Childhood Allergy",
                "Bronchopneumonia",
                "Pleural effusion",
                "Acute lower respiratory tract infection",
                "Respiratory distress",
                "Cough cold.",
                "Common gastro internal problems : ",
                "Infant Colic",
                "Recurrent abdominal pain",
                "Vomiting",
                "Gastrointestinal problems",
                "Acute gastrointestinal",
                "Gastritis",
                "Enteric fever",
                "Diarrhoea with dehydration",
                "Mesenteric lymphadenitis",
                "Alimentary intolerance",
                "Malabsorption syndrome",
                "Hepatic pathologies",
                "Acute gastroenteritis",
                "Persistent post enteric diarrhoea",
                "Chronic constipation",
                "Fever of unknown origin : ",
                "Enteric Fever",
                "Dengue Fever",
                "Mesenteric lymphadenopathy",
                "Malaria",
              ],
            },
            {
              tabsTitle: "Responsibilities",
              tabsdesc: [
                "Responsible for developing health care delivery practices for infants and care of the newborn.",
                "Care of Newborn : ",
                "Fetal assessment / Prenatal Diagnoses",
                "Resuscitation of newborn",
                "Assessment / Treatment in the immediate postnatal period",
                "Examine newborn infant and other babies and detecting health issues to ensure timely treatment.",
                "Awareness and practices about breastfeeding advantages and weaning.",
                "Conducting Vaccination programs and educating parents on the importance of following the vaccination schedule.",
                "Providing, managing direct patient care including physical examination, medical assessment, diagnosis and treatment for the patient under 21 Yrs. of age.",
                "Conducting informative counseling for parents to give a detailed explanation regarding the clinical condition of health, diet, exercise.",
                "Collaborating with the pediatric team to perform annual medical checkups of students in various local schools.",
                "Provided urgent preliminary care to patients and referred them to appropriate higher centers.",
              ],
            },
            {
              tabsTitle: "Breastfeeding Programme Guidance",
              tabsdesc: [
                "Management & support for successful breastfeeding before discharge, all mothers should receive.",
                "Breastfeeding assessment by lactation or nurse guidance.",
                "General breastfeeding information : ",
                "The basic position of an infant to allow attachment at the breast.",
                "Counseling about feeding frequency, Infant sign of hunger.",
                "Common Breast condition experiences during early breastfeeding/prepare management.",
                "Management of Breastfeeding problems : ",
                "Sore Tender nipple",
                "Traumatizes painful nipple engagement",
                "Mastitis",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],
      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Radiology: {
      bannerbg: "banner-radiology.png",
      icons: "icon-radiology.png",
      title: "Radiology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Our Radiology Department is equipped with the latest imaging technologies to support accurate diagnosis and effective treatment planning. Services:",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. V Revanth", "Dr. Suprabatham"],

      departmentContentTab: [
        {
          mainTitle: "Radiology",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs.",
              ],
            },
            {
              tabsTitle: "Specialized Care",
              tabsdesc: [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments.",
              ],
            },
            {
              tabsTitle: "Advanced Treatments",
              tabsdesc: [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],

      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Neurology: {
      bannerbg: "banner-neurology.png",
      icons: "icon-neurology.png",
      title: "Neurology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Prasad Hospitals have the Best Neurologist in Hyderabad, who can help you address the full range of neurological issues, including migraines, neuropathy, and dementia. Because of their experience with a variety of neurological problems, Neurologists at Prasad Hospitals are especially skilled at pinpointing the cause of unusual or severe symptoms. Neurologists work with you and other specialists at Prasad Hospitals as needed to offer you a comprehensive, individualized approach to addressing your neurological condition.",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. Sravanthi Pavuluri", "Dr. P.Chandra Shekar"],

      departmentContentTab: [
        {
          mainTitle: "Neurology",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "Neuro-Surgery : ",
                "Neuro trauma",
                " Minimally invasive spine Surgery",
                "Neuro - Oncology (tumors of brain & spine)",
                "Pediatric Neurosurgery",
                "Skull base and Cerebrovascular SSSurgery",
                "Neurology : ",
                "Headache, migraine, epilepsy (fits), stroke (paralysis).",
                "Neck pain & back pain, Spondylosis",
                "Sciatica, vertigo (giddiness)",
                "Neuropathy, myopathy dementia (memory loss)",
                "Muscle disorders, movement disorders",
                "Parkinson's disease, Botox therapy, ataxia meningitis & encephalitis",
                "Sexual disorders",
                "Bell's palsy",
                "Sleep disorder",
                "Head injury",
              ],
            },
            {
              tabsTitle: "When to visit a Neurology expert?",
              tabsdesc: [
                "Partial or complete Paralysis",
                "Muscle weakness",
                "Partial or complete loss of sensation",
                "Imbalance",
                "Difficulty reading and writing",
                "Poor cognitive abilities",
                "Neck pain and Back pain",
                "Decreased alertness",
                "Double vision",
                "Memory loss",
                "Head ache",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],

      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Neurosurgery: {
      bannerbg: "banner-neurosurgery.png",
      icons: "icon-neurosurgery.png",
      title: "Neurosurgery",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Our Neurosurgery Department is committed to offering world-class treatment for brain, spine, and nervous system disorders. Our experienced neurosurgeons handle complex surgeries with precision and care. Services",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. N Rithvic", "Dr. Shyam"],

      departmentContentTab: [
        {
          mainTitle: "Neurosurgery",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs.",
              ],
            },
            {
              tabsTitle: "Specialized Care",
              tabsdesc: [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments.",
              ],
            },
            {
              tabsTitle: "Advanced Treatments",
              tabsdesc: [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],
      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Neonatology: {
      bannerbg: "banner-neonatology.png",
      icons: "icon-neonatology.png",
      title: "Neonatology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Our Neonatology Department provides specialized care for newborns, including those born prematurely or with health complications. Our neonatal intensive care unit (NICU) is equipped to handle delicate cases with compassion and expertise. Services",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. Mohan Chand Gutta", "Dr. Madhavchari"],

      departmentContentTab: [
        {
          mainTitle: "Neonatology",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs.",
              ],
            },
            {
              tabsTitle: "Specialized Care",
              tabsdesc: [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments.",
              ],
            },
            {
              tabsTitle: "Advanced Treatments",
              tabsdesc: [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care.",
              ],
            },
            {
              tabsTitle: "Comprehensive Diagnostics",
              tabsdesc: [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],

      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Pulmonology: {
      bannerbg: "banner-pulmonology.png",
      icons: "icon-pulmonology.png",
      title: "Pulmonology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Prasad Hospital's Department of Pulmonology offers comprehensive evaluation and treatment to all respiratory disorders. Prasad Hospitals have the Top Pulmonologists in Hyderabad. Being comprehensive, our lung specialists tweaks the pulmonary medicine approach to attend the pressing needs of each individual. Our core objective is to ensure the best and improved quality of life for all the patients. The department of pulmonology at Prasad Hospitals extends its services from normal lung health checks to serious respiratory disorders.",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. Yashwanth KO", "Dr. Rajesh Palvai"],

      departmentContentTab: [
        {
          mainTitle: "Pulmonology",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "Health promotion, screening/lung health checks.",
                "Allergy checks.",
                "Dedicated breathlessness and chronic cough clinics.",
                "Lung function tests.",
                "Asthma / COPD diagnosis using up-to-date technology.",
                "Tuberculosis - contact tracing and diagnosis.",
                "Diagnosis of lung cancer.",
                "Interstitial lung disease and bronchiectasis clinics.",
                "Flexible bronchoscopy - including interventional procedures - TBNA, Transbronchial lung biopsies.",
                "Medical Thoracoscopy (for diagnosis and treatment of unilateral pleural effusions).",
                "Fully equipped to manage sleep disorders.",
                "Respiratory ICU managing patients requiring non-invasive ventilation.",
                "Emergency medical care, including intercostal drain insertions.",
                "Home ventilation service (BIPAP, CPAP).",
                "Oxygen assessment including inflight oxygen.",
                "Pulmonary Rehabilitation.",
              ],
            },
            {
              tabsTitle: "Areas of Treatment",
              tabsdesc: [
                "Allergy.",
                "Asthma.",
                "Chronic Cough.",
                "COPD.",
                " Interstitial Lung Diseases (ILD).",
                "Lung Cancer.",
                "Pneumonia.",
                "Respiratory Failure.",
                "Snoring and Sleep Apnoea.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],
      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Urology: {
      bannerbg: "banner-urology.png",
      icons: "icon-urology.png",
      title: "Urology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Prasad's Institute of Urology, the Best Urology Hospital in Hyderabad, offers world-class & comprehensive urology care that comprises of diagnostics and treatment for urology cancers, prostate diseases, laparoscopic urology, reconstructive urology surgery, stone disease, erectile dysfunction, pediatric urology, pediatric renal transplant, and andrology.",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. Kalyan Varma", "Dr. Srikanth Munna"],

      departmentContentTab: [
        {
          mainTitle: "Urology",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs.",
              ],
            },
            {
              tabsTitle: "Specialized Care",
              tabsdesc: [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments.",
              ],
            },
            {
              tabsTitle: "Advanced Treatments",
              tabsdesc: [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care.",
              ],
            },
            {
              tabsTitle: "Comprehensive Diagnostics",
              tabsdesc: [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],

      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Nephrology: {
      bannerbg: "banner-nephrology.png",
      icons: "icon-nephrology.png",
      title: "Nephrology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Nephrology is the area in modern medicine that involves the diagnosis and treatment kidney ailments. A nephrologist diagnoses and decides the treatment for this of kidney disease, by balancing fluids in the body, regulating blood pressure, electrolytes.Nephrology is the area in modern medicine that involves the diagnosis and treatment of kidney ailments. A nephrologist diagnoses and decides the treatment for this of kidney disease, by balancing fluids in the body, regulating blood pressure, electrolytes, and administering dialysis. Prasad Hospitals, have the Best Nephrologist in Hyderabad, who treat different kidney disorders like acid-base disorders, electrolyte disorders, nephrolithiasis (kidney stones), High Blood Pressure, acute kidney disorder and last-stage of renal disease. Other kidney-related ailments include acquired conditions such as autoimmune diseases (e.g., lupus) and systemic vasculitides, as well as congenital or genetic conditions such as polycystic kidney disease.",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. Nagarjuna CH", "Dr. Ramesh Chadda"],

      departmentContentTab: [
        {
          mainTitle: "Nephrology",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: ["Out-patient consultation.", "Dialysis."],
            },
            {
              tabsTitle: "Dialysis",
              tabsdesc: [
                "At Prasad Hospitals, we have the Best Nephrologist in Hyderabad who intend on making the process of dialysis safe and rejuvenating for every patient.",
                "We use imported dialysis machines that are FDI-approved and have two in-house RO (Reverse Osmosis) plants that ensure the water that is used is sterile and hygienic. We thoroughly check and audit the consumables before using them, and ensure that we leave no stone unturned to ensure that your dialysis session is entirely event-free.",
                "Continuous monitoring : Like every procedure in our hospital, we believe that even dialysis requires close and constant monitoring as unexpected complications may arise during the process. Therefore, we ensure that every dialysis session is manned with trained manpower throughout the session.",
                "Entertainment : Every dialysis patient is given access to Free Wi-Fi and over 100 Television Channels to make sure the session isnt boring!",
                "Be assured that you are getting the highest quality : Being a NABH-accredited hospital, we implement the best-practices from across the globe and ensure the utmost care is taken during every dialysis session.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],

      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    SurgicalGastroenterology: {
      bannerbg: "banner-gastroenterology.png",
      icons: "icon-surgical-gastroenterology.png",
      title: "Surgical Gastroenterology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Our Surgical Gastroenterology Department offers expert care for a range of gastrointestinal disorders that require surgical intervention. Services",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. Kapil Tejaswy"],

      departmentContentTab: [
        {
          mainTitle: "SurgicalGastroenterology",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs.",
              ],
            },
            {
              tabsTitle: "Specialized Care",
              tabsdesc: [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments.",
              ],
            },
            {
              tabsTitle: "Advanced Treatments",
              tabsdesc: [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care.",
              ],
            },
            {
              tabsTitle: "Comprehensive Diagnostics",
              tabsdesc: [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],

      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Dental: {
      bannerbg: "banner-dental-care.png",
      icons: "icon-dental.png",
      title: "Dental",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Our Dental Department provides comprehensive oral care for patients of all ages. Our experienced dentists use the latest technology to ensure your smile stays healthy. Services",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. Ravi Sekhar"],

      departmentContentTab: [
        {
          mainTitle: "Dental",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs.",
              ],
            },
            {
              tabsTitle: "Specialized Care",
              tabsdesc: [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments.",
              ],
            },
            {
              tabsTitle: "Advanced Treatments",
              tabsdesc: [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care.",
              ],
            },
            {
              tabsTitle: "Comprehensive Diagnostics",
              tabsdesc: [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],

      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    GeneralSurgeon: {
      bannerbg: "banner-general-medicine.png",
      icons: "icon-general-surgery.png",
      title: "General Medicine",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Our General Surgery Department specializes in a wide range of surgical procedures using both traditional and minimally invasive techniques.",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. Basaweshwar", "Dr. Akshitha"],

      departmentContentTab: [
        {
          mainTitle: "GeneralSurgeon",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs.",
              ],
            },
            {
              tabsTitle: "Specialized Care",
              tabsdesc: [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments.",
              ],
            },
            {
              tabsTitle: "Advanced Treatments",
              tabsdesc: [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care.",
              ],
            },
            {
              tabsTitle: "Comprehensive Diagnostics",
              tabsdesc: [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],
      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Dermatology: {
      bannerbg: "banner-dermatology.png",
      icons: "icon-dermatology.png",
      title: "Dermatology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Dermatology department offers world-class medical and surgical dermatologic care for the scores of patients who seek advanced diagnostic and therapeutic interventions for a variety of problems related to the skin, hair, and nails. Prasad Hospitals being the Best Skin Hospitals in Hyderabad, Dermatology Department takes immense pride in the fact that it has a beautiful effect on how people look and feel about themselves thereby increasing their confidence and giving them an edge. Be it a toddler with a rash or a child with eczema or a teenager with persisting pimples or a youngster who has sun-tanned himself too much – our Dermatologists take care of these with deep-rooted impact with a holistic approach to the skin. The friendly Dermatologists at Prasad Hospitals also spend a lot of time with the patients and give them tips on better managing skin, hair, and nail concerns.",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. Sravanthi"],

      departmentContentTab: [
        {
          mainTitle: "Dermatology",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "Acne",
                "Eczema",
                "Dermatitis",
                "Psoriasis",
                "Rosacea",
                "Hair loss",
                "Warts",
                "Actinic keratosis",
                "Common skin infections",
                "Vitiligo",
                "Genetic skin diseases",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],
      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    Anesthesiology: {
      bannerbg: "banner-anesthesiology.png",
      icons: "icon-anesthesiology.png",
      title: "Anesthesiology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Our Anaesthesiology Department ensures that patients receive the best care before, during, and after surgical procedures. We focus on patient safety and comfort throughout their treatment. Services",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. S. Raghavender", "Dr. Jayanth Varma Bahadur"],

      departmentContentTab: [
        {
          mainTitle: "Anesthesiology",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs.",
              ],
            },
            {
              tabsTitle: "Specialized Care",
              tabsdesc: [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments.",
              ],
            },
            {
              tabsTitle: "Advanced Treatments",
              tabsdesc: [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care.",
              ],
            },
            {
              tabsTitle: "Comprehensive Diagnostics",
              tabsdesc: [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],
      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    CriticalCare: {
      bannerbg: "banner-critical-care.png",
      icons: "icon-criticalcare.png",
      title: "Critical Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Our Critical Care Unit is equipped with the latest technology to provide intensive treatment for critically ill patients. Our expert team of intensivists and nurses is available 24/7 to manage life-threatening conditions. Services",
      ourStoryImage: "why-choose-img.jpg",
      whyPrasadTittle: "Why Prasad?",
      whyDescription:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",

      doctors: ["Dr. Manogna", "Dr. Kishore", "Dr. Gowtham"],

      departmentContentTab: [
        {
          mainTitle: "CriticalCare",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs.",
              ],
            },
            {
              tabsTitle: "Specialized Care",
              tabsdesc: [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments.",
              ],
            },
            {
              tabsTitle: "Advanced Treatments",
              tabsdesc: [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care.",
              ],
            },
            {
              tabsTitle: "Comprehensive Diagnostics",
              tabsdesc: [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis.",
              ],
            },
          ],
        },
      ],

      treatmentProcedures: [
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          treatTitle:
            "What services are offered in Accident and Emergency Care?",
          treatdesc:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
      ],

      faq: [
        {
          question: "What services are offered in Accident and Emergency Care?",
          answer:
            "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
        },
        {
          question: "How can I contact the emergency department?",
          answer:
            "You can contact the emergency department by calling the hospital's emergency hotline.",
        },
      ],
    },

    /* "": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.", 
      
      doctors: [
        "",
      ],

      "treatmentProcedures": [
        {
          "treatTitle": "What services are offered in Accident and Emergency Care?",
          "treatdesc": "We offer 24/7 emergency services with a multidisciplinary team of doctors."
        },
        {
          "treatTitle": "What services are offered in Accident and Emergency Care?",
          "treatdesc": "We offer 24/7 emergency services with a multidisciplinary team of doctors."
        }
      ],
      "faq": [
        {
          "question": "What services are offered in Accident and Emergency Care?",
          "answer": "We offer 24/7 emergency services with a multidisciplinary team of doctors."
        },
        {
          "question": "How can I contact the emergency department?",
          "answer": "You can contact the emergency department by calling the hospital's emergency hotline."
        }
      ] 
    } */
  },
};

export default data;