import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";

const contact = () => {
  const [isSending, setSending] = useState(false);

  const isInputsEmpty = (form: HTMLFormElement) => {
    let empty = false;
    form.querySelectorAll<HTMLInputElement>("[name]").forEach((input) => {
      if (input.value.trim() == "") empty = true;
    });

    return empty;
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isInputsEmpty(e.target as HTMLFormElement)) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_ck80dwf",
        "template_k50jsgc",
        e.target as HTMLFormElement,
        "JaNwx5z394MrxB-4K"
      )
      .then(() => {
        setSending(false);
        alert("Thanks for contacting me, I will get back to you soon!");
      })
      .catch(() => {
        setSending(false);
        alert(
          "Sorry Your Email havn't sent. contact this email: drisspennywise@gmail.com"
        );
      });
  };

  return (
    <section id="contact">
      <h2 className="font-semibold font-display text-4xl my-8 underline">
        Contact Me
      </h2>
      <form className="flex flex-col gap-4" onSubmit={sendEmail}>
        <div className="relative">
          <input
            className="border w-full rounded-md p-2 peer placeholder:opacity-0 border-gray-400 bg-gray-50 focus:outline-sky-500"
            type="text"
            name="from_name"
            placeholder="name"
            id="name"
            required
          />
          <label
            htmlFor="name"
            className="absolute left-2 -top-[0.8rem] peer-placeholder-shown:top-2 peer-focus:-top-[0.8rem] peer-focus:text-sky-500 text-gray-600 transition-all pointer-events-none bg-gray-50"
          >
            Name
          </label>
        </div>

        <div className="relative">
          <input
            className="border w-full rounded-md p-2 peer placeholder:opacity-0 border-gray-400 bg-gray-50 focus:outline-sky-500"
            type="email"
            name="email_from"
            placeholder="email@domain.com"
            id="email"
            required
          />
          <label
            className="absolute left-2 -top-[0.8rem] peer-placeholder-shown:top-2 peer-focus:-top-[0.8rem] peer-focus:text-sky-500 text-gray-600 transition-all pointer-events-none bg-gray-50"
            htmlFor="email"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <textarea
            className="border w-full rounded-md p-2 peer h-60 placeholder:opacity-0 border-gray-400 bg-gray-50 focus:outline-sky-500"
            placeholder="message..."
            name="message"
            id="message"
            required
          ></textarea>
          <label
            className="absolute left-2 -top-[0.8rem] peer-placeholder-shown:top-2 peer-focus:-top-[0.8rem] peer-focus:text-sky-500 text-gray-600 transition-all pointer-events-none bg-gray-50"
            htmlFor="message"
          >
            message
          </label>
        </div>

        <button
          className="text-sky-100 bg-sky-900 rounded-md py-2 block hover:bg-sky-800"
          disabled={isSending}
        >
          {isSending ? (
            <span>sending...</span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              {" "}
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 512 512"
              >
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
              </svg>{" "}
              Send
            </span>
          )}
        </button>
      </form>
    </section>
  );
};

export default contact;
