# CV Project 
- project for The Odin Project to learn React and State

### Component View
App
│
├── Header
│
├── CVForm
│   │
│   ├── GeneralInfo [X]
│   │   ├── InputField (name)
│   │   ├── InputField (email)
│   │   └── InputField (phone)
│   │
│   ├── EducationExperience
│   │   ├── EducationItem (repeated for each school)
│   │   │   ├── InputField (schoolName)
│   │   │   ├── InputField (studyTitle)
│   │   │   └── InputField (studyDate)
│   │   └── AddEducationButton
│   │
│   ├── PracticalExperience
│   │   ├── ExperienceItem (repeated for each job)
│   │   │   ├── InputField (companyName)
│   │   │   ├── InputField (positionTitle)
│   │   │   ├── TextArea (mainResponsibilities)
│   │   │   ├── InputField (dateFrom)
│   │   │   └── InputField (dateUntil)
│   │   └── AddExperienceButton
│   │
│   └── SubmitButton
│
└── CVPreview
    ├── GeneralInfoDisplay
    ├── EducationDisplay
    │   └── EducationItemDisplay (for each school)
    └── ExperienceDisplay
        └── ExperienceItemDisplay (for each job)

