import Image from "next/image";

const BranchInfo = ({
  branchName,
  facebookLink,
  phoneNumber,
  address,
  mapFirst,
}) => {
  return (
    <div
      className={`flex flex-col   ${
        mapFirst ? "order-2 md:w-2/5" : "order-1 md:1/2"
      }`}
    >
      <p className="text-2xl font-bold mb-10 lg:mx-8">{branchName}</p>
      <p className="text-xl font-bold mb-10 lg:mx-8">Reach Us</p>
      <span className="mb-10 lg:mx-8">
        <p className="float-left mr-12">Facebook</p>
        <a
          href={facebookLink}
          className="w-1/2 md:w-2/4 hover:text-blue-400 break-words float-left"
        >
          {facebookLink}
        </a>
      </span>
      <p className="mb-10 lg:mx-8">
        <a className="float-left mr-20">Phone</a>
        <a className="float-left relative right-2">{phoneNumber}</a>
      </p>
      <span className="mb-10 lg:mx-8">
        <a className="float-left mr-14">Address</a>
        <a className="w-2/4 break-words float-left">{address}</a>
      </span>
    </div>
  );
};

const BranchMap = ({ mapFirst }) => {
  return (
    <div
      className={`relative w-full md:w-2/5 h-96 lg:mx-8 ${
        mapFirst ? "order-2 md:order-1" : "order-2"
      }`}
    >
      <Image
        layout="fill"
        priority="true"
        src="/images/default.jpg"
        alt="branch image"
      />
    </div>
  );
};

const BranchSection = ({
  branchName,
  facebookLink,
  phoneNumber,
  address,
  mapFirst,
}) => {
  return (
    <section className="border-b-2 border-black">
      <div className="container px-10 md:px-0 mx-auto py-10 flex flex-col items-center md:flex-row md:items-start justify-between">
        <BranchInfo
          branchName={branchName}
          facebookLink={facebookLink}
          phoneNumber={phoneNumber}
          address={address}
          mapFirst={mapFirst}
        />
        {/* TODO: add link embedd to google maps here */}
        <BranchMap mapFirst={mapFirst} />
      </div>
    </section>
  );
};

BranchSection.defaultProps = {
  branchName: "Location Branch",
  facebookLink: "XXXXXXXXXXXXXX",
  phoneNumber: "09xx xxxx xxx",
  address: "XXXXXXXXXXXXXX",
  reverse: false,
};

export default BranchSection;
