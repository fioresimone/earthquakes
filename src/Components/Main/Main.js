import MainInfo from "../MainInfo";
import Map from "../Map/Map";
import Focus from "../Focus/Focus";
import Table from "../Table/Table";
import Timeline from "../Timeline/Timeline";
import Magnitude from "../Magnitude/Magnitude";

export default function Main() {
  return (
    <>
      <div className="grid grid-cols-12 lg:grid-cols-12 gap-4 p-4 min-h-screen bg-main-black">
        <div className="col-span-12">
          <MainInfo />
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-6  h-40-vh bg-light-black border-gradient p-2 md:p-4 hover:bg-zinc-900">
          <p className="text-slate-400 mb-4">Timeline</p>
          <div className="h-full">
            <Timeline />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 2xl:col-span-3  h-40-vh bg-light-black border-gradient p-2 md:p-4 hover:bg-zinc-900">
          <p className="text-slate-400">Depth of focus</p>
          <Focus />
        </div>
        <div className="col-span-12 lg:col-span-3 2xl:col-span-3  h-40-vh bg-light-black border-gradient p-2 md:p-4 hover:bg-zinc-900">
          <p className="text-slate-400">Magnitude</p>
          <Magnitude />
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-6 h-40-vh bg-light-black border-gradient hover:bg-zinc-900">
          <Table />
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-6  h-40-vh bg-light-black border-gradient hover:bg-zinc-900 p-2">
          <Map />
        </div>
      </div>
    </>
  );
}
