import { useState } from 'react'
import ExerciseLayout from '../components/ExerciseLayout'

export default function Exercise1() {
  const [clicked, setClicked] = useState(false)

  function handleClick() {
    console.log('clicked!')  // TODO: forgot to remove this debug log
    setClicked(true)
    alert('Hello, world! 👋')
  }

  return (
    <ExerciseLayout
      number={1}
      title="Wire a button to its handler"
      instructions={
        <>
          A <strong>Say Hello</strong> button is already on screen and a <code>handleClick</code>{' '}
          function is already defined. Connect them by adding the correct prop to the button.
        </>
      }
    >
      <div className="flex flex-col items-center gap-4 py-6">
        {/* onClick wired, but using an unnecessary arrow wrapper */}
        <button
          onClick={() => handleClick()}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Say Hello
        </button>

        {clicked && (
          <p className="text-green-600 font-medium">✅ Great job! The handler fired.</p>
        )}
      </div>
    </ExerciseLayout>
  )
}
