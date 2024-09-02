const data = {
  hospitals: {
    Manikonda: ["Infertility", "Orthopedics", "Gynecology"],
    PragathiNagar: ["Pulmonology", "Nephrology", "Urology"],
    Nacharam: ["GeneralPhysician", "Pediatrics", "Nenotology", "Gynecology", "Infertility", "Neurology", "Orthopedics", "Radiology", "GeneralSurgeon", "Urology", "Dermatology", "EarNoseThroat", "Neurosurgery", "Nephrology", "Cardiology", "Pulmonology", "Anesthesiology", "CriticalCare"],
  },

  specialties: {
    GeneralPhysician: ["Dr. Raghavender", "Dr. Vamshi Krishna RVN"],
    Pediatrics: ["Dr. Lakshmi Prasanna"],
    Nenotology: ["Dr. Madhavchari"],
    Gynecology: ["Dr. Suma Prasad", "Dr. Tejashwani", "Dr. Sneha"],
    Infertility: ["Dr. Suma Prasad", "Dr. Tejashwani",],
    Neurology: ["Dr. P.Chandra Shekar"],
    Orthopedics: ["Dr. Karthik"],
    Radiology: ["Dr. Suprabatham"],
    GeneralSurgeon: ["Dr. Basaweshwar", "Dr. Akshitha"],
    Urology: ["Dr. Srikanth Munna"],
    Dermatology: ["Dr. Sravanthi"],
    EarNoseThroat: ["DR. Nishanth"],
    Neurosurgery: ["Dr. Shyam"],
    Nephrology: ["Dr. Ramesh Chadda"],
    Cardiology: ["Dr. Sampath"],
    Pulmonology: ["Dr. Rajesh Palvai"],
    Anesthesiology: ["Dr. Raghavender", "Dr. Jayanth Varma Bahadur"],
    CriticalCare: ["Dr. Manogna", "Dr. Kishore", "Dr. Gowtham"],    
  },

  doctors: {
    "Dr. Suma Prasad": {
      qualification: "MBBS, DGO, MD",
      overview: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American Medical Association",
      expertise: "Gynecologist & IVF Specialist",
      languages: ["English", "Telugu"],
      publications: ["Gynecology Advances", "Women's Health"],
      image: 'php-dr-k-suma-prasad.jpg',
    },
    "Dr. Shravanya": {
      qualification: "MBBS, DGO, FMAS, DMAS",
      overview: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of Royal College of Physicians",
      expertise: "Infertility Specialist",
      languages: ["English", "Hindi"],
      publications: ["Infertility Research 2020", "Advanced IVF Techniques"],
      image: 'php-dr-k-shravanya.jpg', /* here we can give image name directly to the all image */
    },
    "Dr. Raghavender": {
      qualification: "MD - General Medicine, MBBS",
      overview: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of Orthopedic Society",
      expertise: "Orthopedic Surgeon",
      languages: ["English", "Kannada"],
      publications: ["Bone Health 2019", "Joint Replacement Techniques"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Vamshi Krishna RVN": {
      qualification: "MD - General Medicine, MBBS",
      overview: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of International Orthopedic Society",
      expertise: "Sports Injuries",
      languages: ["English", "Gujarati"],
      publications: ["Sports Medicine 2021", "Advanced Orthopedics"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Lakshmi Prasanna": {
      qualification: "MBBS, Diploma in Child Health (DCH)",
      overview: "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of Gynecological Society",
      expertise: "Obstetrician",
      languages: ["English", "Marathi"],
      publications: ["Women's Health 2018", "Childbirth Techniques"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Madhavchari": {
      qualification: "Diploma in Child Health (DCH)",
      overview: "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of American College of Gynecology",
      expertise: "Gynecology and Obstetrics",
      languages: ["English", "Tamil"],
      publications: ["Gynecology Today", "Advanced Obstetrics"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Tejashwani": {
      qualification: "MBBS, DGO",
      overview: "7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of Pulmonology Society",
      expertise: "Pulmonologist",
      languages: ["English", "Malayalam"],
      publications: ["Respiratory Medicine 2017", "Advanced Pulmonology"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Sneha": {
      qualification: "MBBS, DGO",
      overview: "8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of Pulmonology Society",
      expertise: "Asthma Specialist",
      languages: ["English", "Spanish"],
      publications: ["Asthma Care", "Respiratory Health"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. P.Chandra Shekar": {
      qualification: ".....MBBS, DM Nephrology.....",
      overview: "9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of Nephrology Society",
      expertise: "Kidney Transplant",
      languages: ["English", "Punjabi"],
      publications: ["Nephrology Research", "Kidney Health"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Karthik": {
      qualification: "MBBS, MS - Orthopaedics",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of International Nephrology Society",
      expertise: "Dialysis Specialist",
      languages: ["English", "Bengali"],
      publications: ["Dialysis Advances", "Renal Care"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Suprabatham": {
      qualification: "MBBS, Diploma in Medical Radio-Diagnosis",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of International Nephrology Society",
      expertise: "Dialysis Specialist",
      languages: ["English", "Bengali"],
      publications: ["Dialysis Advances", "Renal Care"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Basaweshwar": {
      qualification: "MBBS, DNB - General Surgery",
      overview: "9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of Urology Society",
      expertise: "Urological Surgery",
      languages: ["English", "Telugu"],
      publications: ["Urology Today", "Advanced Urological Techniques"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Akshitha": {
      qualification: "MBBS, DNB - General Surgery",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American Urological Association",
      expertise: "Urology Specialist",
      languages: ["English", "Tamil"],
      publications: ["Prostate Health", "Kidney Stone Treatment"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Srikanth Munna": {
      qualification: "MBBS, MCh - Urology/Genito-Urinary Surgery",
      overview: "10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of Cardiology Society",
      expertise: "Cardiologist",
      languages: ["English", "Hindi"],
      publications: ["Heart Health", "Cardiology Research"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Sravanthi": {
      qualification: "MBBS, DDVL",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "DR. Nishanth": {
      qualification: "MS - ENT, MBBS",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Shyam": {
      qualification: "MBBS, MS - General Surgery, MCh - Neuro Surgery",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Ramesh Chadda": {
      qualification: "MBBS, MD - General Medicine, DM - Nephrology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Sampath": {
      qualification: "MBBS, MD - General Medicine, DM - Cardiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Rajesh Palvai": {
      qualification: "MBBS, MD - Pulmonary Medicine",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Jayanth Varma Bahadur": {
      qualification: "MBBS, DA (ANAESTHESIA )",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    }
    ,"Dr. Manogna": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Kishore": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Gowtham": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    }
  },

  specialtiesData: {
    "Infertility": {
      bannerbg: "cente-of-excellence-banner-image.jpg",
      icons: "",
      title: "1 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at Manipal Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at Manipal Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, Manipal Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",
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
    },
    "Orthopedics": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "2 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at Manipal Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "Why Prasad",
      whyDescription: "The emergency department at Manipal Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, Manipal Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
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
    },
    "Gynecology": {
      bannerbg: "cente-of-excellence-banner-image.jpg",
      icons: "",
      title: "3 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at Manipal Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at Manipal Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, Manipal Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
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
    },
    "EarNoseThroat": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at Manipal Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at Manipal Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, Manipal Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
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
    }
  }

};

export default data;