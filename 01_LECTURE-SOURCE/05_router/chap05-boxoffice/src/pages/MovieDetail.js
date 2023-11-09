import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieDetail} from "../api/MovieAPI";

function MovieDetail() {

    const {movieCd} = useParams();
    // console.log(movieCd); //화긴
    const [movie, setMovie] = useState();

    useEffect(() => {
        getMovieDetail(movieCd).then(data => setMovie(data));
    }, []);

    console.log(movieCd);
    console.log(movie); //객체 잘 반환 되는지

    return (
        <div className="content-col">
            {movie &&
                <>
                    <h1>{movie.movieNm}({movie.movieNmEn})</h1>
                    <div>러닝 타임 : {movie.showTm}분</div>
                    <div>
                        국가 : {movie.nations.map(nation => <span>{nation.nationNm}</span>)}
                    </div>
                    <div>출연진</div>
                    <div>
                        {movie.actors.map(actor => {
                            return (
                                <div>
                                    <span className='actor'>{actor.peopleNm}</span>
                                    <span>{actor.cast && `-${actor.cast}역`}</span> {/*캐스터가 있을때만 무슨역인지 보이라는 의미*/}
                                </div>
                            )
                        })}
                    </div>
                    <Link to="/movie">목록으로</Link>
                </>
            }
        </div>
    );
}


export default MovieDetail;