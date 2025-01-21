export default function Navbar() {
  return (
    <div className="h-[70px] w-full bg-blue-600 p-5 flex flex-row justify-center">
      <div className="w-full md:w-[80%] flex flex-row justify-start text-lg gap-12">
        <div className="hidden md:inline-block">
          <a className=" text-white font-bold md:text-nowrap" href="/#">
            Satellite Remote Sensing and Cryospheric Physics Lab
          </a>
        </div>
        <div className="md:hidden">
          <a className=" text-white font-bold md:text-nowrap" href="/#">
            SRSCPLab
          </a>
        </div>
        <div className="overflow-x-scroll flex flex-row justify-start gap-12">
          <div>
            <a
              className="text-white underline decoration-transparent hover:decoration-inherit transition-all ease-in duration-200"
              href="#Professor"
            >
              Professor
            </a>
          </div>
          <div>
            <a
              className="text-white underline decoration-transparent hover:decoration-inherit transition-all ease-in duration-200"
              href="#Member"
            >
              Member
            </a>
          </div>
          <div>
            <a
              className="text-white underline decoration-transparent hover:decoration-inherit transition-all ease-in duration-200"
              href="#Publication"
            >
              Publication
            </a>
          </div>
          <div>
            <a
              className="text-white underline decoration-transparent hover:decoration-inherit transition-all ease-in duration-200"
              href="#Project"
            >
              Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
