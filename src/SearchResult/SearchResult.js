import './SearchResult.css'
import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import { Image } from 'react-img-placeholder';
import { Link, useLocation } from 'react-router-dom'


function SearchResult() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])      
    const history = useHistory()
    const gettingUserDetails = useSelector((state) => state.ReduxCommands.LoginDetails);
    const SearchWord = JSON.parse(localStorage.getItem("SearchWord"))
    const SearchData = JSON.parse(localStorage.getItem("Dash-board"))
    const SearchLine = JSON.parse(localStorage.getItem("Dash-line"))

    const location = useLocation();
    // const SearchData = location.SearchData

    return (
        <div style={{ height: "100vh", overflow: "hidden" }}>
            <div className='SearchResult pt-4 mb-5'>
                <h5 className='text-light px-5'>Showing all results for <span style={{ textTransform: 'capitalize' }}>{SearchWord}</span></h5>
                <div className="container-fluid px-5">
                    <div className="row search_data_hover_effect_on_hover px-5">
                        {
                            SearchData.map((SearchData, i) =>
                                <>
                                    {SearchData.data !== "No data found" ?
                                        <div className="col-xxl-2 col-lg-3 col-md-4 col-6 carousel_item_1 pt-4">
                                            <Link to={`/player/${SearchData.movie_id}`}>
                                                <div className="search_data_video_thumbnail_hover_effect search_data_video_thumbnail">
                                                    <Image className="d-block carousel_item img-fluid" src={SearchData.movie_cover_image} alt="#" width="100%" height="275px" style={{ minHeight: "100%", maxHeight: "275px", width: "100%" }} placeholderColor="#0C111B" />
                                                    <div className='w-100 px-2 search_data_video_description_hover_effect'>
                                                        <h6>{SearchData.movie_title}</h6>
                                                        <p style={{ fontSize: "10px", marginTop: "-5px" }}>{SearchData.movie_released} * {SearchData.movie_description}</p>
                                                        <h6 style={{ color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</h6><br />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        :
                                        <div className='container-md text-center mt-5 px-5' style={{ height: "100vh", overflow: 'hidden' }}>
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <h3>No data found</h3>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}
export default SearchResult;
