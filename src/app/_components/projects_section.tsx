// export default function ProjectSection() {
//   return (
//     <>
//       <section
//         id="projects"
//         className="flex h-auto flex-col items-center justify-center sm:mt-16 md:h-screen"
//       >
//         <div className="flex flex-col items-center justify-center">
//           <h2 className="mb-6 text-5xl font-bold">My Projects</h2>
//           <p className="mb-8 text-lg text-gray-600">
//             Here are some of the projects I've worked on.
//           </p>
//         </div>
//         <div className="flex flex-col gap-3 md:flex-row">
//           <div className="w-screen max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
//             {/* Card Image */}
//             <img
//               className="h-48 w-full object-cover"
//               src="https://via.placeholder.com/400"
//               alt="Card Image"
//             />

//             {/* Card Content */}
//             <div className="h-32 p-4">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 HealthCheck Clinic Corporate Uploading
//               </h2>
//               <p className="mt-2 text-gray-600">
//                 Simple file uploading web application
//               </p>
//             </div>

//             {/* Stack */}
//             <div className="flex h-56 flex-col items-start justify-items-start p-4">
//               <h2 className="mb-1 text-xl font-semibold text-gray-800">
//                 Stack
//               </h2>
//               <div className="flex flex-wrap gap-3">
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Next.js
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Vercel
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Postgresql
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Tailwind
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Shadcn
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   TanStack Query
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Zustand
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Clerk
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Resend
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Uploadthing
//                 </span>
//               </div>
//             </div>

//             {/* Card Actions */}
//             <div className="flex justify-end p-4">
//               <button className="rounded-md bg-gray-300 px-4 py-2 text-white hover:bg-gray-400">
//                 View Source
//               </button>
//             </div>
//           </div>
//           <div className="h-auto w-screen max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
//             {/* Card Image */}
//             <img
//               className="h-48 w-full object-cover"
//               src="https://via.placeholder.com/400"
//               alt="Card Image"
//             />

//             {/* Card Content */}
//             <div className="h-32 p-4">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Simple Currency Converter
//               </h2>
//               <p className="mt-2 text-gray-600">
//                 This is a simple currency converter
//               </p>
//             </div>

//             {/* Stack */}
//             <div className="flex h-56 flex-col items-start justify-items-start p-4">
//               <h2 className="mb-1 text-xl font-semibold text-gray-800">
//                 Stack
//               </h2>
//               <div className="flex flex-wrap gap-3">
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Next.js
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Vercel
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Postgresql
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Tailwind
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Shadcn
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   TanStack Query
//                 </span>
//                 <span className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black">
//                   Zustand
//                 </span>
//               </div>
//             </div>

//             {/* Card Actions */}
//             <div className="flex justify-end p-4">
//               <button className="rounded-lg bg-gray-300 px-4 py-2 text-white hover:bg-gray-400">
//                 View Source
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="flex h-auto flex-col items-center justify-center sm:mt-16 md:h-screen"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="mb-6 text-5xl font-bold">My Projects</h2>
        <p className="mb-8 text-lg text-gray-600">
          Here are some of the projects I&apos;ve worked on.
        </p>
      </div>

      <div className="flex w-full max-w-5xl flex-col items-center gap-6 md:flex-row md:justify-center">
        {/* Card 1 */}
        <div className="flex h-full w-3/4 flex-col overflow-hidden rounded-lg bg-white shadow-lg md:w-1/2">
          <img
            className="h-48 w-full object-cover"
            src="https://via.placeholder.com/400"
            alt="Card Image"
          />
          <div className="flex flex-grow flex-col p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              HealthCheck Clinic Corporate Uploading
            </h2>
            <p className="mt-2 text-gray-600">
              Simple file uploading web application
            </p>

            {/* Stack */}
            <div className="mt-auto flex flex-col">
              <h2 className="mb-1 text-xl font-semibold text-gray-800">
                Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Vercel",
                  "PostgreSQL",
                  "Tailwind",
                  "Shadcn",
                  "TanStack Query",
                  "Zustand",
                  "Clerk",
                  "Resend",
                  "Uploadthing",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card Actions */}
          <div className="flex justify-end p-4">
            <button className="rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
              View Source
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex h-full w-3/4 flex-col overflow-hidden rounded-lg bg-white shadow-lg md:w-1/2">
          <img
            className="h-48 w-full object-cover"
            src="https://via.placeholder.com/400"
            alt="Card Image"
          />
          <div className="flex flex-grow flex-col p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Simple Currency Converter
            </h2>
            <p className="mt-2 text-gray-600">
              This is a simple currency converter
            </p>

            {/* Stack */}
            <div className="mt-auto flex flex-col">
              <h2 className="mb-1 text-xl font-semibold text-gray-800">
                Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Vercel",
                  "PostgreSQL",
                  "Tailwind",
                  "Shadcn",
                  "TanStack Query",
                  "Zustand",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-600 px-3 py-1 text-sm font-semibold text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card Actions */}
          <div className="flex justify-end p-4">
            <button className="rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
              View Source
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
