import Image from "next/image";

const BranchInfo = ({
  branchName,
  facebookLink,
  mobile,
  tel,
  printing,
  email,
  address,
  hours,
  mapFirst,
}) => {
  return (
    <div
      className={`flex flex-col   ${
        mapFirst ? "order-2 md:w-2/5" : "order-1 md:1/2"
      }`}
    >
      <p className="text-2xl font-bold mb-5 lg:mx-8 text-[#555FB9]">{branchName}</p>
      <p className="text-xl font-bold mb-5 lg:mx-8 text-[#474B60]">Reach Us</p>
      <span className="mb-5 lg:mx-8">
        <p className="float-left mr-12 text-[#474B60]">Facebook:</p>
        <a
          href={facebookLink}
          className="w-1/2 md:w-2/4 hover:text-blue-400 break-words float-left relative left-12 text-[#474B60]"
        >
          {facebookLink}
        </a>
      </span>
      <p className="mb-5 lg:mx-8">
        <a className="float-left mr-20 text-[#474B60]">Mobile:</a>
        <a className="float-left relative left-8 text-[#474B60]">{mobile}</a>
      </p>
      <p className="mb-5 lg:mx-8">
        <a className="float-left mr-20 text-[#474B60]">Tel:</a>
        <a className="float-left relative left-16 text-[#474B60]">{tel}</a>
      </p>
      <p className="mb-5 lg:mx-8">
        <a className="float-left mr-20 text-[#474B60]">Printing:</a>
        <a className="float-left relative left-7 text-[#474B60]">{printing}</a>
      </p>
      <p className="mb-5 lg:mx-8">
        <a className="float-left mr-20 text-[#474B60]">Email:</a>
        <a className="float-left relative left-12 text-[#474B60]">{email}</a>
      </p>
      <span className="mb-5 lg:mx-8">
        <a className="float-left mr-14 text-[#474B60]">Address:</a>
        <a className="w-2/4 break-words float-left relative left-12 text-[#474B60]">{address}</a>
      </span>
      <span className="mb-5 lg:mx-8">
        <a className="float-left mr-14 text-[#474B60]">Opening hours:</a>
        <a className="w-2/5 break-words float-left text-[#474B60]">{hours}</a>
      </span>
    </div>
  );
};

const BranchMap = ({ mapFirst, mapEmbed }) => {
  return (
    <div
      className={`relative lg:md:w-2/5 md:md:w-2/4 w-full h-96 lg:mx-8 ${
        mapFirst ? "order-2 md:order-1" : "order-2"
      }`}
    >
      <div dangerouslySetInnerHTML={mapEmbed}/>
    </div>
  );
};

const BranchSection = ({
  branchName,
  facebookLink,
  mobile,
  tel,
  printing,
  email,
  address,
  hours,
  mapFirst,
  mapEmbed
}) => {
  return (
    <section className={`${mapFirst ? "bg-[#EEEFF8]" : "border-b-2 border-black"}`}>
      <div className="container px-10 md:px-0 mx-auto py-10 flex flex-col items-center md:flex-row md:items-start justify-between">
        <BranchInfo
          branchName={branchName}
          facebookLink={facebookLink}
          mobile={mobile}
          tel={tel}
          printing={printing}
          email={email}
          address={address}
          hours={hours}
          mapFirst={mapFirst}
        />
        {/* TODO: add link embedd to google maps here */}
        <BranchMap mapFirst={mapFirst} mapEmbed={mapEmbed} />
      </div>
    </section>
  );
};

BranchSection.defaultProps = {
  branchName: "Location Branch",
  facebookLink: "XXXXXXXXXXXXXX",
  mobile: "0917-8039316",
  tel: "8731-3628 / 7902-7030",
  printing: "8731-9704",
  email: "jolisgen2@gmail.com",
  address: "XXXXXXXXXXXXXX",
  hours: `Mon-Sat: 8:30AM-6:00PM,
  Sunday: Closed`
};

export default BranchSection;
