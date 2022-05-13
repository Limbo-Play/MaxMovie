import { useMemo } from "react";
import "./styles.scss";

export default function MovieLabel({ type, imdb }) {
  const labelData = useMemo(() => {
    switch (type) {
      case "movie":
        return {
          label: "Movie",
          color: "#0BA7FF",
        };
      case "tv":
        return {
          label: "TV",
          color: "#51E97C",
        };
      case "age":
        return {
          label: "16+",
          color: "#363A47",
        };
      case "imdb":
        return {
          label: "IMDb " + imdb,
          color: "#FFC90B",
        };
      default:
        return {};
    }
  }, [type, imdb]);

  return (
    <div className="labelMovie" style={{ backgroundColor: labelData.color }}>
      {labelData ? `${labelData.label}`.trim() : ""}
    </div>
  );
}
