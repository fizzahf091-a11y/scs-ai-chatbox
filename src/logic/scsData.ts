
export interface FAQItem {
  keywords: string[];
  answer: string;
}

export interface CategoryFAQ {
  category: string;
  faqs: FAQItem[];
}

export interface SCSKnowledgeBase {
  bot_info: {
    name: string;
    company: string;
    description: string;
    language: string[];
  };
  knowledge_base: CategoryFAQ[];
}

export const scsKnowledgeBase: SCSKnowledgeBase = {
  bot_info: {
    name: "SCS Assistant",
    company: "Synergic Corporate Solutions",
    description:
      "The official information assistant for Synergic Corporate Solutions (SCS). It helps visitors learn about the company, services, training courses, admissions, fees, internships, careers, and contact information.",
    language: ["English", "Roman Urdu"],
  },

  knowledge_base: [
    // 1. ABOUT SCS
    {
      category: "About SCS",
      faqs: [
        {
          keywords: [
            "what is scs",
            "about scs",
            "company introduction",
            "introduce scs",
            "scs company",
          ],
          answer:
            "Synergic Corporate Solutions (SCS) is a technology-focused company that provides business software and ERP-related solutions. It also offers technical training through its Training & Development Center. SCS aims to help businesses with their software needs and support students in developing practical technology skills. For the latest details about its services and operations, please visit https://scs.synergicerp.com/.",
        },
        {
          keywords: [
            "full name of scs",
            "scs full form",
            "what does scs stand for",
            "full form",
          ],
          answer:
            "SCS stands for Synergic Corporate Solutions. The company provides technology-related services and offers technical training through its Training & Development Center.",
        },
        {
          keywords: [
            "what does scs do",
            "scs services",
            "company services",
            "services offered",
            "business solutions",
          ],
          answer:
            "SCS provides business software and ERP-related solutions, along with technical training. Its services and departments cover areas such as software development, ERP consultancy, code implementation, and support. If you need a specific service for your business, contact the SCS team to discuss your requirements.",
        },
        {
          keywords: [
            "when was scs established",
            "scs establishment year",
            "company founded",
            "established in",
            "company history",
          ],
          answer:
            "SCS has been reported as established in 2020. For an official company-history statement or further details about its establishment, please confirm with the SCS management team.",
        },
        {
          keywords: [
            "who is the founder of scs",
            "scs founder",
            "company founder",
            "who founded scs",
          ],
          answer:
            "The founder's official name and designation have not yet been confirmed in the available information. Please contact SCS management for the correct details.",
        },
        {
          keywords: [
            "who owns scs",
            "scs owner",
            "company owner",
            "owner name",
          ],
          answer:
            "Muhammad Yasin has been identified as the owner of SCS in the available information. For his official designation and complete profile, please confirm with the company management.",
        },
        {
          keywords: [
            "who is the ceo of scs",
            "scs ceo",
            "director of scs",
            "company director",
            "muhammad yasin",
          ],
          answer:
            "Muhammad Yasin has been identified in the available information as a key person associated with SCS management. His exact official title, such as CEO or Director, should be confirmed with the company before being stated as fact.",
        },
        {
          keywords: [
            "how many employees work at scs",
            "number of employees",
            "scs employees",
            "company team size",
            "how big is the team",
            "20 employees",
          ],
          answer:
            "SCS has been reported to have more than 20 employees. The team works across different business functions, including Human Resources (HR), Sales, Software Development, Support, Code Implementation, Marketing, and ERP Consultancy. These departments help coordinate company operations, develop and implement software solutions, assist clients, and support business requirements. The exact current employee count may change over time.",
        },
        {
          keywords: [
            "scs departments",
            "departments in scs",
            "company departments",
            "which teams work at scs",
          ],
          answer:
            "The departments reported at SCS include HR, Sales, Development, Support, Code Implementation, Marketing, and ERP Consultancy. Each department has a different role, from managing people and customer relationships to developing software, implementing systems, and assisting clients. For the latest organisational structure, please contact SCS management.",
        },
        {
          keywords: [
            "scs website",
            "official website",
            "company website",
            "website link",
          ],
          answer:
            "You can visit the official SCS website at https://scs.synergicerp.com/ to learn more about the company and its services.",
        },
        {
          keywords: [
            "what is synergicerp",
            "synergic erp",
            "erp software",
            "erp solutions",
            "business erp",
          ],
          answer:
            "ERP stands for Enterprise Resource Planning. ERP systems help businesses manage and coordinate business processes through software. SCS is associated with ERP-related business solutions, consultancy, implementation, and support. To learn which specific ERP features or packages are available, contact the SCS team.",
        },
      ],
    },

    // 2. TEAM AND MANAGEMENT
    {
      category: "Team & Management",
      faqs: [
        {
          keywords: [
            "scs management team",
            "management members",
            "team members",
            "who works at scs",
          ],
          answer:
            "The available SCS team information includes Muhammad Yasin, Muhammad Saleem, Abu Bakr Sadiqque, Sehrish Mukhtar, and Muhammad Amir. Some reported responsibilities include HR management and IT leadership. Because official titles and responsibilities may change, please contact SCS directly for a verified and up-to-date management list.",
        },
        {
          keywords: [
            "who is sehrish mukhtar",
            "sehrish mukhtar",
            "hr manager",
            "scs hr manager",
          ],
          answer:
            "Sehrish Mukhtar has been identified in the available information as the HR Manager at SCS. For recruitment, employee-related queries, or confirmation of her current responsibilities, please contact the company through its official contact channels.",
        },
        {
          keywords: [
            "who is muhammad amir",
            "muhammad amir",
            "it head",
            "it lead",
            "scs it team",
          ],
          answer:
            "Muhammad Amir has been identified in the available information as an IT lead or head associated with SCS. His exact official designation and current responsibilities should be confirmed with the company.",
        },
        {
          keywords: [
            "who is muhammad saleem",
            "muhammad saleem",
            "saleem at scs",
          ],
          answer:
            "Muhammad Saleem is listed among the people associated with the SCS team. His current designation and responsibilities have not been fully confirmed in the available information. Please contact SCS for official details.",
        },
        {
          keywords: [
            "who is abu bakr sadiqque",
            "abu bakr sadiqque",
            "abu bakr",
          ],
          answer:
            "Abu Bakr Sadiqque is listed among the people associated with the SCS team. His official designation and current responsibilities should be confirmed directly with the company.",
        },
        {
          keywords: [
            "how can i contact hr",
            "contact human resources",
            "hr department contact",
            "recruitment contact",
          ],
          answer:
            "For HR-related questions, recruitment, internships, or job opportunities, you can contact SCS at scsofficial1122@gmail.com or call/WhatsApp +92 309 5982583. Please mention the purpose of your enquiry so the team can guide you to the appropriate person.",
        },
      ],
    },

    // 3. COURSES
    {
      category: "Courses",
      faqs: [
        {
          keywords: [
            "which courses does scs offer",
            "scs courses",
            "available courses",
            "training programs",
            "technical courses",
          ],
          answer:
            "The SCS Training & Development Center offers technical training in areas including SEO & Digital Marketing, Digital Marketing Management, Frontend Web Development, Backend Web Development, Full Stack Web Development, ERP Consultancy, and AI Agentic Development. Course duration and fees vary by program. Contact the training center to confirm the current batch schedule, syllabus, and admission availability.",
        },
        {
          keywords: [
            "frontend web development course",
            "frontend course",
            "front end development",
            "frontend training",
          ],
          answer:
            "The Frontend Web Development course at SCS has a listed duration of 3 months and a total fee of Rs. 45,000. Frontend development focuses on the part of a website or web application that users see and interact with. Contact the training center to confirm the current syllabus, technologies covered, class schedule, and practical project details.",
        },
        {
          keywords: [
            "backend web development course",
            "backend course",
            "back end development",
            "backend training",
          ],
          answer:
            "The Backend Web Development course at SCS has a listed duration of 3 months and a total fee of Rs. 45,000. Backend development focuses on server-side logic, application functionality, databases, and APIs. Please contact the training center to confirm the exact technologies, course outline, and practical work included in the current batch.",
        },
        {
          keywords: [
            "full stack web development",
            "full stack course",
            "full stack training",
            "frontend and backend course",
          ],
          answer:
            "The Full Stack Web Development course at SCS has a listed duration of 6 months and a total fee of Rs. 45,000. Full Stack Development covers both frontend and backend aspects of web applications. This means students work toward understanding user interfaces as well as server-side functionality. Contact SCS to confirm the latest syllabus, project work, and fee details for the next batch.",
        },
        {
          keywords: [
            "seo course",
            "seo and digital marketing",
            "digital marketing course",
            "seo training",
          ],
          answer:
            "The SEO & Digital Marketing course has a listed duration of 2 months and a total fee of Rs. 10,000, or Rs. 5,000 per month. SEO focuses on improving a website's visibility in search engines, while digital marketing covers online methods used to promote products, services, or businesses. Please confirm the current syllabus and batch availability with SCS.",
        },
        {
          keywords: [
            "digital marketing management course",
            "digital marketing management",
            "marketing management training",
          ],
          answer:
            "The Digital Marketing Management course has a listed duration of 2 months and a total fee of Rs. 10,000, or Rs. 5,000 per month. The program is intended for learning about digital marketing and its management. Contact SCS to confirm the detailed course outline, practical activities, and current admission schedule.",
        },
        {
          keywords: [
            "erp consultant course",
            "erp consultancy course",
            "erp consultant training",
            "erp training",
          ],
          answer:
            "The ERP Consultant course has a listed duration of 3 months and a total fee of Rs. 45,000. ERP consultancy involves understanding business processes and helping organisations use ERP systems effectively. Contact SCS to confirm which ERP software, modules, business scenarios, and practical exercises are included in the current course.",
        },
        {
          keywords: [
            "ai agentic development course",
            "ai agent course",
            "agentic ai",
            "ai development training",
            "artificial intelligence course",
          ],
          answer:
            "The AI Agentic Development course has a listed duration of 3 months and a total fee of Rs. 45,000. Agentic AI development generally focuses on building AI-powered systems that can perform tasks through defined workflows and tools. Please contact SCS to confirm the specific technologies, prerequisites, syllabus, practical projects, and current batch availability.",
        },
        {
          keywords: [
            "is there an english language course",
            "english language course",
            "spoken english",
            "english course at scs",
          ],
          answer:
            "An English language course is not listed among the currently available SCS training programs in the information provided. Please contact the training center to confirm whether any new language course has been introduced.",
        },
        {
          keywords: [
            "which course should i choose",
            "best course for me",
            "course recommendation",
            "i am a beginner",
            "course for beginners",
          ],
          answer:
            "The right course depends on your interests, current skills, and career goals. If you want to build websites, consider Frontend, Backend, or Full Stack Web Development. If you are interested in online promotion, consider SEO & Digital Marketing. If you want to explore business software, consider ERP Consultancy. For AI-focused learning, ask about AI Agentic Development. Contact SCS to discuss your background and confirm the most suitable course.",
        },
        {
          keywords: [
            "are practical classes available",
            "practical training",
            "project based learning",
            "hands on training",
            "real projects",
          ],
          answer:
            "The SCS Training & Development Center has been described as providing practical, project-based training. Practical work helps students apply concepts rather than only study theory. Ask the training team which projects, tools, and practical exercises are included in your chosen course.",
        },
        {
          keywords: [
            "are classes online or physical",
            "online classes",
            "physical classes",
            "onsite training",
            "class mode",
          ],
          answer:
            "The SCS Training & Development Center has been described as conducting physical classes at its training location in Muridke. Online class availability has not been confirmed. Please contact the center to verify the teaching mode for your selected course.",
        },
      ],
    },

    // 4. COURSE DETAILS AND DURATION
    {
      category: "Course Details & Duration",
      faqs: [
        {
          keywords: [
            "course duration",
            "how long are courses",
            "training duration",
            "course length",
          ],
          answer:
            "Course duration depends on the selected program. The listed durations are 2 months for SEO & Digital Marketing and Digital Marketing Management; 3 months for Frontend Web Development, Backend Web Development, ERP Consultant, and AI Agentic Development; and 6 months for Full Stack Web Development. Confirm the current schedule with SCS before admission.",
        },
        {
          keywords: [
            "what will i learn",
            "course syllabus",
            "course outline",
            "topics covered",
            "what is included in the course",
          ],
          answer:
            "The topics covered depend on the course you select. For example, frontend development concerns user-facing interfaces, backend development concerns server-side functionality, and ERP consultancy concerns business software and processes. The complete, current syllabus for each program has not been provided here. Please request the official course outline from the SCS training team.",
        },
        {
          keywords: [
            "do i need experience",
            "previous experience required",
            "beginner eligibility",
            "can beginners apply",
          ],
          answer:
            "The exact experience and prerequisite requirements for each course have not been fully confirmed in the available information. If you are a beginner, contact the training center with details of your education and current skills so the team can explain the eligibility requirements for your chosen program.",
        },
        {
          keywords: [
            "do i need a laptop",
            "laptop requirement",
            "computer required",
            "equipment for classes",
          ],
          answer:
            "The laptop and equipment requirements have not been confirmed for every course. Please ask the SCS training team whether you need to bring your own laptop or whether computer facilities are available at the training center.",
        },
        {
          keywords: [
            "course project",
            "final project",
            "portfolio project",
            "practical assignment",
          ],
          answer:
            "SCS training has been described as practical and project-based. Projects can help students practise the concepts they learn, but the exact projects and assessment requirements depend on the course. Ask the training team for the project plan and expected deliverables before enrolling.",
        },
      ],
    },

    // 5. FEES AND PAYMENT
    {
      category: "Fees & Payment",
      faqs: [
        {
          keywords: [
            "course fees",
            "fees of courses",
            "how much do courses cost",
            "training fee",
            "course price",
          ],
          answer:
            "The listed course fees are: SEO & Digital Marketing — Rs. 10,000 for 2 months; Digital Marketing Management — Rs. 10,000 for 2 months; Frontend Web Development — Rs. 45,000 for 3 months; Backend Web Development — Rs. 45,000 for 3 months; Full Stack Web Development — Rs. 45,000 for 6 months; ERP Consultant — Rs. 45,000 for 3 months; and AI Agentic Development — Rs. 45,000 for 3 months. Fees and offers may change, so confirm the final amount with SCS before paying.",
        },
        {
          keywords: [
            "seo course fee",
            "seo fee",
            "digital marketing fee",
            "10000 course",
          ],
          answer:
            "The listed fee for SEO & Digital Marketing is Rs. 10,000 for the 2-month course, equivalent to Rs. 5,000 per month. Confirm the current fee and payment procedure with SCS before admission.",
        },
        {
          keywords: [
            "frontend course fee",
            "backend course fee",
            "full stack fee",
            "erp course fee",
            "ai course fee",
            "45000 fee",
          ],
          answer:
            "The listed fee for Frontend Web Development, Backend Web Development, Full Stack Web Development, ERP Consultant, and AI Agentic Development is Rs. 45,000 per course. Their durations differ, so confirm the details for your chosen program and ask the administration team about available payment arrangements.",
        },
        {
          keywords: [
            "can i pay in installments",
            "installment plan",
            "monthly fee",
            "fee in parts",
            "payment plan",
          ],
          answer:
            "Installment arrangements have been reported for eligible courses with a listed fee of Rs. 45,000. One described option is Rs. 15,000 per month for 3 months. Another flexible arrangement has been described as Rs. 10,000 per month for 3 months, with the remaining Rs. 15,000 payable after course completion and before the certificate is issued. These arrangements must be confirmed and approved by HR or Administration before admission.",
        },
        {
          keywords: [
            "when do i pay remaining fee",
            "remaining installment",
            "balance fee",
            "final payment",
          ],
          answer:
            "Under the reported flexible payment arrangement for eligible Rs. 45,000 courses, a remaining balance of Rs. 15,000 may be payable after course completion and before the certificate is issued. This is not an automatic entitlement for every student. Confirm your approved payment schedule with HR or Administration.",
        },
        {
          keywords: [
            "is fee refundable",
            "refund policy",
            "course cancellation",
            "can i get my money back",
          ],
          answer:
            "The reported policy is that course fees are generally non-refundable after the course has started, unless management approves a written exception. Before paying, ask SCS for the current refund and cancellation policy and keep a record of the terms provided to you.",
        },
        {
          keywords: [
            "how can i pay fees",
            "payment method",
            "bank transfer",
            "fee payment details",
          ],
          answer:
            "The currently accepted payment methods have not been confirmed in the available information. Please contact SCS or visit the training center to obtain the official payment instructions. Always verify the recipient and request a receipt for any payment.",
        },
        {
          keywords: [
            "is registration fee separate",
            "admission fee",
            "registration charges",
            "extra charges",
          ],
          answer:
            "Separate registration charges or additional fees have not been confirmed in the available information. Ask SCS Administration for a complete fee breakdown, including any registration, examination, learning-material, or other charges, before you enrol.",
        },
      ],
    },

    // 6. ADMISSION AND TIMINGS
    {
      category: "Admission & Timings",
      faqs: [
        {
          keywords: [
            "how to apply",
            "how can i get admission",
            "admission process",
            "join a course",
            "course registration",
          ],
          answer:
            "To apply for a course, contact or visit the SCS Training & Development Center in Muridke and ask the team for the current admission form and procedure. Discuss your preferred course, confirm eligibility and fees, and ask about the next available batch. An official online admission link has not been provided in the available information.",
        },
        {
          keywords: [
            "online admission",
            "admission form link",
            "apply online",
            "online registration",
          ],
          answer:
            "An official online admission or registration link has not been provided in the available information. You can contact SCS using +92 309 5982583 or scsofficial1122@gmail.com, or visit the Muridke training center to request the admission form.",
        },
        {
          keywords: [
            "class timings",
            "class schedule",
            "training timings",
            "when are classes",
            "course timing",
          ],
          answer:
            "The reported class schedule is Monday to Friday, from 9:00 AM to 12:00 PM and from 2:00 PM to 5:00 PM. Timings may vary by course or batch. Please confirm the schedule for your selected program before admission.",
        },
        {
          keywords: [
            "office timings",
            "when is scs open",
            "working hours",
            "opening time",
            "closing time",
          ],
          answer:
            "The reported SCS office hours are Monday to Saturday, 9:00 AM to 7:00 PM, with Sunday off. These are general office hours and may differ from training class timings. Contact the office before travelling to confirm availability.",
        },
        {
          keywords: [
            "what is the eligibility",
            "admission requirements",
            "who can apply",
            "education required",
            "qualification required",
          ],
          answer:
            "The exact educational qualifications and eligibility requirements have not been confirmed for every course. Requirements may depend on the program. Please share your educational background and chosen course with the SCS training team so they can explain the current admission criteria.",
        },
        {
          keywords: [
            "documents required for admission",
            "required documents",
            "what documents do i need",
            "admission documents",
          ],
          answer:
            "The complete list of required admission documents has not been confirmed in the available information. Before visiting, contact SCS to ask whether you need your CNIC, educational documents, photographs, or any other paperwork.",
        },
        {
          keywords: [
            "next batch",
            "new batch starting",
            "batch start date",
            "admission open",
            "when will classes start",
          ],
          answer:
            "The next batch start date and current admission status have not been confirmed here. Contact the SCS Training & Development Center to check which courses are currently accepting students and when the next batch will begin.",
        },
        {
          keywords: [
            "can i visit scs",
            "visit training center",
            "appointment",
            "meet the team",
          ],
          answer:
            "Visitors are advised to arrange an appointment before visiting SCS. Contact +92 309 5982583 or email scsofficial1122@gmail.com to confirm the appropriate time and the person you need to meet.",
        },
      ],
    },

    // 7. CAMPUS AND CONTACT
    {
      category: "Campus & Contact",
      faqs: [
        {
          keywords: [
            "scs address",
            "where is scs located",
            "company location",
            "office address",
            "lahore office",
          ],
          answer:
            "The reported Lahore office address is Office No. 604, 6th Floor, Al Hafeez Executive, Main Boulevard, Gulberg III, Lahore, Pakistan. Please contact SCS before visiting to confirm the address and arrange an appointment.",
        },
       
{
  keywords: [
    "muridke campus",
    "training center address",
    "scs muridke",
    "where is training center",
    "muridke address",
    "location",
    "google maps",
    "directions",
  ],

answer:
  "SCS Training & Development Center ka address hai: Office No. 1, Grand Estate Society, Main G.T. Road, Muridke, Pakistan.\n\n📍 [Click here to open Google Maps](https://www.google.com/maps/search/?api=1&query=Office%20No.%201%2C%20Grand%20Estate%20Society%2C%20Main%20G.T.%20Road%2C%20Muridke%2C%20Pakistan)\n\nVisit karne se pehle phone/WhatsApp +92 309 5982583 par appointment confirm kar lein.",

},
 {
          keywords: [
            "scs phone number",
            "contact number",
            "phone number",
            "call scs",
            "whatsapp number",
          ],
          answer:
            "You can contact SCS at +92 309 5982583 by phone or WhatsApp. An additional number listed in the available information is 0300-0441807. If one number is unavailable, try the other or email scsofficial1122@gmail.com.",
        },
        {
          keywords: [
            "scs email",
            "email address",
            "official email",
            "contact by email",
          ],
          answer:
            "The listed SCS contact email is scsofficial1122@gmail.com. You can use it for general enquiries, course information, admissions, or CV submission. Include a clear subject and your contact details so the team can understand your request.",
        },
        {
          keywords: [
            "scs linkedin",
            "linkedin page",
            "company linkedin",
          ],
          answer:
            "You can visit the SCS LinkedIn page here: https://www.linkedin.com/company/eccountbook-cloud-erp/. Check the page for company updates and professional information.",
        },
        {
          keywords: [
            "scs facebook",
            "facebook page",
            "facebook link",
          ],
          answer:
            "You can find the listed SCS Facebook page here: https://www.facebook.com/share/19AJg9yrxk/. For the latest company announcements, check the page directly.",
        },
        {
          keywords: [
            "scs instagram",
            "instagram",
            "instagram link",
          ],
          answer:
            "You can visit the listed SCS Instagram page here: https://www.instagram.com/eccountbookerpcloud/. Please check the account directly for current posts and updates.",
        },
        {
          keywords: [
            "social media",
            "all social links",
            "social accounts",
            "follow scs",
          ],
          answer:
            "You can connect with SCS through its website at https://scs.synergicerp.com/, LinkedIn at https://www.linkedin.com/company/eccountbook-cloud-erp/, Facebook at https://www.facebook.com/share/19AJg9yrxk/, and Instagram at https://www.instagram.com/eccountbookerpcloud/. Please check each page for the latest updates.",
        },
        {
          keywords: [
            "is scs open on sunday",
            "sunday opening",
            "sunday office hours",
            "weekend timings",
          ],
          answer:
            "According to the reported office schedule, Sunday is the weekly day off. Office hours are listed as Monday to Saturday, 9:00 AM to 7:00 PM. Please contact SCS if you need to confirm any special opening arrangements.",
        },
      ],
    },

    // 8. CAREER AND JOB GUIDANCE
    {
      category: "Career & Job Guidance",
      faqs: [
        {
          keywords: [
            "jobs at scs",
            "scs vacancies",
            "job opportunities",
            "current vacancies",
            "careers at scs",
          ],
          answer:
            "Job openings at SCS depend on current business requirements. Previous vacancy information included Angular Developer and React Developer roles with a requirement of more than 5 years of experience, but those details do not confirm that the positions are currently open. Contact SCS or check its official channels for current vacancies and eligibility requirements.",
        },
        {
          keywords: [
            "how to apply for a job",
            "job application process",
            "apply for vacancy",
            "send cv",
            "submit resume",
          ],
          answer:
            "To apply for a job, prepare an updated CV highlighting your relevant skills, experience, projects, and contact information. You can send your CV to scsofficial1122@gmail.com. Mention the position you are applying for in the email subject and include a short introduction in the email body. Sending a CV does not guarantee an interview or job offer.",
        },
        {
          keywords: [
            "where to send cv",
            "cv submission email",
            "resume email",
            "email my cv",
          ],
          answer:
            "You can send your CV to scsofficial1122@gmail.com. Use a clear subject such as 'Application for Frontend Developer' and attach your updated CV. If relevant, include links to your portfolio, GitHub, or previous projects.",
        },
        {
          keywords: [
            "how long does hr take to respond",
            "application response time",
            "when will i get a reply",
            "cv response",
          ],
          answer:
            "The response time may vary depending on the number of applications and the hiring process. A response within 1–2 days has been mentioned as a general estimate, but it is not guaranteed. If you do not receive a response, you may politely follow up with the HR team.",
        },
        {
          keywords: [
            "does scs guarantee a job",
            "job guarantee",
            "will i get a job after course",
            "employment after training",
          ],
          answer:
            "Completing a course at SCS does not guarantee a job. Employment depends on your skills, practical performance, available vacancies, interview results, and the company's hiring requirements. Training can help you build relevant knowledge and projects, but you must still meet the requirements of a position.",
        },
        {
          keywords: [
            "developer jobs",
            "frontend developer vacancy",
            "react developer vacancy",
            "angular developer vacancy",
            "software developer jobs",
          ],
          answer:
            "SCS has previously listed developer roles, including Angular Developer and React Developer positions, with more than 5 years of experience requested. This is historical vacancy information, not confirmation of current openings. Contact HR or check the official company channels for the latest job requirements.",
        },
        {
          keywords: [
            "career guidance",
            "which skill should i learn",
            "career advice",
            "how can i start a tech career",
          ],
          answer:
            "Your learning path should match your interests and goals. For web development, build a strong foundation in HTML, CSS, and JavaScript before progressing to a framework and practical projects. For marketing, learn SEO and digital marketing fundamentals. For ERP-related work, study business processes and ERP concepts. Ask the SCS training team about course prerequisites and practical learning outcomes before enrolling.",
        },
      ],
    },

    // 9. INTERNSHIP AND WORK EXPERIENCE
    {
      category: "Internship & Work Experience",
      faqs: [
        {
          keywords: [
            "internship at scs",
            "scs internship",
            "internship opportunity",
            "how to get internship",
          ],
          answer:
            "SCS has reported offering a 2-month internship opportunity to selected candidates. Selection may depend on course performance, practical skills, assessment results, and company requirements. An internship is not guaranteed for every student. Contact SCS to confirm whether internship opportunities are available for your course and batch.",
        },
        {
          keywords: [
            "internship duration",
            "how long is internship",
            "two month internship",
            "internship period",
          ],
          answer:
            "The reported internship duration for selected candidates is 2 months. The exact duration, schedule, responsibilities, and selection conditions should be confirmed with SCS before you make plans.",
        },
        {
          keywords: [
            "is internship guaranteed",
            "everyone gets internship",
            "internship guarantee",
            "internship after course",
          ],
          answer:
            "No. Internship opportunities are not guaranteed for every student. Selected candidates may be offered a 2-month internship based on performance, assessment, practical ability, and the company's available opportunities.",
        },
        {
          keywords: [
            "is internship paid",
            "internship salary",
            "stipend",
            "paid internship",
            "internship compensation",
          ],
          answer:
            "The available information does not confirm whether internships are paid or unpaid. Please ask SCS directly about any stipend, compensation, working hours, and internship terms before accepting an offer.",
        },
        {
          keywords: [
            "will i get a job after internship",
            "job after internship",
            "internship to job",
            "permanent job after internship",
          ],
          answer:
            "A job is not guaranteed after an internship. Candidates may need to complete a further interview, technical test, or performance evaluation. Any employment offer depends on available vacancies and the company's hiring requirements.",
        },
        {
          keywords: [
            "real work experience",
            "professional experience",
            "work on company projects",
            "industry experience",
          ],
          answer:
            "Practical training and a possible internship can help students develop technical skills and understand professional work practices. The exact tasks and project responsibilities depend on the course and any internship offer. Confirm the expected work, supervision, and learning outcomes with SCS.",
        },
      ],
    },

    // 10. CERTIFICATE AND ASSESSMENT
    {
      category: "Certificate & Assessment",
      faqs: [
        {
          keywords: [
            "do you provide a certificate",
            "course certificate",
            "training certificate",
            "certificate after course",
          ],
          answer:
            "SCS has reported providing a certificate after successful course completion and payment of the full course fee. Ask the training team about the current certificate requirements, assessment criteria, and expected issuance time.",
        },
        {
          keywords: [
            "when will i get my certificate",
            "certificate issue date",
            "certificate after completion",
            "certificate delivery",
          ],
          answer:
            "According to the reported policy, a certificate is issued after successful completion of the course and payment of the full fee. If an approved installment plan applies, any outstanding amount must be settled according to the agreed terms before the certificate is issued.",
        },
        {
          keywords: [
            "is there an assessment",
            "course test",
            "final assessment",
            "exam after course",
            "student evaluation",
          ],
          answer:
            "An assessment is reported to take place after the course. Assessment methods and passing criteria may vary by program. Contact your course instructor or the training administration team to confirm whether your course includes a written test, practical task, project evaluation, or other assessment.",
        },
        {
          keywords: [
            "what if i fail the assessment",
            "failed final test",
            "assessment retake",
            "resit exam",
          ],
          answer:
            "The policy for failed assessments, retakes, and additional practice has not been confirmed in the available information. Please contact your instructor or SCS Administration to learn about the applicable procedure and any additional requirements.",
        },
        {
          keywords: [
            "is the certificate guaranteed",
            "everyone gets a certificate",
            "certificate eligibility",
            "certificate requirements",
          ],
          answer:
            "A certificate is not automatically guaranteed just because a student enrols. The reported requirements are successful course completion and payment of the full course fee. Confirm any attendance, assessment, project, or other requirements with SCS before starting the course.",
        },
        {
          keywords: [
            "is certificate fee included",
            "extra certificate charges",
            "certificate charges",
          ],
          answer:
            "The available information does not separately confirm whether certificate charges are included in the listed course fee. Ask SCS Administration for a complete fee breakdown before admission.",
        },
      ],
    },

    // 11. GENERAL SUPPORT
    {
      category: "General Support",
      faqs: [
        {
          keywords: [
            "contact scs",
            "how can i contact you",
            "need help",
            "support contact",
            "contact information",
          ],
          answer:
            "You can contact Synergic Corporate Solutions through its official website at https://scs.synergicerp.com/, email scsofficial1122@gmail.com, or phone/WhatsApp at +92 309 5982583. An additional listed contact number is 0300-0441807. For an in-person visit, arrange an appointment before travelling.",
        },
        {
          keywords: [
            "i have a question",
            "other question",
            "general enquiry",
            "more information",
            "help me",
          ],
          answer:
            "I can help with general information about SCS, its services, training courses, course fees, admission process, class timings, locations, internships, certificates, and job applications. If your question requires information that has not been confirmed, I will direct you to the SCS team for clarification.",
        },
        {
          keywords: [
            "talk to a human",
            "speak to staff",
            "talk to representative",
            "contact management",
            "human support",
          ],
          answer:
            "For assistance from the SCS team, contact +92 309 5982583 by phone or WhatsApp, or email scsofficial1122@gmail.com. Explain your question and include any relevant course or application details so the team can direct your enquiry appropriately.",
        },
        {
          keywords: [
            "complaint",
            "submit feedback",
            "give feedback",
            "report a problem",
          ],
          answer:
            "If you have a complaint, suggestion, or feedback about an SCS service or training program, contact scsofficial1122@gmail.com or call/WhatsApp +92 309 5982583. Describe the issue clearly and include relevant details so the team can review your concern.",
        },
        {
          keywords: [
            "thank you",
            "thanks",
            "thank you so much",
            "shukriya",
        ],
          answer:
            "You're welcome! I'm happy to help you learn more about Synergic Corporate Solutions. If you have questions about courses, fees, admission, internships, or contact details, feel free to ask.",
        },
        {
          keywords: [
            "goodbye",
            "bye",
            "allah hafiz",
            "see you",
          ],
          answer:
            "Thank you for contacting SCS Assistant. If you need more information about Synergic Corporate Solutions or its training programs, you can contact the team at scsofficial1122@gmail.com or +92 309 5982583. Have a great day!",
        },
      ],
    },
  ],
};
