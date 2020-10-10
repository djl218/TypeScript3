import React from 'react';
import ReactDOM from 'react-dom';

interface HeaderProps {
  courseName: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return <h1>{props.courseName}</h1>;
};

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartOneThreeFourBase extends CoursePartBase {
  description: string;
}

interface CoursePartOne extends CoursePartOneThreeFourBase {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartOneThreeFourBase {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

interface CoursePartFour extends CoursePartOneThreeFourBase {
  name: "Creating buttons that click";
}

type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;

const Part: React.FC<{ coursePart: CoursePart }> = ({ coursePart }) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    )
  };
  
  switch (coursePart.name) {
    case "Fundamentals":
      break;
    case "Using props to pass data":
      break;
    case "Deeper type usage":
      break;
    case "Creating buttons that click":
      break;
    default:
      return assertNever(coursePart);
  }

  return (
    <p key={coursePart.name}>
      {coursePart.name} {coursePart.exerciseCount}
    </p>
  );
};

const Content: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => {
  return (
    <div>
      {courseParts.map(part => 
        <Part key={part.name} coursePart={part} />
      )}
    </div>
  );
};

const Total: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => {
  return (
    <p>
        Number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
    },
    {
      name: "Creating buttons that click",
      exerciseCount: 12,
      description: "Great section to hone your button making skills"
    }
  ];

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));