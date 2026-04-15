import ExerciseLayout from '../components/ExerciseLayout'

export default function Exercise3() {
  const imageUrl =
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop'
  const imageAlt = 'Mountain landscape with a lake at sunset'

  return (
    <ExerciseLayout
      number={3}
      title="Display an image"
      instructions={
        <>
          Variables <code>imageUrl</code> and <code>imageAlt</code> are already defined.
          Add an <code>&lt;img&gt;</code> tag inside the placeholder below and use those variables.
        </>
      }
    >
      <div className="py-4">
        <img src={imageUrl} alt={imageAlt} className="w-full rounded-xl" />
      </div>
    </ExerciseLayout>
  )
}
