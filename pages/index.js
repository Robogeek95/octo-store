import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-col-2 my-40">
          <div>
            <p className="text-6xl">Hey there,</p>
            <p className="text-6xl font-bold mt-2">Let's text</p>
            <p className="mt-8">
              Signup below to get exciting deals and the latest menu right on
              your phone. We'll send you a welcome offer just for opting in
            </p>

            <form className="mt-4">
              <div>
                <input
                  className="p-2 border-2 border-gray-400"
                  placeholder="Mobile number"
                  type="text"
                />
              </div>

              <div className="mt-4">
                <button className="bg-purple-600 py-3 text-white px-6">
                  Sign me up
                </button>
              </div>
            </form>
          </div>
          <div>hi</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
