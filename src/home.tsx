import GlacierImage from "./assets/glacier.jpg";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col md:flex-row-reverse justify-center gap-5">
          <div className="w-full md:w-[50%] flex flex-row justify-center p-5">
            <img className="w-full" src={GlacierImage}></img>
          </div>
          <div className="w-full md:w-[50%] flex flex-col justify-center gap-5 p-5">
            <p className="text-2xl md:text-4xl font-bold leading-8">
              Satellite Remote Sensing and Cryospheric Physics Lab (SRSCPLab)
            </p>
            <div className="flex flex-col gap-3">
              <p>
                The Satellite Remote Sensing and Cryospheric Physics Lab,
                founded by _______, studies climate change impacts on the
                cryosphere using satellite imagery, remote sensing, and advanced
                data analysis techniques.
              </p>
              <p>
                We are interest in Satellite Remote Sensing, Cryospheric
                Physics, Geodesy, Planetary Surface Processes, and Open science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
