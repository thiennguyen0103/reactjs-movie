import React, { useState, useEffect} from 'react';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useParams } from 'react-router-dom';

const CastList = props => {
    const { category } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const respond = await tmdbApi.credits(category, props.id);
            setCasts(respond.cast.slice(0, 5));
        }
        getCredits();
    }, [category, props.id]);

    return (
        <div className="casts">
            {
                casts.map((cast, index) => (
                    <div className="casts__item" key={index}>
                        <div 
                            className="casts__item__img"
                            style={{
                                backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})`
                            }}
                        >
                        </div>
                        <div className="casts__item__name">
                            {cast.name}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CastList
