// export default function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="flex h-auto w-screen items-center justify-center md:h-screen"
//     >
//       <div className="flex flex-col items-center justify-center md:flex-row">
//         <div className="w-1/2"></div>
//         <div className="w-1/2">
//           <h2 className="text-3xl font-bold">Hi! I am Mesio</h2>
//           <p className="mt-4 text-lg leading-relaxed text-gray-600">
//             I am a <strong>Full-Stack Developer</strong> with a strong
//             foundation in mobile application development. For the past 5 years,
//             I specialized in building high-performance mobile applications using{" "}
//             <strong>Flutter</strong>. Now, I am expanding my expertise to
//             full-stack web development with <strong>Next.js</strong>, leveraging
//             my mobile experience to create scalable, end-to-end solutions.
//           </p>
//           <p className="mt-4 text-gray-600">
//             As a full-stack developer, I thrive on transforming ideas into
//             reality, ensuring smooth user experiences across all platforms. I am
//             eager to take a bold leap forward with your company, helping you
//             bring your vision to life and create products that make a real
//             impact.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex h-auto w-full items-center justify-center py-12 md:h-screen"
    >
      <div className="flex w-full max-w-5xl flex-col items-center gap-8 md:flex-row">
        {/* Left Side - Placeholder for Image or Illustration */}
        <div className="flex w-3/4 justify-center md:w-1/2">
          {/* Placeholder for an Image or Illustration */}
          <div className="h-64 w-64 rounded-lg bg-gray-300 md:h-80 md:w-80">
            <Image
              className="h-64 w-full object-cover md:h-80 md:w-80"
              src="https://bb7xy0ug64.ufs.sh/f/IfFp6TjRCGFmGI5GniPO2tzh9Xuf73BoWwqeNa1ngiyFvLYZ"
              alt="Nemesio L. Resonable Jr."
              height={80}
              width={80}
            />
          </div>
        </div>

        {/* Right Side - About Content */}
        <div className="flex w-3/4 flex-col md:w-1/2">
          <h2 className="text-3xl font-bold">Hi! I am Mesio</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            I am a <strong>Full-Stack Developer</strong> with a strong
            foundation in mobile application development. For the past 5 years,
            I specialized in building high-performance mobile applications using{" "}
            <strong>Flutter</strong>. Now, I am expanding my expertise to
            full-stack web development with
            <strong> Next.js</strong>, leveraging my mobile experience to create
            scalable, end-to-end solutions.
          </p>
          <p className="mt-4 text-gray-600">
            As a full-stack developer, I thrive on transforming ideas into
            reality, ensuring smooth user experiences across all platforms. I am
            eager to take a bold leap forward with your company, helping you
            bring your vision to life and create products that make a real
            impact.
          </p>
        </div>
      </div>
    </section>
  );
}
