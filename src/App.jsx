
import { useState } from 'react'

const initialStudents = [
  { id: 1, name: 'Dixit Mewara', course: 'BCA', marks: 85 },
  { id: 2, name: 'Hemant Mewara', course: 'BCA', marks: 95 },
  { id: 3, name: 'Rahul Mewara', course: 'BCA', marks: 72 },
  { id: 4, name: 'Aarav Sharma', course: 'BCA', marks: 88 },
]

export default function App() {
  const [students, setStudents] = useState(initialStudents)

  function deleteStudent(id) {
    setStudents((current) => current.filter((student) => student.id !== id))
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-cyan-400">
              Practical 19
            </p>
            <h1 className="mt-2 text-4xl font-black">
              Student<span className="text-cyan-400">Vault</span>
            </h1>
            <p className="mt-2 text-slate-400">Manage and remove student records.</p>
          </div>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4">
            <p className="text-sm text-slate-400">Total Students</p>
            <p className="text-3xl font-black text-cyan-300">{students.length}</p>
          </div>
        </header>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
          <div className="border-b border-white/10 p-5">
            <h2 className="text-xl font-bold">Student Records</h2>
          </div>

          {students.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-xl font-bold">All records cleared!</p>
              <p className="mt-2 text-slate-400">No students remaining.</p>
              <button
                onClick={() => setStudents(initialStudents)}
                className="mt-5 rounded-xl bg-cyan-500 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-300"
              >
                Restore Students
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-800 text-sm text-slate-300">
                  <tr>
                    <th className="px-5 py-4">ID</th>
                    <th className="px-5 py-4">Student Name</th>
                    <th className="px-5 py-4">Course</th>
                    <th className="px-5 py-4">Marks</th>
                    <th className="px-5 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-800/60">
                      <td className="px-5 py-4 text-cyan-300">{student.id}</td>
                      <td className="px-5 py-4 font-semibold">{student.name}</td>
                      <td className="px-5 py-4 text-slate-400">{student.course}</td>
                      <td className="px-5 py-4 font-bold">{student.marks}/100</td>
                      <td className="px-5 py-4">
                        <button
                          onClick={() => deleteStudent(student.id)}
                          className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm font-bold text-red-300 hover:bg-red-500 hover:text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
