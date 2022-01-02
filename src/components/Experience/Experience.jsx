import React from "react";
import "../Home/Home.css";
import "bootstrap/dist/css/bootstrap.css";

const Experience = () => {
  return (
    <div className="section" id="experience">
      <div className="title">
        <h2>Experience</h2>
      </div>
      <div className="info">
        <h4>
          Software Engineer Intern @{" "}
          <a href="https://www.paymaya.com/" target="_blank" rel="noreferrer">
            PayMaya Philippines
          </a>
        </h4>
        <h5>07/2021 - 09/2021 || Remote</h5>
        <ul>
          <li>
            Replicated{" "}
            <a
              href="https://en.wikipedia.org/wiki/SQL"
              target="_blank"
              rel="noreferrer"
            >
              SQL
            </a>{" "}
            database in{" "}
            <a
              href="https://www.microsoft.com/en-us/sql-server/sql-server-2019"
              target="_blank"
              rel="noreferrer"
            >
              MSSQL
            </a>{" "}
            to test modification actions.
          </li>
          <li>
            Tested importing 1000+ rows of synthetic data from CSV files into
            multiple tables in SQL database.
          </li>
          <li>
            Created randomized synthetic user data for project testing in{" "}
            <a
              href="https://en.wikipedia.org/wiki/Comma-separated_values"
              target="_blank"
              rel="noreferrer"
            >
              CSV
            </a>{" "}
            format using{" "}
            <a href="https://www.python.org/" target="_blank" rel="noreferrer">
              Python
            </a>
            .
          </li>
          <li>
            Met with mentor on weekly basis to provide detailed project reports
            and milestone updates.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
