import { HeaderProps, ContentProps } from "./types";

const App = () => {
  const courseName: string = "Half Stack application development";
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
      <Header courseName={courseName}/>
      <Contents courseParts={courseParts}/>
      <Total courseParts={courseParts}/>
    </div>
  );
};

const Header = ( props: HeaderProps ) => {
  console.log(props);
  return <h1>{props.courseName}</h1>
}

const Contents = ( props: ContentProps ) => {
  return (
    <div>
      <p>{props.courseParts[0].name} {props.courseParts[0].exerciseCount} </p>
      <p>{props.courseParts[1].name} {props.courseParts[1].exerciseCount} </p>
      <p>{props.courseParts[2].name} {props.courseParts[2].exerciseCount} </p>
    </div>
)}

const Total = ( props: ContentProps ) => {
  const total = props.courseParts.reduce((sum, part) => sum + part.exerciseCount, 0)
  return <p>Number of exercises {total}</p>
}

export default App;