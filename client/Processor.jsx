import React from "react";


const Procedure = () => (
  <div className="procedure-outer">
    <div className="procedure-wrapper">
      <h2>Placement Procedure</h2>
      <ul className="custom-list">
        <li>
          The Training and Placement Office, VirtualCareer Hub sends invitations along with
          Job Notification Form(JNF) to organizations to participate in the
          campus placements.
        </li>
        <li>
          Organization fills in the JNF containing details of the job offer (pay
          package, place of posting, allowances and other bonuses). JNF can be
          sent by email to Training and Placement Office, VirtualCareer Hub (
          <a href="mailto:placements@VirtualCareer Hub.ac.in">placements@VirtualCareer Hub.ac.in</a>
          ).
        </li>
        <li>
          The organization details along with the job offer are made available to the
          students on a private group, requesting them to apply.
        </li>
        {/* Other list items */}
      </ul>
    </div>
    <div className="procedure-wrapper">
      <h2>Job Policy</h2>
      <p>
        Companies visit campus and select students as per their recruitment
        drive.
      </p>
      <p>
        <strong>
          To a student finally selected by a company after all testing and
          interview rounds, the company may offer :
        </strong>
      </p>
      <div className="sub-part">
        <h2>Full time job offer</h2>
        <p>
          The selected student will join company in June 2022 as full time
          employee.
        </p>
        <h2>Internship</h2>
        <p>
          UG except final year students are eligible for <strong>2 months</strong>{" "}
          summer internship The student will join the company in May/June 2022
          as an intern for a period of 2 months.
        </p>
        <p>
          UG. Final year students are eligible for <strong>6 months</strong>{" "}
          internship. The student will join the company in January 2022 as an
          intern for a period of 6 months and complete their 8th semester
          project in the company.
        </p>
      </div>
    </div>
    <div className="procedure-wrapper">
      <div className="placement-policy-heading">
        <h2 className="policies-heading">Placement Policy</h2>
        <h2 className="ph-subheading">Classification of Company</h2>
        <p>
          The classification of a company will based on the criteria of pay
          packages(CTC) and work profile. The two classes being:
        </p>
        <ul className="custom-list">
          <li>First Round Company</li>
          <li>Dream Round Company</li>
        </ul>
        <p>
          Overall CTC of a company includes joining bonus and all other perks,
          if applicable. Eligibility for a dream round company for a student
          will be decided on the basis of overall CTC.
        </p>
        <h2 className="ph-subheading">Job Offer for a student</h2>
        <ul className="custom-list">
          <li>
            If a student's name appears on the final shortlist declared after
            the Company's process through the Placement Cell, then that would be
            considered as a Job Offer to the student.
          </li>
          {/* Other list items */}
        </ul>
      </div>
    </div>
  </div>
);

export default Procedure;
