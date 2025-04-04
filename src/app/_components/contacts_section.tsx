export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="flex h-auto flex-col items-center justify-center sm:mt-16 md:h-screen"
      >
        {/* <form
          action="https://formsubmit.co/ce9c8ef2776106da05ac3418ce3ec21b"
          method="POST"
        >
          <div className="flex flex-col">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send</button>
          </div>
        </form> */}
        <h2 className="mb-4 text-2xl font-bold">
          Let’s Build Something Together
        </h2>
        <div className="mx-auto w-3/4 max-w-lg rounded-lg bg-white p-6 shadow-lg">
          <form
            action="https://formsubmit.co/ce9c8ef2776106da05ac3418ce3ec21b"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://mzio.vercel.app/?contact_submit=true"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full rounded-md border p-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full rounded-md border p-2"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full rounded-md border p-2"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-700 p-2 text-white hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
