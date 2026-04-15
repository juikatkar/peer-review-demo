import ExerciseLayout from '../components/ExerciseLayout'

function ProfileCard({ name, role, bio }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 text-lg font-bold">
          {name[0]}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-xs text-indigo-500">{role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">{bio}</p>
    </div>
  )
}

export default function Exercise5() {
  return (
    <ExerciseLayout
      number={5}
      title="Fix the broken style"
      instructions={
        <>
          The <code>ProfileCard</code> component is missing Tailwind classes on its outer{' '}
          <code>&lt;div&gt;</code>. Add <code>bg-white border border-gray-200 rounded-2xl shadow-md p-6</code>{' '}
          to make it look like a card.
        </>
      }
    >
      <div className="py-4">
        <ProfileCard
          name="Alex Morgan"
          role="Frontend Developer"
          bio="Passionate about building clean UIs and learning new web technologies every day."
        />
      </div>
    </ExerciseLayout>
  )
}
