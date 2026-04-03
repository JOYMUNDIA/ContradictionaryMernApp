// src/mockData/drugCardData.ts
import cardiovascularImg from "../assets/DrugCategoryImages/cardiovascular_system.png";
import digestiveImg from "../assets/DrugCategoryImages/digestive_system.png";
import endocrineImg from "../assets/DrugCategoryImages/endocrine_system.png";
import infectionImg from "../assets/DrugCategoryImages/infection.png";
import musculoskeletalImg from "../assets/DrugCategoryImages/musculoskeletal_system.png";
import nervousImg from "../assets/DrugCategoryImages/nervous_system.png";
import respiratoryImg from "../assets/DrugCategoryImages/respiratory_system.png";
import urinaryImg from "../assets/DrugCategoryImages/urinary_system.png";

export type MiniCard = {
  title: string
  items: string[]
  link: string
}

export type DrugSystem = {
  system: string
  image: string
  miniCards: MiniCard[]
}

export const drugSystemsMock: DrugSystem[] = [
  {
    system: "Cardiovascular System",
    image: cardiovascularImg,
    miniCards: [
      {
        title: "Antihypertensives",
        items: [
          "ACE inhibitors – Lisinopril, Enalapril",
          "Beta blockers – Atenolol, Metoprolol",
          "Calcium channel blockers – Amlodipine, Diltiazem",
          "ARBs – Losartan, Valsartan",
          "Diuretics – Hydrochlorothiazide, Furosemide"
        ],
        link: "/medscategoryRecordsNoOverview"
      },
      {
        title: "Antiarrhythmics",
        items: [
          "Class I – Lidocaine, Procainamide",
          "Class II – Beta blockers",
          "Class III – Amiodarone",
          "Class IV – Verapamil, Diltiazem"
        ],
        link: "/medscategoryNoRecord"
      },
      {
        title: "Anticoagulants / Antiplatelets",
        items: [
          "Anticoagulants – Warfarin, Heparin, Apixaban",
          "Antiplatelets – Aspirin, Clopidogrel"
        ],
        link: "/medscategory"
      },
      {
        title: "Lipid-Lowering Agents",
        items: [
          "Statins – Atorvastatin, Simvastatin",
          "Fibrates – Fenofibrate",
          "Niacin",
          "Ezetimibe"
        ],
        link: "#"
      }
    ]
  },

  {
    system: "Nervous System",
    image: nervousImg,
    miniCards: [
      {
        title: "Antidepressants",
        items: [
          "SSRIs – Fluoxetine, Sertraline",
          "SNRIs – Venlafaxine, Duloxetine",
          "Tricyclics – Amitriptyline",
          "MAO inhibitors – Phenelzine, Tranylcypromine"
        ],
        link: "#"
      },
      {
        title: "Anxiolytics / Sedatives",
        items: [
          "Benzodiazepines – Diazepam, Lorazepam",
          "Z-drugs – Zolpidem"
        ],
        link: "#"
      },
      {
        title: "Antipsychotics",
        items: [
          "Typical – Haloperidol",
          "Atypical – Olanzapine, Risperidone"
        ],
        link: "#"
      },
      {
        title: "Antiepileptics",
        items: ["Phenytoin, Valproate, Carbamazepine"],
        link: "#"
      },
      {
        title: "Parkinson’s Disease Medications",
        items: ["Levodopa/Carbidopa, Selegiline"],
        link: "#"
      }
    ]
  },

  {
    system: "Gastrointestinal System",
    image: digestiveImg,
    miniCards: [
      {
        title: "Acid Suppressants",
        items: [
          "PPIs – Omeprazole, Pantoprazole",
          "H2 blockers – Ranitidine, Famotidine"
        ],
        link: "#"
      },
      {
        title: "Laxatives / Antidiarrheals",
        items: [
          "Lactulose, Senna",
          "Loperamide, Bismuth subsalicylate"
        ],
        link: "#"
      },
      {
        title: "Antiemetics",
        items: ["Ondansetron, Metoclopramide"],
        link: "#"
      }
    ]
  },

  {
    system: "Endocrine System",
    image: endocrineImg,
    miniCards: [
      {
        title: "Diabetes Medications",
        items: [
          "Insulin (various types)",
          "Metformin, Glipizide"
        ],
        link: "#"
      },
      {
        title: "Thyroid Drugs",
        items: [
          "Levothyroxine",
          "Methimazole, Propylthiouracil"
        ],
        link: "#"
      },
      {
        title: "Corticosteroids",
        items: ["Prednisone, Dexamethasone"],
        link: "#"
      }
    ]
  },

  {
    system: "Musculoskeletal System",
    image: musculoskeletalImg,
    miniCards: [
      {
        title: "NSAIDs",
        items: ["Ibuprofen, Naproxen, Diclofenac"],
        link: "#"
      },
      {
        title: "DMARDs (Rheumatoid Arthritis)",
        items: ["Methotrexate, Sulfasalazine"],
        link: "#"
      },
      {
        title: "Gout Medications",
        items: ["Allopurinol, Colchicine"],
        link: "#"
      },
      {
        title: "Osteoporosis Treatments",
        items: ["Alendronate, Calcitonin"],
        link: "#"
      }
    ]
  },

  {
    system: "Reproductive / GU System",
    image: urinaryImg,
    miniCards: [
      {
        title: "Hormonal Contraceptives",
        items: [
          "Combined pills – Ethinyl estradiol + Levonorgestrel",
          "Progestin-only – Norethindrone"
        ],
        link: "#"
      },
      {
        title: "ED Medications",
        items: ["Sildenafil, Tadalafil"],
        link: "#"
      },
      {
        title: "Urinary Frequency / Incontinence",
        items: ["Oxybutynin, Tolterodine"],
        link: "#"
      },
      {
        title: "Benign Prostatic Hyperplasia (BPH)",
        items: ["Tamsulosin, Finasteride"],
        link: "#"
      }
    ]
  },

  {
    system: "Immune / Infection Control",
    image: infectionImg,
    miniCards: [
      {
        title: "Antibiotics",
        items: [
          "Penicillins – Amoxicillin, Penicillin",
          "Cephalosporins – Ceftriaxone",
          "Macrolides – Azithromycin",
          "Fluoroquinolones – Ciprofloxacin",
          "Tetracyclines – Doxycycline"
        ],
        link: "#"
      },
      {
        title: "Antivirals",
        items: ["Acyclovir, Oseltamivir"],
        link: "#"
      },
      {
        title: "Vaccines",
        items: ["Influenza, MMR, COVID-19"],
        link: "#"
      }
    ]
  },

  {
    system: "Respiratory System",
    image: respiratoryImg,
    miniCards: [
      {
        title: "Bronchodilators",
        items: [
          "SABA – Albuterol",
          "LABA – Salmeterol"
        ],
        link: "#"
      },
      {
        title: "Inhaled Corticosteroids",
        items: ["Budesonide, Fluticasone"],
        link: "#"
      },
      {
        title: "Mucolytics",
        items: ["Acetylcysteine"],
        link: "#"
      }
    ]
  }
]