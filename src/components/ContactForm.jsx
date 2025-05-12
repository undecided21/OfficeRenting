import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa15b34f-d4ce-42c3-9b8f-ac77790ff3f6");

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
    <div className="flex justify-center my-40 px-4">
      <div className="max-w-3xl w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Reach Us</h2>
        <form onSubmit={onSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 bg-white text-gray-900 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 rounded-lg p-3 bg-white text-gray-900 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Messages
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="This form actually works. it will email me directly through web3form so please give me a feed back"
              required
              className="w-full border border-gray-300 rounded-lg p-3 bg-white text-gray-900 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg 
                     hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Result Message */}
        {result && (
          <p className="mt-6 text-center text-lg font-medium text-gray-800">
            {result}
          </p>
        )}
      </div>
    </div>
  );
}
