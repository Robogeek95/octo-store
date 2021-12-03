import { useState } from "react";
import ChatBox from "../components/chatBox";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(phone);
    setPhone("");
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
