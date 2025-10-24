import { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0eb7b4ec-76c6-411a-a180-e289d43c2fe9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="">
      <div className="flex items-center justify-center m-2 border-2 rounded-lg shadow-md ">
        <div className="mx-auto ">
          <div className="max-w-md p-5 mx-auto rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-500">
                Contact Me
              </h1>
              <p className="text-gray-400">
                I'd love to hear from you! Fill out the form below to contact me
                or know more about me.
              </p>
            </div>
            <div className="m-3">
              <form
                onSubmit={onSubmit}
                action="https://api.web3htmlForms.com/submit"
                method="POST"
                id="htmlForm"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="0eb7b4ec-76c6-411a-a180-e289d43c2fe9"
                />

                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-400"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                    className="w-full px-2 py-2 text-sm text-gray-900 placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none "
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm text-gray-400"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="1234567890"
                    required
                    className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-400"
                  >
                    Your Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-full h-20 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 bg-gray-100 rounded-lg focus:outline-none"
                    required
                  ></textarea>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="inline-block w-full px-4 py-4 btn"
                  >
                   Contact Me
                  </button>
                </div>
                <p
                  className="text-base text-center text-gray-400"
                  id="result"
                ></p>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
