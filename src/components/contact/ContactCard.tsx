interface ContactCardProps {
  image: string;
  location: string;
  address: string;
  onClick: () => void;
}

export default function ContactCard({
  image,
  location,
  address,
  onClick = () => {},
}: ContactCardProps) {
  return (
    <div
      onClick={onClick}
      data-branch={location}
      className="contact-card w-full flex flex-row justify-start items-center gap-5 border border-[#cccccc] rounded-xl p-5 cursor-pointer hover:shadow shadow-[#ccc] transition-shadow duration-300"
    >
      <img src={image} alt="Contact" className="w-9 sm:w-12 object-cover" />
      <div className="flex flex-col gap-1">
        <span className="text-lg font-semibold">{location}</span>
        <span className="text-sm text-gray-600">{address}</span>
      </div>
    </div>
  );
}
