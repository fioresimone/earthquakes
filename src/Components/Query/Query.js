import { useQuery } from "react-query";
import { useData } from "../../store";
import Loading from "../Loading/Loading";

export default function Query() {
  const updateData = useData((state) => state.setData);

  const { status } = useQuery(
    "query",
    async () => {
      const res = await fetch(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",
      ).then((r) => r.json());

      updateData(res);

      return res;
    },
    {
      refetchInterval: 1000 * 60,
    },
  );

  if (status === "loading") return <Loading />;
}
