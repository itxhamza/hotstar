import axios from 'axios';
import './SingleCategoryVideo.css'
import { useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import { Image } from 'react-img-placeholder';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import LoadingData from '../LoadingData/LoadingData';
import InfiniteScroll from 'react-infinite-scroll-component';


function SingleCategoryVideo(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    const history = useHistory()
    const { category_id } = useParams();
    const gettingUserDetails = useSelector((state) => state.ReduxCommands.LoginDetails);

    let [AllItemOfSingleCategory, setAllItemOfSingleCategory] = useState([]);
    let [isNext, isNextFunc] = useState(false);
    let [dataLimit, setdataLimit] = useState(18);
    let [loading, setloading] = useState(false);

    const fetchData = () => {
        axios
            .get(
                `${props.BaseUrl}/single_category_videos/${category_id}/limit=${dataLimit}`
            )
            .then((response) => {
                setAllItemOfSingleCategory([...AllItemOfSingleCategory, ...response.data]);
                isNextFunc(true);
                setloading(true)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    function fetchMoreData() {
        setdataLimit(dataLimit + 8);
        fetchData();
    }

    {
        useEffect(() => {
            if (gettingUserDetails.length === 0) {
                history.push("/login")
            } else {
                fetchData()
            }
        }, [])
    }


    return (
        <>
            {loading ?
                <>
                    <div className='SingleCategoryVideo pt-4 mb-5'>
                        <h5 className='text-light px-3 px-md-5'>Popular Shows</h5>
                        <div className="container-fluid px-sm-5">
                            <InfiniteScroll style={{ overflow: "hidden" }}
                                dataLength={AllItemOfSingleCategory.length}
                                next={fetchMoreData}
                                hasMore={isNext}
                                loader={
                                    <div className="text-center pt-5" style={{ overflow: "hidden" }}>
                                        <div className="spinner-border text-white" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                }
                            >
                                <div className="row hover_effect_on_hover pt-md-3 px-md-5">
                                    {
                                        AllItemOfSingleCategory.map((AllItemOfSingleCategory, i) =>
                                            <div className="col-6 col-md-4 col-lg-3 col-xxl-2">
                                                {/* <Link to={`/player/5`}> */}
                                                <Link to={`/player/${AllItemOfSingleCategory.movie_id}`}>
                                                    <div className="Similar_category_video_thumbnail_hover_effect similar_category_video_thumbnail">
                                                        {/* <img src={AllItemOfSingleCategory.movie_cover_image} alt="#" style={{ height: "275px", width: "100%" }} /> */}
                                                        <Image className="d-block carousel_item img-fluid" src={AllItemOfSingleCategory.movie_cover_image} alt="#" width="100%" height="275px" style={{ minHeight: "100%", maxHeight: "275px", width: "100%", marginTop: "15px", borderRadius: "10px" }} placeholderColor="#0C111B" />
                                                        <div className='w-100 px-2 Similar_category_video_description_hover_effect'>
                                                            <h6>{AllItemOfSingleCategory.movie_title}</h6>
                                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>{AllItemOfSingleCategory.movie_released} * {AllItemOfSingleCategory.movie_description}</p>
                                                            <h6 style={{ color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</h6><br />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }
                                </div>
                            </InfiniteScroll>
                        </div>
                    </div>
                </>
                :
                <>
                    <div style={{ background: "#192133" }} className="SingleCategoryVideo px-5 pt-5">
                        <LoadingData />
                        <LoadingData />
                        <LoadingData />
                    </div>
                </>
            }
        </>
    );
}
export default SingleCategoryVideo;


