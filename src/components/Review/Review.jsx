//======================<FIFTH PAGE>===================================
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Review() {

    // useSelector to select and return the feedbackReducer from the store
    const feedbackReducer = useSelector(store => store.feedbackReducer);
    
    const history = useHistory();

    //====================<POST>==============================
        // Send the new feedback to the database
    function addFeedback(){
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackReducer
        })
        .then(response => {
            console.log('Added feedback:', response);
        }).catch(error => {
            console.log('The POST error in Review.jsx is:', error);
        });
    };


    //=========<CLICK HANDLER>==============================
    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/ThankYou');
        addFeedback(); // Call POST function
        console.log('Submit Feedback button clicked in Review');
    };

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