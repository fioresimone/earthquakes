import { useData } from "../store";
import SmallCard from "./SmallCard";

export default function MainInfo() {
  const data = useData((state) => state.data);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-8 gap-4">
      <div className="col-span-2 xl:col-span-2">
        <div className="p-4 bg-light-black border-gradient hover:bg-zinc-900 h-22">
          <div>
            <p className="text-slate-400">Real time earthquakes</p>
            <p className="text-slate-400 text-sm mt-2">
              Last day events. Data from{" "}
              <a href="https://www.usgs.gov/">USGS</a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 xl:col-span-2">
        <SmallCard
          label={"Last update"}
          value={new Intl.DateTimeFormat("default", options).format(
            new Date(data.metadata.generated),
          )}
        />
      </div>
      <div className="col-span-2 xl:col-span-2">
        <SmallCard
          label={"Last event"}
          value={new Intl.DateTimeFormat("default", options).format(
            new Date(data.features[0].properties.time),
          )}
        />
      </div>

      <div className="col-span-2 xl:col-span-2">
        <SmallCard label={"Total Events"} value={data.metadata.count} />
      </div>
    </div>
  );
}
