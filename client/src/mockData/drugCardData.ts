// src/mockData/drugCardData.ts
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
    image: "/images/cardiovascular_system.png",
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
        items: ["Anticoagulants – Warfarin, Heparin, Apixaban", "Antiplatelets – Aspirin, Clopidogrel"],
        link: "/medscategory"
      }
    ]
  }
]
