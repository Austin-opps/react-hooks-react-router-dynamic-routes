import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function MovieShow() {
  const params = useParams();
  return (
    <div>
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}
