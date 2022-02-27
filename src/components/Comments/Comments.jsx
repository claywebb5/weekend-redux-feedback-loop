//======================<FOURTH PAGE>===================================
import Header from '../Header/Header';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Comments() {

    const [comments, setComments] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    //=========<CLICK HANDLER>==============================
    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/Review');
        console.log('Next button clicked in Comments');
        dispatch({
            type: 'COMMENTS',
            payload: comments
        })
    }

    return(
        <>
            <div>
                <Header />
                <h2>Any comments you want to leave?</h2>
            </div>
            <div>
                <label>Comments</label>
                <input
                    type='text'
                    placeholder='Optional'
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
                <button onClick={handleSubmit}>Next</button>
            </div>
            
        </>
    )
}

export default Comments;