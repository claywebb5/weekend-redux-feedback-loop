//======================<FIRST PAGE>===================================
import Header from '../Header/Header';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';


function Feeling() {

    // State Variable to hold feeling ranking
    const [feelingRank, setFeelingRank] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    //=========<CLICK HANDLER>==============================
    const handleSubmit = (event) => {
        if (feelingRank >= 1 && feelingRank <= 5) {
            dispatch({
                type: 'FEELING',
                payload: feelingRank 
            })
        history.push('/Understanding');
        } else {
            alert('Please fill in required fields.')
        }        
    }

    return(
        <>
            <div>
                <Header />
                <h2>How are you feeling today?</h2>
            </div>
            <div>
                <h3>Please rank 1-5</h3>
                <h4>1 being "Not good at all." 5 being "Best feeling ever!"</h4>
                <input
                    required
                    type='text'
                    placeholder='* Required'
                    value={feelingRank}
                    onChange={(event) => setFeelingRank(event.target.value)}
                />
                <button onClick={handleSubmit}>Next</button>
            </div>
            
        </>
    )
}

export default Feeling;