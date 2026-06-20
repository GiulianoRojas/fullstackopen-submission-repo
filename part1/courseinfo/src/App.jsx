const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>{name} - {exercises}</p>
  )
}

const Total = ({total}) => {
  const [first, second, third] = total
  const totalExercises = first.exercises + second.exercises + third.exercises

  return (
    <>
      <p>Total number of exercise: {totalExercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App