import { useState } from 'react'
import ExerciseLayout from '../components/ExerciseLayout'

export default function Exercise2() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <ExerciseLayout
      number={2}
      title="Add a missing button"
      instructions={
        <>
          The feedback form below is fully wired up — but the <strong>Submit button is missing</strong>.
          Add a <code>&lt;button type=&quot;submit&quot;&gt;</code> inside the form.
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            rows={3}
            placeholder="Your message..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors self-start"
        >
          Submit
        </button>

        {submitted && (
          <p className="text-green-600 font-medium text-sm">✅ Form submitted successfully!</p>
        )}
      </form>
    </ExerciseLayout>
  )
}
