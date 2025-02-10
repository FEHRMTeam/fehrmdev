---
title: Lovell FHCC EHR Implementation
sidenav: true
parent: Frequently Asked Questions
category: Lovell FHCC EHR Implementation
sortOrder: 6
faqImage:
  image: ../images/FAQs06_LovellFHCC_EHRImp_Landing Page Images_010625_v2-34.png
  alt: A group of people holding up a sign that says "The Federal Electronic Health Record is Live At Lovell FHCC!"
faqQuestions:
  - question: >
      Who is involved with the deployment of the Federal Electronic Health
      Record (EHR) at the Captain James A. Lovell Federal Health Care Center
      (Lovell FHCC)?
    answer: >
      The deployment of the single, common Federal EHR at Lovell FHCC was led by
      the Federal Electronic Health Record Modernization office in collaboration
      with the DoD Healthcare Management Systems Modernization program
      management office, Department of Veterans Affairs Electronic Health Record
      Modernization Integration Office, and Lovell FHCC stakeholders. The
      resulting EHR is a true Federal EHR, not a Department of Defense system
      nor a Department of Veterans Affairs system.
    questionid: e35c8eb1-a703-4f07-baa4-d501bd2f2353
  - question: >
      What was the timeline for Federal Electronic Health Record (EHR)
      deployment at the Captain James A. Lovell Federal Health Care Center
      (Lovell FHCC)? Where are things now and what’s next?
    answer: >
      The deployment of the Federal EHR at Lovell FHCC was previously scheduled
      asynchronously, meaning Department of Defense (DOD) and Department of
      Veterans Affairs (VA) users would go live with the EHR at different times.
      The asynchronous deployment approach posed a high risk of disrupting the
      integrated operations at Lovell FHCC. Potential risks included severely
      impairing existing shared services, jeopardizing patient safety, and
      increasing costs to the Departments for delivery of care.


      In November 2019, at Lovell FHCC’s request, the Federal Electronic Health Record Modernization (FEHRM) office committed to a joint site engagement to assess the risk. In September 2020, the FEHRM, with various DOD, VA, and vendor stakeholders, conducted a site engagement during which there was consensus for a synchronous deployment approach. By conducting a synchronous deployment, the Departments can realize cost-savings by reducing the duplicate work of two deployment efforts and mitigate the risks introduced through an asynchronous deployment at this fully integrated site. Through collaboration led by the FEHRM, the team agreed to use the DoD Healthcare Management Systems Modernization contract vehicle to deliver the Federal EHR.


      The synchronous deployment of the Federal EHR at Lovell FHCC followed a phased approach:


      - **Phase 0:** Planning

      - **Phase 1:** Assessment and Design Concept

      - **Phase 2:** Configure and Test

      - **Phase 3:** Deployment, Activation, and Sustainment


      In Phase 1, the multi-agency team completed a comprehensive end-to-end assessment at Lovell FHCC focused on gathering current-state clinical and business process workflows. Then, the team executed the Lovell FHCC Enterprise Requirements Adjudication (ERA) process. The ERA process is a thorough, high-impact decision-making process focused on DOD and VA requirements and deployment approach, where discrepancies exist. The ERA process deconflicts the build between DOD and VA, leverages existing governance boards, and drives toward convergence. The ERA process is defining the design of the Federal EHR for implementation at Lovell FHCC and the approach for the deployment.


      Outputs of the end-to-end assessment and the ERA process informed the Lovell FHCC Implementation Plan, which included milestones and timelines for the deployment. Once the Lovell FHCC Implementation Plan was finalized, the FEHRM led discussions between senior Department leadership to assess the projected Lovell FHCC go-live timing with DOD wave and VA Veterans Integrated Services Network deployment timelines.
    questionid: ec6e7a1f-b2ac-41fa-9d98-53be4047ba33
  - question: Will providers have to check two different areas for medication
      reconciliation?
    answer: No, there is a single location for medication reconciliation.
    questionid: 21830f1f-3f0f-4f66-96af-cba445282d70
  - question: >
      What is different about what the Captain James A. Lovell Federal Health
      Care Center (Lovell FHCC) deployed versus other Department of Defense
      (DOD)/Department of Veteranas Affairs (VA) sites?
    answer: >
      Lovell FHCC received the same Federal Electronic Health Record (EHR) as
      other DOD and VA sites. Lovell FHCC used what DOD and VA already have. DOD
      and VA are given a certain amount of flexibility to configure the Federal
      EHR differently to meet specific facilities’ needs while still maintaining
      interoperability between the Departments. Any Departments using the EHR
      have access to these changes as well as other capabilities their specific
      facilities may need (that they may choose to turn on or off, as allowed).
      Patient care location (PCL) hierarchies was one example where Lovell FHCC
      required a unique approach as a result of being a fully integrated joint
      sharing site.


      PCL hierarchies correspond to physical locations of patients receiving health care services, with facilities at the top level of the hierarchy followed by buildings, nursing units, rooms, and beds. Lovell FHCC will use two PCL hierarchies—one for each Department, in their respective facilities. All other DOD and VA facilities currently use either a DOD or VA PCL (not both) when they implement the Federal EHR. Because PCLs are associated with either DOD or VA locations at Lovell FHCC, they can be leveraged as the basis for user role assignment, workflow (1DOD or 1VA), interface, configuration, and end-user training. Using both DOD and VA PCL hierarchies at Lovell FHCC allows each Department the ability to satisfy their respective statutory requirements regarding eligible beneficiaries and encounter charging.


      While a single PCL was the preferred option, existing legal and business barriers presented the need for a near-term solution to avoid significant schedule risks for the Lovell FHCC Federal EHR implementation. Ultimately, DOD and VA could use this dual PCL configuration to provide Lovell FHCC with the existing DOD and VA enterprise configurations, without having to maintain a Lovell-FHCC-specific configuration. Further, orders portability was maintained, as orders can be associated (or “flexed”) to the correct PCL and service resource location within the Federal EHR.
    questionid: 36b448fc-f0f8-41fa-a783-06f3e52d4b6d
  - question: >
      How do the patient portals work compared to other Department of Defense
      (DOD) and Department of Veterans Affairs (VA) sites? Specifically, what is
      the experience for dual- eligible patients?
    answer: >
      The Captain James A. Lovell Federal Health Care Center (Lovell FHCC) uses
      both DOD and VA patient portals. DOD beneficiaries use the DOD patient
      portal, and VA beneficiaries use the VA patient portal. Dual-eligible
      patients can use either portal. There are some differences between how
      each portal is set up, most notably:


      - VA uses relationship-based scheduling, meaning only providers with an established relationship will appear to the patient for messaging and scheduling. DOD is moving to relationship-based scheduling; however, beneficiaries can direct book an appointment, which is not currently a feature enabled for VA.

      - VA can request prescription renewals from their care team and medication refills from pharmacies. DOD can request prescription renewals; however, medication refills is not enabled.


      DOD and VA beneficiaries can view and download Pathology and Radiology reports. Additionally, VA beneficiaries can view and download Microbiology and Cardiology reports.


      The process to log in to the patient portal also differs by Department:


      - There are two ways to access the [MHS GENESIS Patient Portal](https://health.mil/news/in-the-spotlight/mhs-genesis): 1. Use a Common  Access Card reader, or 2. Create a DS Logon account.

      - A direct link to VA’s patient portal is sent to Veterans. The portal is accessible through [MyHealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home) and [VA.gov](https://www.va.gov/)    .


      As both DOD and VA use DS Logon to access their portals, it is important for beneficiaries to make sure their personal information (name, address, email, and phone numbers) are listed correctly in the Defense Enrollment Eligibility ReportingSystem (DEERS) to avoid problems with claims, referrals, delivery of home prescriptions, and access to care for dependents. Veterans and family members who receive health care or direct benefit payments from VA and changed their legal names since discharging from military service must update their new name with DEERS.
    questionid: e97cc299-35f8-4b65-8eff-14209d2821b5
  - question: >
      If the Department of Veterans Affairs (VA) paused their deployments at VA
      medical facilities, why did the Captain James A. Lovell Federal Health
      Care Center (Lovell FHCC) deployment proceed?
    answer: >
      The Department of Defense (DOD) and VA were committed to deploying the
      single, common Federal Electronic Health Record (EHR) synchronously at
      Lovell FHCC in March 2024. Lovell FHCC was the only exception to the
      full-stop of VA deployment activities. VA pivoted resources to ensure the
      Lovell FHCC deployment was a success. Since Lovell FHCC is a jointly run
      DOD and VA facility, the deployment continued as planned to ensure that
      all beneficiaries who visit the facility were covered by one Federal EHR.
      To ensure success, Lovell FHCC continued to benefit from a multi-agency
      team of Federal Electronic Health Record Modernization (FEHRM) office,
      DOD, and VA leaders who worked together to address and mitigate identified
      risks and implement lessons learned and best practices from other sites.


      Lovell FHCC Federal EHR implementation was fundamental to interoperability and the Federal EHR moving forward. The FEHRM, DOD, and VA were committed to getting it right. By ensuring the Departments could work together as a single unit, Lovell FHCC became a model for how to do this across DOD, VA, and the broader federal enterprise to ensure seamless, integrated care for patients. It helped simplify the ability to work together and how the Departments can demonstrate interoperability.
    questionid: 2692860c-ba4f-49d4-a30a-c3a94a5e391b
  - question: >
      Are there concerns about patient safety, given the experiences other
      Department of Veterans Affairs (VA) medical facilities have had?
    answer: >
      VA's goal for the Federal Electronic Health Record (EHR) is, and always
      has been, to provide improved health outcomes for Veterans and a better
      experience for providers. VA acknowledges that there have been challenges
      with their efforts. VA worked closely with Oracle Health to resolve
      outstanding performance, reliability, and patient safety concerns prior to
      the March 2024 deployment at the Captain James A. Lovell Federal Health
      Care Center (Lovell FHCC).


      As with any site, the Lovell FHCC Federal EHR deployment included a 12-month cadence of deployment events to prepare the facility’s technology, processes, and people for the change in systems. As a result of the enterprise nature of the Federal EHR, VA and Oracle Health addressed the four patient safety issues identified in their Sprint Report (i.e., unknown queue, no show/cancelled appointment routing to scheduling queues, creation of visible external referrals for worklist action, and ordering procedure charge codes without ordering the actual clinical imaging) ahead of Lovell FHCC Go Live.


      It’s also worth noting the Federal EHR exceeds industry standards for protecting patient information, satisfying DOD standards for cybersecurity, and DOD and VA agreed-to standards of privacy.
    questionid: 93b77883-782f-49bb-91b5-79d74791a10f
  - question: >
      How will deploying the Federal Electronic Health Record (EHR) at the
      Captain James A. Lovell Federal Health Care Center (Lovell FHCC) lead the
      way for other health care systems?
    answer: >
      Lovell FHCC is a perfect example of true jointness. The deployment of the
      Federal EHR at Lovell FHCC will lead the way for how two large health care
      systems work together to make the best care decisions without technology
      being a barrier. The FEHRM converged configurations, where appropriate, to
      integrate processes and harmonize workflows between Department of Defense
      (DOD) and Department of Veterans Affairs (VA) as part of deploying the
      Federal EHR at Lovell FHCC. By ensuring the Departments can work together
      as a single unit, Lovell FHCC became a model for how to do this across
      DOD, VA,  and the broader federal enterprise to ensure seamless care for
      patients. It helped simplify the ability to work together and how the
      Departments can be engaged with each other. This work evolved the Federal
      EHR baseline to better serve providers and patients across the federal
      government. Ultimately, Lovell FHCC serves as a prototype for how
      different health care systems can work together in new ways to deliver
      care to their patients.
    questionid: 2d06ff72-6ecb-418d-ac96-323b42aa58f3
  - question: >
      What are the benefits of the Captain James A. Lovell Federal Health Care
      Center (Lovell FHCC) Federal Electronic Health Record (EHR)
      implementation?
    answer: >
      Implementation of the Federal EHR at Lovell FHCC benefits providers,
      patients, and the broader health care enterprise in the following ways:


      - Enhances the Federal EHR baseline to better serve patients and providers across the federal government

      - Converges configurations, workflows, terminology and content, where appropriate, between the Department of Defense (DOD) and Department of Veterans Affairs (VA) to improve clinical decision-making

      - Documents lessons learned and provides a roadmap for future Federal EHR deployments and troubleshooting, especially at joint sharing sites where care is integrated

      - Standardizes user roles, forms, and configuration variations between DOD and VA, where appropriate

      - Models how large health care systems can leverage technology to drive the best health care decisions

      - Allows for the test and evaluation of meaningful exchange and use of data between DOD, VA, and other health care systems, as required by the National Defense Authorization Act for Fiscal Year 2020


      Ultimately, Lovell FHCC leads the way for future Federal EHR deployments and improving patient care and the end-user experience.
    questionid: a12afbd1-27a0-4d64-b28f-1caa7968be67
---
