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
    "Dr. K. Suma Prasad": {
    "qualification": "MBBS, DGO, MD - Obstetrics & Gynaecology",
    "overview": {
      "heading": "Overview",
      "content": [
        "Dr. Suma Prasad is a renowned infertility specialist with over 20 years of experience.",
        "She has successfully treated thousands of couples with reproductive challenges.",
        "Her research and contributions to the field have been widely recognized."
      ]
    },
    "fellowship": {
      "heading": "Fellowship & Membership",
      "content": [
        "Member of American Medical Association",
        "Member of American Medical Association1",
        "Member of American Medical Association2"
      ]
    },
    "expertise": {
      "heading": "Field of Expertise",
      "content": [
        "Gynecologist & IVF Specialist"
      ]
    },
    "languages": {
      "heading": "Languages Spoken",
      "content": [
        "English",
        "Telugu"
      ]
    },
    "publications": {
      "heading": "Talks & Publications",
      "content": [
        "Gynecology Advances",
        "Women's Health"
      ]
    },
    "awards": {
      "heading": "Awards & Achievements",
      "content": [
        "Recipient of Best IVF Specialist Award 2021",
        "Recognized by the Indian Medical Association"
      ]
    },
    "image": "php-dr-k-suma-prasad.jpg"
  },
    "Dr. k. Suma Prasad": {
      qualification: "MBBS, DGO, MD - Obstetrics & Gynaecology",
      overview:
        "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American Medical Association",
      expertise: "Gynecologist & IVF Specialist",
      languages: ["English", "Telugu"],
      publications: ["Gynecology Advances", "Women's Health"],
      image: "php-dr-k-suma-prasad.jpg",
    },
    "Dr. k Shravanya": {
      qualification: "MBBS, DGO, FMAS, DMAS",
      overview:
        "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
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
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-v-sravan-kumar.jpg",
    },
    "Dr. Siddharth Potluri": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
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
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-yerrabothu-ramesh.jpg",
    },
    "Dr. Navya Mandadapu": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-mandadapu-navya.jpg",
    },
    "Dr. S Nishanth": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-s-nishanth.jpg",
    },
    "Dr. V Revanth": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-dummy-male.jpg",
    },
    "Dr. Sravanthi Pavuluri": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
      fellowship: "Member of American College of Cardiology",
      expertise: "Interventional Cardiology",
      languages: ["English", "Kannada"],
      publications: ["Heart Disease Management", "Cardiac Interventions"],
      image: "php-dr-sravanthi-pavuluri.jpg",
    },
    "Dr. N Rithvic": {
      qualification: "MBBS | MD - Anaesthesiology",
      overview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur nobis quaerat nostrum ducimus saepe consequatur velit voluptates a, quia hic eius nihil architecto culpa ipsam atque, veritatis consequuntur. Excepturi?",
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
      bannerbg:
        "infertility-doctors-list.png" /* here use only related specialties banner image changes below images */,
      icons: "",
      title: "Infertility",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Center for Infertility at Prasad Hospitals has India’s best specialists with good experience and have a high success rate. Prasad Hospitals, the Best Infertility Hospitals in Hyderabad, treats the patients with the advanced technologies in the processes like IVF, ICSI, Male Infertility, IUI, PGD, and many. Many patients with fertility issues approached us and got the best treatment with the best success rate.",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      icons: "",
      title: "Gynecology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Our Doctors of Gynecology and Obstetrics believes that best healthcare is crucial for a mother and her child. We ensure that she gets the best. Whether you just started your period or you’re a great-grandmother, you should.",
      ourStoryImage: "",
      whyPrasadTittle: "Why Prasad",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      icons: "",
      title: "Cardiology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      icons: "",
      title: "Orthopedics",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Centre for Orthopedics, Trauma & Joint Diseases at Prasad Hospitals is on par with the best Joint Replacement Units in India with the 0% surgical-side infection rate. All types of Joint Replacements (Hip, Knee & Shoulder) are performed.",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "GeneralPhysician",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "Ear Nose Throat (ENT)",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Ear, Nose & Throat (ENT) specialists at Prasad Hospitals diagnose and treat problems such as hoarseness, hearing loss, vertigo, nosebleeds and sinusitis. Our Department of ENT has earned a pedagogy in treating common ear-related problems including hearing.",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "Pediatrics",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Pediatrics department of Prasad Hospitals serves the medical needs of infants, children and adolescents with compassionate care, bringing innovation to work to retain that innocent smile on those beautiful faces. The Center for Pediatrics provides comprehensive healthcare services.",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "Radiology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "Neurology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Our Neurologists can help you address the full range of neurological issues, including migraines, neuropathy and dementia. Because of their experience with a variety of neurological problems, neurologists at Prasad Hospitals are especially skilled at pinpointing the cause of unusual or severe symptoms",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "Neurosurgery",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "Neonatology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "Pulmonology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Prasads’ Department of Pulmonology offers comprehensive evaluation and treatment to all your respiratory disorders. Although comprehensive, our pulmonary medicine approach is tweaked by pulmonary specialists to attend to the pressing needs of each individual.",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "Urology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Prasad’s Institute of Urology offers world-class & comprehensive urology care that comprises of diagnostics and treatment for urology cancers, prostate diseases, laproscopic urology, reconstructive urology surgery, stone disease, erectile dysfunction, paediatric urology, paediatric renal transplant.",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "Nephrology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "Nephrology is the area in modern medicine that involves the diagnosis and treatment kidney ailments. A nephrologist diagnoses and decides the treatment for this of kidney disease, by balancing fluids in the body, regulating blood pressure, electrolytes.",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

      doctors: ["Dr. Nagarjuna CH", "Dr. Ramesh Chadda"],

      departmentContentTab: [
        {
          mainTitle: "Nephrology",
          sections: [
            {
              tabsTitle: "List of Services",
              tabsdesc: [
                "Out-patient consultation.",
                "Dialysis.",
              ],
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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "SurgicalGastroenterology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

      doctors: ["Dr. Kapil Tejaswy"],

      "departmentContentTab": [
        {
          "mainTitle": "SurgicalGastroenterology",
          "sections": [
            {
              "tabsTitle": "List of Services",
              "tabsdesc": [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs."
              ]
            },
            {
              "tabsTitle": "Specialized Care",
              "tabsdesc": [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments."
              ]
            },
            {
              "tabsTitle": "Advanced Treatments",
              "tabsdesc": [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care."
              ]
            },
            {
              "tabsTitle": "Comprehensive Diagnostics",
              "tabsdesc": [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis."
              ]
            }
          ]
        }
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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "Dental",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

      doctors: ["Dr. Ravi Sekhar"],

      "departmentContentTab": [
        {
          "mainTitle": "Dental",
          "sections": [
            {
              "tabsTitle": "List of Services",
              "tabsdesc": [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs."
              ]
            },
            {
              "tabsTitle": "Specialized Care",
              "tabsdesc": [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments."
              ]
            },
            {
              "tabsTitle": "Advanced Treatments",
              "tabsdesc": [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care."
              ]
            },
            {
              "tabsTitle": "Comprehensive Diagnostics",
              "tabsdesc": [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis."
              ]
            }
          ]
        }
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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "GeneralSurgeon",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

      doctors: ["Dr. Basaweshwar", "Dr. Akshitha"],

      "departmentContentTab": [
        {
          "mainTitle": "GeneralSurgeon",
          "sections": [
            {
              "tabsTitle": "List of Services",
              "tabsdesc": [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs."
              ]
            },
            {
              "tabsTitle": "Specialized Care",
              "tabsdesc": [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments."
              ]
            },
            {
              "tabsTitle": "Advanced Treatments",
              "tabsdesc": [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care."
              ]
            },
            {
              "tabsTitle": "Comprehensive Diagnostics",
              "tabsdesc": [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis."
              ]
            }
          ]
        }
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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "Dermatology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Dermatology department offers world-class medical and surgical dermatologic care for the scores of patients who seek advanced diagnostic and therapeutic interventions for a variety of problems related to the skin, hair, and nails. The department takes.",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

      doctors: ["Dr. Sravanthi"],

      "departmentContentTab": [
        {
          "mainTitle": "Dermatology",
          "sections": [
            {
              "tabsTitle": "List of Services",
              "tabsdesc": [
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
              ]
            },
          ]
        }
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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "Anesthesiology",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

      doctors: ["Dr. S. Raghavender", "Dr. Jayanth Varma Bahadur"],

      "departmentContentTab": [
        {
          "mainTitle": "Anesthesiology",
          "sections": [
            {
              "tabsTitle": "List of Services",
              "tabsdesc": [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs."
              ]
            },
            {
              "tabsTitle": "Specialized Care",
              "tabsdesc": [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments."
              ]
            },
            {
              "tabsTitle": "Advanced Treatments",
              "tabsdesc": [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care."
              ]
            },
            {
              "tabsTitle": "Comprehensive Diagnostics",
              "tabsdesc": [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis."
              ]
            }
          ]
        }
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
      bannerbg: "Banner-doctors-list.png",
      icons: "",
      title: "CriticalCare",
      subtitle: "Accident and Emergency Care Services in Bangalore",
      description:
        "The Department of Accident and Emergency Care at prasad Hospitals treats everything from life-threatening crises like heart attacks and strokes to the likes of cuts and fractures with the same care. Available 24x7, ED treats infants, children, adolescents and adults in the need of all kinds of medical emergency",
      ourStoryImage: "",
      whyPrasadTittle: "",
      whyDescription:
        "The emergency department at prasad Hospital has a team of multidisciplinary doctors, nurses trained in critical care and emergency, and specialists who are available around the clock. Once the patient is admitted, a triage of nurses examines and allows a zone to the patient depending on the severity of the condition. Patients with life-threatening and time-critical conditions like heart attack, stroke, and major accidents are immediately attended to by a doctor and managed in a separate dedicated zone called the Resuscitation Bay. The patient is directly shifted to this bay without any delay where a team of expert doctors and nurses immediately assess and start interventions to stabilize the patient. Using state-of-the-art diagnostic equipment, prasad Hospitals is quickly able to scan the body for internal injuries and start the right course of treatment for better care and recovery.",

      doctors: ["Dr. Manogna", "Dr. Kishore", "Dr. Gowtham"],

      "departmentContentTab": [
        {
          "mainTitle": "CriticalCare",
          "sections": [
            {
              "tabsTitle": "List of Services",
              "tabsdesc": [
                "We offer 24/7 emergency services with a multidisciplinary team of doctors.",
                "Our emergency services are designed to handle any urgent medical needs."
              ]
            },
            {
              "tabsTitle": "Specialized Care",
              "tabsdesc": [
                "Specialized care provided by expert doctors in various fields.",
                "We have a team of specialists available for advanced treatments."
              ]
            },
            {
              "tabsTitle": "Advanced Treatments",
              "tabsdesc": [
                "We offer advanced treatment options for complex conditions.",
                "Our state-of-the-art facilities ensure the best care."
              ]
            },
            {
              "tabsTitle": "Comprehensive Diagnostics",
              "tabsdesc": [
                "Comprehensive diagnostic services available to pinpoint conditions.",
                "We use the latest technology for accurate diagnosis."
              ]
            }
          ]
        }
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
  },
};

export default data;
