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
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl min-h-48 flex items-center justify-center text-gray-400 text-sm">
          {/*
            Issues introduced:
            - alt text is hardcoded instead of using the imageAlt variable
            - no className: image won't fill width or have rounded corners
          */}
          <img src={imageUrl} alt="a nice mountain" />
        </div>
      </div>
    </ExerciseLayout>
  )
}
