import axios from "axios";
import { useState } from "react";
import ChatBox from "../components/chatBox";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  const [phone, setPhone] = useState("");

  console.log(process.env);

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      contacts: [
        {
          phone_number: phone,
        },
      ],
      list_name: "webstore",
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_OCTOPUSH_BASE_API_URL}/contact/create`,
        payload,
        {
          headers: {
            ContentType: "application/json",
            "api-key": process.env.NEXT_PUBLIC_OCTOPUSH_API_KEY,
            "api-login": process.env.NEXT_PUBLIC_OCTOPUSH_API_LOGIN,
            "cache-control": "no-cache",
          },
        }
      )
      .then((response) => {
        setPhone("");
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  }

  function handleChange(e) {
    setPhone(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-10 my-10 items-center">
          <div>
            <p className="text-6xl">Hey there,</p>
            <p className="text-6xl font-bold mt-2">Let's text</p>
            <p className="mt-8">
              Signup below to get exciting deals and the latest menu right on
              your phone. We'll send you a welcome offer just for opting in
            </p>

            <form className="mt-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="tel"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Mobile number"
                  className="p-2 border-2 border-gray-400"
                />
              </div>

              <div className="mt-4">
                <button className="bg-purple-600 py-3 text-white px-6">
                  Sign me up
                </button>
              </div>
            </form>
          </div>
          <div className="relative">
            <div className="absolute top-20 -left-8">
              <ChatBox imageUrl="./hero_avatar.png" />
            </div>
            <img src="./menu.png" className="rounded-full object-center" />
            <div className="absolute bottom-20 -right-8">
              <ChatBox imageUrl="./hero_avatar_2.png" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
