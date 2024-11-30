import { useState } from "react";
import NierHeaderText from "src/components/NierHeaderText/NierHeaderText";
import LinkedinLogo from "./linkedin.svg?react";
import GmailLogo from "./gmail.svg?react";
import WhatsappLogo from "./whatsapp.svg?react";
import VerticalBarsSibling from "../VerticalBarsWrapper/VerticalBarsSibling";
import useHandleEmail from "./useHandleEmail";

function useForm<T extends Record<string, any>>(
  initialState: T
): [
  T,
  (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void,
  () => void,
] {
  const [formData, setFormData] = useState<T>(initialState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formReset = () => {
    setFormData(initialState);
  };

  return [formData, handleChange, formReset];
}

export default function Contact() {
  //@ts-ignore
  const [formData, handleChange, resetForm] = useForm({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const { handleSubmit, success } = useHandleEmail();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = await handleSubmit(
      formData.email,
      formData.subject,
      formData.body
    );
    console.log(success);
    if (result) {
      alert("Your email has been sent successfully");
    } else {
      alert("An error has occurred. Please contact my email directly.");
    }
  }
  return (
    <div className="h-[80vh] w-full text-nier-dark-900 flex flex-row  ">
      <VerticalBarsSibling />
      <div className="flex flex-col  h-full flex-1 py-12">
        <NierHeaderText
          text="Contact"
          className="nier-title text-5xl absolute"
        />
        <div className="flex flex-row  h-full ">
          <div className="flex-1 flex flex-col justify-center ">
            <div className="p-1 bg-header-secondary-color text-header-main-color">
              Email Contact Form
            </div>
            <div className="bg-[#d9d3b1] p-8 shadow-bigBox">
              <form onSubmit={onSubmit} className="">
                <div className="flex flex-row mb-6">
                  <div className="flex-1 mr-6 flex flex-col gap-y-4 font-light">
                    <div className="flex flex-col text-xl">
                      <label htmlFor="name" className="mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        className="bg-bison-hide-100 shadow-bigBox outline-none p-1"
                      />
                    </div>
                    <div className="flex flex-col text-xl">
                      <label htmlFor="email" className="mb-1">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        className="bg-bison-hide-100 shadow-bigBox outline-none p-1"
                      />
                    </div>
                    <div className="flex flex-col text-xl">
                      <label htmlFor="subject" className="mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        onChange={handleChange}
                        className="bg-bison-hide-100 shadow-bigBox outline-none p-1"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col text-xl font-light">
                    <label htmlFor="body" className="mb-1">
                      Body
                    </label>
                    <textarea
                      name="body"
                      id="body"
                      onChange={handleChange}
                      className="bg-bison-hide-100 shadow-bigBox outline-none p-1 h-full resize-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className=" bg-header-secondary-color text-[#d9d3b1]  font-normal p-1 w-24"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center ">
            <div className="">
              <div className="p-1 bg-header-secondary-color text-header-main-color">
                Personal Contact Information
              </div>
              <div className="bg-[#d9d3b1] px-16 py-6  shadow-bigBox font-extralight">
                <div className="mb-4">
                  <span className="text-4xl mb-2 inline-block">
                    Name: Bryan Almeida Farias
                  </span>
                  <div className="h-[1px] border-r-2 w-[80%] bg-nier-dark-700"></div>
                </div>
                <div className="mb-4">
                  <span className="text-4xl mb-2 inline-block">
                    Telephone: +1 727-493-6909
                  </span>
                  <div className="h-[1px] border-r-2 w-[60%] bg-nier-dark-700"></div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl mb-2 inline-block">
                    E-mail: bryan.af7@gmail.com
                  </span>
                  <div className="h-[1px] border-r-2 w-[40%] bg-nier-dark-700"></div>
                </div>
                <div className="flex flex-row gap-x-4 items-end">
                  <GmailLogo className=" -mb-2 inline-block w-[50px] h-[50px]  stroke-nier-dark-900 text-nier-dark-900 fill-nier-dark-900 " />
                  <LinkedinLogo className="w-[50px] h-[50px]  fill-nier-dark-900 text-nier-dark-900 stroke-nier-dark-900" />
                  <WhatsappLogo className="w-[50px] h-[50px] fill-nier-dark-900 text-nier-dark-900 stroke-nier-dark-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
