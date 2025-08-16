import { useState } from "react";
import ContactCard from "../components/contact/ContactCard";
import Button from "../components/core/Button";
import CallToAction from "../components/core/CallToAction";
import Footer from "../components/core/Footer";
import Navbar from "../components/core/Navbar";
import TitleLayout from "../components/core/TitleLayout";

export default function Contacts() {
  const [isSelectBranch, setIsSelectBranch] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [formData, setFormData] = useState({
    prefix: "Mr",
    name: "",
    address: "",
    number: "",
    email: "",
    message: "",
  });

  const handleBranchSelect = (branch: string) => {
    setSelectedBranch(branch);
    setIsSelectBranch(true);
    const contactCards = document.querySelectorAll(".contact-card");
    contactCards.forEach((card) => {
      if (card.getAttribute("data-branch") !== branch) {
        card.classList.add("hidden");
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isSelectBranch || selectedBranch === "") {
      alert("Please select a branch first.");
      return;
    }

    if (
      !formData.name ||
      !formData.address ||
      !formData.number ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const whatsappMessage = `*Contact Request*
Branch: ${selectedBranch}
Prefix: ${formData.prefix}
Name: ${formData.name}
Address: ${formData.address}
Phone: ${formData.number}
Email: ${formData.email}
Message: ${formData.message}`;

    const whatsappNumber = "628123456789";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="w-full flex flex-col justify-start items-start">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <section className="w-full flex flex-col justify-center items-center mt-32 px-6 sm:px-8">
        <div className="flex flex-col justify-center items-center gap-10 w-full max-w-6xl">
          <div className="flex flex-col justify-center items-center gap-1 sm:gap-3">
            <TitleLayout
              title="Get More Detail About Us"
              subtitle="CONTACT US"
              align="Center"
              position="Center"
              type="Normal"
            />
            <p className="text-sm sm:text-base opacity-80 leading-8 w-full max-w-md text-center">
              Silahkan pilih cabang yang ingin Anda hubungi untuk informasi
              lebih lanjut
            </p>
          </div>

          {/* Contact Cards */}
          <div
            className={`flex ${
              !isSelectBranch && "grid-cols-1 sm:grid-cols-2 grid"
            } justify-start items-stretch gap-4 w-full max-w-5xl`}
          >
            <ContactCard
              image="/contact-bali.webp"
              location="Cabang Bali"
              address="Jl. Sudirman No. 1, Jakarta"
              onClick={() => handleBranchSelect("Cabang Bali")}
            />
            <ContactCard
              image="/contact-surabaya.webp"
              location="Cabang Jakarta"
              address="Jl. Sudirman No. 1, Jakarta"
              onClick={() => handleBranchSelect("Cabang Jakarta")}
            />
            <ContactCard
              image="/contact-jatim.webp"
              location="Cabang Surabaya"
              address="Jl. Sudirman No. 1, Jakarta"
              onClick={() => handleBranchSelect("Cabang Surabaya")}
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit} // ✅ gunakan onSubmit
            className={`${
              isSelectBranch ? "flex" : "hidden"
            } w-full max-w-5xl p-6 sm:p-8 bg-white rounded-lg border border-[#dedede] flex-col gap-2 sm:gap-6`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="prefix"
                  className="text-base font-semibold opacity-75"
                >
                  Prefix
                </label>
                <select
                  name="prefix"
                  id="prefix"
                  value={formData.prefix}
                  onChange={(e) =>
                    setFormData({ ...formData, prefix: e.target.value })
                  }
                  className="w-full p-3 border border-[#cccccc] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="name"
                  className="text-base font-semibold opacity-75"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 border border-[#cccccc] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name Here"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="address"
                className="text-base font-semibold opacity-75"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full p-3 border border-[#cccccc] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Address Here"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="number"
                  className="text-base font-semibold opacity-75"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                  className="w-full p-3 border border-[#cccccc] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone Number Here"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="email"
                  className="text-base font-semibold opacity-75"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 border border-[#cccccc] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email Here"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="message"
                className="text-base font-semibold opacity-75"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-3 border border-[#cccccc] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Hi, I want to Join Koding Akademi!"
              />
            </div>

            <div className="w-full flex justify-end mt-4 sm:mt-6">
              <Button content="Send Message" type="Blue" typeAttr="submit" />
            </div>
          </form>
        </div>
      </section>

      {/* CTA & Footer */}
      <CallToAction />
      <Footer />
    </div>
  );
}
