import {useEffect, useState} from "react";
import {getMovieList} from "../api/MovieAPI";
import MovieItem from "../components/MovieItem";

function MovieList(){

    const [movieList, setMovieList] = useState();

    useEffect(() => {
       // getMovieList(); //결과처리 화긴용

      // setMovieList(getMovieList()) ;//이렇게 쓰면 안됨 then으로 처리해야됨
        getMovieList().then(data => setMovieList(data)); //이게 맞는 코드
    }, []);
    console.log(movieList);//data가 잘 담겼는지 화긴용

    return(
        <div className="content-row">
            {movieList && movieList.map(movie => <MovieItem key={movie.movieCd} movie={movie}/>)}

        </div>
    );
}

export default MovieList;