import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState({});
  const x = useParams();
  console.log('params.id:', x.id);
  async function getMovie() {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${x.id}`)
    ).json();
    console.log('json:', json);
    setMovie(json.data.movie);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <h1>Detail</h1>
      <div>
        <ul>
          <li><strong>background_image</strong>: {movie.background_image}</li>
          <li><strong>background_image_original</strong>: {movie.background_image_original}</li>
          <li><strong>date_uploaded</strong>: {movie.date_uploaded}</li>
          <li><strong>date_uploaded_unix</strong>: {movie.date_uploaded_unix}</li>
          <li><strong>description_full</strong>: {movie.description_full}</li>
          <li><strong>description_intro</strong>: {movie.description_intro}</li>
          <li><strong>id</strong>: {movie.id}</li>
          <li><strong>imdb_code</strong>: {movie.imdb_code}</li>
          <li><strong>language</strong>: {movie.language}</li>
          <li><strong>large_cover_image</strong>: {movie.large_cover_image}</li>
          <li><strong>like_count</strong>: {movie.like_count}</li>
          <li><strong>medium_cover_image</strong>: {movie.medium_cover_image}</li>
          <li><strong>mpa_rating</strong>: {movie.mpa_rating}</li>
          <li><strong>rating</strong>: {movie.rating}</li>
          <li><strong>runtime</strong>: {movie.runtime}</li>
          <li><strong>slug</strong>: {movie.slug}</li>
          <li><strong>small_cover_image</strong>: {movie.small_cover_image}</li>
          <li><strong>title</strong>: {movie.title}</li>
          <li><strong>title_english</strong>: {movie.title_english}</li>
          <li><strong>title_long</strong>: {movie.title_long}</li>
          <li><strong>url</strong>: {movie.url}</li>
          <li><strong>year</strong>: {movie.year}</li>
          <li><strong>yt_trailer_code</strong>: {movie.yt_trailer_code}</li>
        </ul>
      </div>
    </>
  );
}
export default Detail;