import { Link } from "react-router-dom";

export default function CardCarruselMovie({ title, img, description, id }) {
  let shortDesc;
  if (description.length > 120) {
    shortDesc = description.slice(0, 120);
  }

  return (
    <div class="movie" id="movie">
      <Link to={`/movie/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w185/${img} `} />
      </Link>
    </div>
  );
}