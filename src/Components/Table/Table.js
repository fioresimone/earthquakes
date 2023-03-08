import { useData, usePosition } from "../../store";

export default function Table() {
  const data = useData((state) => state.data);

  const setPosition = usePosition((state) => state.setPosition);

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return (
    <div className="relative overflow-x-auto h-full">
      <table className="w-full text-xs text-left text-gray-500 table-auto">
        <thead className="text-xs text-gray-400 uppercase bg-zinc-900 sticky -top-1">
          <tr>
            <th scope="col" className="px-2 py-3">
              Time
            </th>
            <th scope="col" className="px-2 py-3">
              Mag
            </th>
            <th scope="col" className="px-2 py-3">
              Depth
            </th>
            <th scope="col" className="px-2 py-3">
              Location
            </th>
          </tr>
        </thead>
        <tbody>
          {data.features.map((el, i) => {
            return (
              <tr
                key={el.id}
                className={
                  "cursor-pointer border-b border-gray-700 " +
                  (i % 2 === 0 ? "bg-zinc-800" : "bg-zinc-900")
                }
                onClick={() =>
                  setPosition(el.geometry.coordinates.slice(0, 2).reverse())
                }
              >
                <td className="px-2 py-4 text-xs">
                  {new Intl.DateTimeFormat("default", options).format(
                    new Date(el.properties.time),
                  )}
                </td>
                <td className="px-2 py-4 text-xs">
                  {el.properties.mag.toFixed(2)}
                </td>

                <td className="px-2 py-4 text-xs">
                  {el.geometry.coordinates[2].toFixed(2)}
                </td>
                <td className="px-2 py-4 text-xs">{el.properties.place}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
