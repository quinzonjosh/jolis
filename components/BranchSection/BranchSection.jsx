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
        mapFirst ? "order-2 md:w-2/5 relative md:right-10 right-0" : "order-1 md:1/2"
      }`}
    >
      <p className="text-3xl font-bold mb-5 lg:mx-8 text-secondary font-sans">{branchName}</p>
      <p className="text-2xl font-bold mb-5 lg:mx-8 text-primary font-sans">Reach Us</p>
      <span className="mb-5 lg:mx-8">
        <p className="float-left mr-12 text-primary">Facebook:</p>
        <a
          href={facebookLink}
          className="w-1/2 md:w-2/4 hover:text-blue-400 hover:underline break-words float-left relative left-10 text-primary"
        >
          {facebookLink.replace("https://www.facebook.com", "")}
        </a>
      </span>
      <p className="mb-5 lg:mx-8">
        <a className="float-left mr-20 text-primary">Mobile:</a>
        <a className="float-left relative left-7 text-primary">{mobile}</a>
      </p>
      <p className="mb-5 lg:mx-8">
        <a className="float-left mr-20 text-primary">Tel:</a>
        <a className="float-left relative left-14 break-words w-2/4 text-primary">{tel}</a>
      </p>
      <p className="mb-5 lg:mx-8">
        <a className="float-left mr-20 text-primary">Printing:</a>
        <a className="float-left relative left-4 text-primary">{printing}</a>
      </p>
      <p className="mb-5 lg:mx-8">
        <a className="float-left mr-20 text-primary">Email:</a>
        <a className="float-left relative left-9 break-words w-2/4 text-primary">{email}</a>
      </p>
      <span className="mb-5 lg:mx-8">
        <a className="float-left mr-14 text-primary">Address:</a>
        <a className="lg:w-2/4 md:w-2/5 w-2/4 break-words float-left relative left-11 text-primary">{address}</a>
      </span>
      <span className="mb-5 lg:mx-8">
        <a className="float-left mr-12 text-primary">Opening hours:</a>
        <a className="w-2/5 break-words float-left text-primary">{hours}</a>
      </span>
    </div>
  );
};

const BranchMap = ({ mapFirst, mapEmbed }) => {
  return (
    <div
      className={`relative lg:md:w-2/5 md:md:w-2/4 w-full h-96 lg:mx-8 lg:top-10 md:top-16 top-0 ${
        mapFirst ? "order-2 md:order-1" : "order-2 lg:-ml-0 md:-ml-20 -ml-0"
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
    <section className={`${mapFirst ? "bg-white-accent-ghost" : "border-b-2 border-black"}`}>
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