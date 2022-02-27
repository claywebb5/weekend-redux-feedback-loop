//======================<THIRD PAGE>===================================
import Header from '../Header/Header';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';


function Support() {

    const [supportRank, setSupportRank] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    //=========<CLICK HANDLER>==============================
    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/Comments');
        console.log('Next button clicked in Support');
        dispatch({
            type: 'SUPPORT',
            payload: supportRank
        })
    }

    return(
        <>
            <div>
                <Header />
                <h2>How well are you being supported?</h2>
            </div>
            <div>
                <h3>Please rank 1-5</h3>
                <h4>1 being "Not supported." 5 being "Unified team!"</h4>
                <input
                    required
                    type='text'
                    placeholder='Rank 1-5'
                    value={supportRank}
                    onChange={(event) => setSupportRank(event.target.value)}
                />
                <button onClick={handleSubmit}>Next</button>
            </div>
            
        </>
    )
}

export default Support;