import React from 'react';
import ReactDOM from 'react-dom';

interface HeaderProps {
  courseName: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return <h1>{props.courseName}</h1>;
};

interface ContentProps {
  partName0: string;
  partName1: string;
  partName2: string;
  partNumber0: number;
  partNumber1: number;
  partNumber2: number;
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <div>
      <p>
        {props.partName0} {props.partNumber0}
      </p>
      <p>
        {props.partName1} {props.partNumber1}
      </p>
      <p>
        {props.partName2} {props.partNumber2}
      </p>
    </div>
  )
};

interface TotalProps {
  courseParts: { name: string, exerciseCount: number }[];
}

const Total: React.FC<TotalProps> = (props) => {
  return (
    <p>
        Number of exercises{" "}
        {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  )
};

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      <Header courseName={courseName} />
      <Content
        partName0={courseParts[0].name}
        partName1={courseParts[1].name}
        partName2={courseParts[2].name}
        partNumber0={courseParts[0].exerciseCount}
        partNumber1={courseParts[1].exerciseCount}
        partNumber2={courseParts[2].exerciseCount}
      />
      <Total courseParts={courseParts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));