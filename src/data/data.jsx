const data = {
  hospitals: {
    PragathiNagar: {
      specialties: {
        Infertility: ["Dr. Suma Prasad"],
        Gynecology: ["Dr. Suma Prasad", "Dr. K Shravanya"],
        Cardiology: ["Dr. V Sravan Kumar"],
        Orthopedics: ["Dr. Siddharth Potluri", "Dr. Jampani Ravitheja"],
        GeneralPhysician: ["Dr. Y Ramesh", "Dr. Navya Mandadapu"],
        ENT: ["Dr. S Nishanth"],
        Pediatrics: ["Dr. Shyam Sunder", "Dr. Mohan Chand Gutta"],
        Radiology: ["Dr. V Revanth"],
        Neurology: ["Dr. Sravanthi Pavuluri"],
        Neurosurgery: ["Dr. N Rithvic"],
        Nenotology: ["Dr. Mohan Chand Gutta"],
        Pulmonology: ["Dr. Yashwanth KO"],
        Urology: ["Dr. Kalyan Varma"],
        Nephrology: ["Dr. Nagarjuna CH"],

        SurgicalGastroenterology: ["Dr. Kapil Tejaswy"],
        Dental: ["Dr. Ravi Sekhar"],
      }
    },
    Nacharam: {
      specialties: {
        Infertility: ["Dr. Suma Prasad", "Dr. Tejashwani"],
        Gynecology: ["Dr. Suma Prasad", "Dr. Tejashwani", "Dr. Sneha"],
        Cardiology: ["Dr. Sampath"],
        Orthopedics: ["Dr. Karthik"],
        GeneralPhysician: ["Dr. Raghavender", "Dr. Vamshi Krishna RVN"],
        ENT: ["Dr. S Nishanth"],
        Pediatrics: ["Dr. Lakshmi Prasanna"],
        Radiology: ["Dr. Suprabatham"],
        Neurology: ["Dr. P.Chandra Shekar"],
        Neurosurgery: ["Dr. Shyam"],
        Nenotology: ["Dr. Madhavchari"],
        Pulmonology: ["Dr. Rajesh Palvai"],
        Urology: ["Dr. Srikanth Munna"],
        Nephrology: ["Dr. Ramesh Chadda"],
        
        GeneralSurgeon: ["Dr. Basaweshwar", "Dr. Akshitha"],
        Dermatology: ["Dr. Sravanthi"],
        Anesthesiology: ["Dr. Raghavender", "Dr. Jayanth Varma Bahadur"],
        CriticalCare: ["Dr. Manogna", "Dr. Kishore", "Dr. Gowtham"],
      }
    },
    Manikonda: {
      specialties: {
        Infertility: ["Dr. Suma Prasad", "Dr. Tejashwani"],
        Orthopedics: ["Dr. Karthik"],
        Gynecology: ["Dr. Suma Prasad", "Dr. Tejashwani", "Dr. Sneha"],
      }
    }
  },

  doctors: {
    /* nacharam doctors data */
    "Dr. Suma Prasad": {
      qualification: "MBBS, DGO, MD",
      overview: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American Medical Association",
      expertise: "Gynecologist & IVF Specialist",
      languages: ["English", "Telugu"],
      publications: ["Gynecology Advances", "Women's Health"],
      image: 'php-dr-k-suma-prasad.jpg',
    },
    "Dr. k Shravanya": {
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
      image: 'phn-dr-s-raghavender.jpg',
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
      image: 'phn-dr-i-laxmi-prasanna.jpg',
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
      image: 'phn-dr-g-tejashwini.jpg',
    },
    "Dr. Sneha": {
      qualification: "MBBS, DGO",
      overview: "8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of Pulmonology Society",
      expertise: "Asthma Specialist",
      languages: ["English", "Spanish"],
      publications: ["Asthma Care", "Respiratory Health"],
      image: 'phn-dr-sneha-teddu.jpg',
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
      image: 'phn-dr-s-s-karthik.jpg',
    },
    "Dr. Suprabatham": {
      qualification: "MBBS, Diploma in Medical Radio-Diagnosis",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Fellow of International Nephrology Society",
      expertise: "Dialysis Specialist",
      languages: ["English", "Bengali"],
      publications: ["Dialysis Advances", "Renal Care"],
      image: 'phn-dr-k-suprabatham.jpg',
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
      image: 'phn-dr-s-nishanth.jpg',
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
      image: 'phn-dr-sampath-kumar-madapat.jpg',
    },
    "Dr. Rajesh Palvai": {
      qualification: "MBBS, MD - Pulmonary Medicine",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'phn-dr-rajesh-palvai.jpg',
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
    },

     /* pragathinagar doctors data */
     "Dr. V Sravan Kumar": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-v-sravan-kumar.jpg',
    },
    "Dr. Siddharth Potluri": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Jampani Ravitheja": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-jampani-ravitheja.jpg',
    },
    "Dr. Y Ramesh": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-yerrabothu-ramesh.jpg',
    },
    "Dr. Navya Mandadapu": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-mandadapu-navya.jpg',
    },
    "Dr. S Nishanth": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-s-nishanth.jpg',
    },
    "Dr. V Revanth": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Sravanthi Pavuluri": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-sravanthi-pavuluri.jpg',
    },
    "Dr. N Rithvic": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Shyam Sunder": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-syam-sunder-r.jpg',
    },
    "Dr. Mohan Chand Gutta": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-gutta-mohan-chand.jpg',
    },
    "Dr. Yashwanth KO": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-yashwant-k-o.jpg',
    },
    "Dr. Kapil Tejaswy": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Kalyan Varma": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Ravi Sekhar": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },
    "Dr. Nagarjuna CH": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: 'php-dr-dummy-male.jpg',
    },

  },

  specialtiesData: {
    "Infertility": {
      bannerbg: "infertility-doctors-list.png", /* here use only related specialties banner image changes below images */
      icons: "",
      title: "1 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",
      
      doctors: [
        "Dr. Suma Prasad",
        "Dr. Tejashwani",
      ],

      "treatmentProcedures": [
        {
          "treatTitle": "What services are offered in Accident and Emergency Care?",
          "treatdesc": "We offer 24/7 emergency services with a multidisciplinary team of doctors."
        },
        {
          "treatTitle": "What services are offered in Accident and Emergency Care?",
          "treatdesc": "We offer 24/7 emergency services with a multidisciplinary team of doctors."
        },
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
    },

    "Gynecology": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "2 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "Why Prasad",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      doctors: [
        "Dr. Suma Prasad",
        "Dr. Raghavender",
        "Dr. K Shravanya",
        "Dr. Tejashwani",
        "Dr. Sneha",
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
    },

    "Cardiology": {
      bannerbg: "cente-of-excellence-banner-image.jpg",
      icons: "",
      title: "3 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. V Sravan Kumar",
        "Dr. Sampath",
      ],

      "treatmentProcedures": [
        {
          "treatTitle": "What services are offered in Accident and Emergency Care?",
          "treatdesc": "We offer 24/7 emergency services with a multidisciplinary team of doctors."
        },
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
    },

    "Orthopedics": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Siddharth Potluri",
        "Dr. Jampani Ravitheja",
        "Dr. Karthik",
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
    },

    "GeneralPhysician": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Y Ramesh",
        "Dr. Navya Mandadapu",
        "Dr. Raghavender",
        "Dr. Vamshi Krishna RVN",
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
    },

    "ENT": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "DR. Nishanth",
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
    },

    "Pediatrics": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Shyam Sunder",
        "Dr. Mohan Chand Gutta",
        "Dr. Lakshmi Prasanna",
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
    },

    "Radiology": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. V Revanth",
        "Dr. Suprabatham"
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
    },

    "Neurology": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Sravanthi Pavuluri",
        "Dr. P.Chandra Shekar",
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
    },

    "Neurosurgery": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. N Rithvic",
        "Dr. Shyam"
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
    },

    "Nenotology": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Mohan Chand Gutta",
        "Dr. Madhavchari",
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
    },

    "Pulmonology": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Yashwanth KO",
        "Dr. Rajesh Palvai"
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
    },

    "Urology": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Kalyan Varma",
        "Dr. Srikanth Munna"
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
    },

    "Nephrology": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Nagarjuna CH",
        "Dr. Ramesh Chadda",
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
    },

    "SurgicalGastroenterology": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Kapil Tejaswy",
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
    },

    "Dental": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Ravi Sekhar",
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
    },

    "GeneralSurgeon": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Basaweshwar",
        "Dr. Akshitha"
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
    },

    "Dermatology": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Sravanthi"
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
    },

    "Anesthesiology": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Raghavender",
        "Dr. Jayanth Varma Bahadur"
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
    },

    "CriticalCare": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
      doctors: [
        "Dr. Manogna",
        "Dr. Kishore",
        "Dr. Gowtham",
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
    },

    /* "": {
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "4 Accident and Emergency Care",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description: "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription: "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.", 
      
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


  }

};

export default data;