import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";


export default () => {
    let { pathname } = useLocation();
    let navigate = useNavigate();
    let { id } = useParams();

    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isMovie, setIsMovie] = useState(pathname.includes("/movie/"));
    
    useEffect(async () => {
        const parsedId = parseInt(id);
        setIsMovie(pathname.includes("/movie/"));
        if(isNaN(parsedId)) {
            navigate("/");
        }
        let res = null;
        try {
            if(isMovie) {
                ({ data: res }  = await moviesApi.movieDetail(parsedId));
            } else {
                ({ data: res } = await tvApi.showDetail(parsedId));
            }
        } catch (error) {
            setError("Can't find anything.")
        } finally {
            setResult(res);
            setLoading(false);
        }
    }, [])

    return <DetailPresenter 
        result={result}
        error={error}
        loading={loading}
    />
}