//======================<FIFTH PAGE>===================================
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Review() {

    // useSelector to select and return the feedbackReducer from the store
    const feedbackReducer = useSelector(store => store.feedbackReducer);
    
    const history = useHistory();

     //=========<CLICK HANDLER>==============================
     const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/ThankYou');
        console.log('Submit Feedback button clicked in Review');
    }

    return(
        <>
            <div>
                <header>
                    <h1>Review Your Feedback</h1>
                </header>
            </div>
            <div>
                {/* <TARGET THE feedbackReducer OBJECT AND APPEND THE PROPERTIES>========*/}
                <p>Feelings: {feedbackReducer.feeling}</p>
                <p>Understanding: {feedbackReducer.understanding}</p>
                <p>Support: {feedbackReducer.support}</p>
                <p>Comments: {feedbackReducer.comments}</p>
                <button onClick={handleSubmit}>Submit Feedback</button>
            </div>
        </>
    )
}

export default Review;