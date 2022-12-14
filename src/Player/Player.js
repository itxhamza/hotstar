import './Player.css'
import React from 'react'
import { Link } from 'react-router-dom'


function Player(props) {
    return (
        <>
            {
                (props.PlayerData).map((PlayerData, i) =>
                    <>
                    <div className='Player text-light pt-5 zoom_on_hover_effect_for_player'>
                        <h4 className='text-white'>Watch Full Video</h4>
                        <div style={{ height: "275px", width: "206px" }}>
                            <Link to={`/player/${PlayerData.movie_id}`}>
                                <div className="player_video_thumbnail">
                                    <img className="d-block" src={PlayerData.movie_cover_image} alt="#" style={{ height: "275px", width: "206px", borderRadius: "10px" }} />
                                    <div className='w-100 px-2 player_video_description'>
                                        <h6>{PlayerData.movie_title}</h6>
                                        <p style={{ fontSize: "10px", marginTop: "-5px" }}>{PlayerData.movie_released} * {PlayerData.movie_description}</p>
                                        <h6 style={{ color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</h6><br />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div> <br />
                    </>
                )
            }
        </>
    );
}
export default Player;
