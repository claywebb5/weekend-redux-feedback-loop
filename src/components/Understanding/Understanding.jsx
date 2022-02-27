//======================<SECOND PAGE>===================================
import Header from '../Header/Header';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';


function Understanding() {

    const [understandingRank, setUnderstandingRank] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    //=========<CLICK HANDLER>==============================
    const handleSubmit = (event) => {
        if (understandingRank >= 1 && understandingRank <= 5) {
            dispatch({
                type: 'UNDERSTANDING',
                payload: understandingRank 
            })
            history.push('/Support');
        } else {
            alert('Please fill in required fields.')
        }
    }


    return(
        <>
            <div>
                <Header />
                <h2>How well are you understanding the material?</h2>
            </div>
            <div>
                <h3>Please rank 1-5</h3>
                <h4>1 being "Understood nothing." 5 being "Mastered the material!"</h4>
                <input
                        required
                        type='text'
                        placeholder='* Required'
                        value={understandingRank}
                        onChange={(event) => setUnderstandingRank(event.target.value)}
                    />
                    <button onClick={handleSubmit}>Next</button>
            </div>
            
        </>
    )
}

export default Understanding;