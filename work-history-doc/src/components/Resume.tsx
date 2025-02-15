import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <section>
        <h2>Personal Information</h2>
        <p>Name: [Your Name]</p>
        <p>Email: [Your Email]</p>
        <p>Phone: [Your Phone]</p>
      </section>

      <section>
        <h2>Professional Experience</h2>
        <ul>
          <li>
            <h3>Job Title 1</h3>
            <p>Company 1</p>
            <p>Duration: [Start Date] - [End Date]</p>
            <p>
              Responsibilities: [Describe your responsibilities and
              achievements]
            </p>
          </li>
          <li>
            <h3>Job Title 2</h3>
            <p>Company 2</p>
            <p>Duration: [Start Date] - [End Date]</p>
            <p>
              Responsibilities: [Describe your responsibilities and
              achievements]
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <p>Degree: [Your Degree]</p>
            <p>Institution: [Your Institution]</p>
            <p>Duration: [Start Date] - [End Date]</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
