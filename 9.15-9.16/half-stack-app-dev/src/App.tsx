import { 
  HeaderProps,
  ContentProps,
  CoursePart
} from "./types";

const App = () => {
  const courseName: string = "Half Stack application development";

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "requirements",  
  }
  ];

  return (
    <div>
      <Header courseName={courseName}/>
      <Contents courseParts={courseParts}/>
      <Total courseParts={courseParts}/>
    </div>
  );

};

const Header = ( props: HeaderProps ) => {
  return <h1>{props.courseName}</h1>
}

const Contents = (props: ContentProps) => {
  return (
    <div>
    {props.courseParts.map(p => {
      switch (p.kind) {
        case "basic":
          return (
            <div key={p.name}>
              <b>{p.name} {p.exerciseCount}</b>
              <p><i>{p.description}</i></p>
            </div>
          );
        case "background":
          return (
            <div key={p.name}>
              <b>{p.name} {p.exerciseCount}</b>
              <p><i>{p.description}</i></p>
              <p>Materials: {p.backgroundMaterial}</p>
            </div>
          );
        case "group":
          return (
            <div key={p.name}>
              <b>{p.name} {p.exerciseCount}</b>
              <p>Projects: {p.groupProjectCount}</p>
            </div>
          );
        case "requirements":
          return (
            <div key={p.name}>
              <b>{p.name} {p.exerciseCount}</b>
              <p><i>{p.description}</i></p>
              <p>Requirements: {p.requirements.join(', ')}</p>
            </div>
          );
        default:
          return assertNever(p); // forces exhaustiveness
      }
    })}
  </div>
  );  
};

const Total = ( props: ContentProps ) => {
  const total = props.courseParts.reduce((sum, part) => sum + part.exerciseCount, 0)
  return <p>Number of exercises {total}</p>
}

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
export default App;