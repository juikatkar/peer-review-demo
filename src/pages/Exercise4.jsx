import ExerciseLayout from '../components/ExerciseLayout'

export default function Exercise4() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Strawberry']

  return (
    <ExerciseLayout
      number={4}
      title="Render a list"
      instructions={
        <>
          An array <code>fruits</code> is ready. The <code>.map()</code> below returns{' '}
          <code>null</code> — fix it to render each fruit as an <code>&lt;li&gt;</code>.
        </>
      }
    >
      <div className="py-4">
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </ExerciseLayout>
  )
}
