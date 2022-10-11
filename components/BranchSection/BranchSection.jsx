import Image from "next/image"

const BranchSection = ({branchName, facebookLink, phoneNumber, address, reverse}) => {
    if(!reverse)
        return (
                <section className="border-b-2 border-black">
                    <div className="m-10 flex flex-col flex-wrap items-start max-h-96 relative top-6">
                        <p className="text-2xl font-bold mb-10">
                            {branchName}
                        </p>
                        <p className="text-xl font-bold mb-10">
                            Reach Us
                        </p>
                        <p className="mb-10">
                            <a className="float-left mr-12">Facebook</a> 
                            <a href={facebookLink} className="hover:text-blue-400 w-2/4 text-ellipsis float-left relative bottom-3">
                                {facebookLink}
                            </a>
                        </p>
                        <p className="mb-10">
                            <a className="float-left mr-20">Phone</a>
                            <a className="float-left relative right-2">
                                {phoneNumber}
                            </a>
                        </p>
                        <p className="mb-10">
                            <a className="float-left mr-14">Address</a> 
                            <a className="w-2/4 text-ellipsis float-left relative bottom-3">
                                {address}  
                            </a>
                        </p>
                        <div className="relative w-2/5 h-96 left-36 bottom-6">
                            <Image layout='fill' priority="true" src="/images/default.jpg" alt="branch image" />
                        </div>
                    </div>
                </section>
            )
    else
        return (
            <section className="">
                <div className="m-10 flex flex-col flex-wrap items-start max-h-96 relative top-6">   
                    <div className="relative w-2/5 h-96 bottom-6 mr-80">
                        <Image layout='fill' priority="true" src="/images/default.jpg" alt="branch image" />
                    </div>
                    <p className="text-2xl font-bold mb-10">
                        {branchName}
                    </p>
                    <p className="text-xl font-bold mb-10">
                        Reach Us
                    </p>
                    <p className="mb-10">
                        <a className="float-left mr-12">Facebook</a> 
                        <a href={facebookLink} className="hover:text-blue-400 w-2/4 text-ellipsis float-left relative bottom-3">
                            {facebookLink}
                        </a>
                    </p>
                    <p className="mb-10">
                        <a className="float-left mr-20">Phone</a>
                        <a className="float-left relative right-2">
                            {phoneNumber}
                        </a>
                    </p>
                    <p className="mb-10">
                        <a className="float-left mr-14">Address</a> 
                        <a className="w-2/4 text-ellipsis float-left relative bottom-3">
                            {address}  
                        </a>
                    </p>
                </div>
            </section>
        )
}

BranchSection.defaultProps = {
    branchName: "Location Branch",
    facebookLink: "XXXXXXXXXXXXXX",
    phoneNumber: "09xx xxxx xxx",
    address: "XXXXXXXXXXXXXX",
    reverse: false
}

export default BranchSection