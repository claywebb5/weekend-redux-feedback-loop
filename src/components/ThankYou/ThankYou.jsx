//======================<SIXTH PAGE>===================================
import {useHistory} from 'react-router-dom';


function ThankYou() {

    const history = useHistory();

     //=========<CLICK HANDLER>==============================
     const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/');
        console.log('New Feedback button clicked in ThankYou');
    }

    return(
        <>
            <div>
                <header>
                    <h1>Feedback Submitted!</h1>
                </header>
            </div>
            <div>
                <h3>Thank you!</h3>
                <button onClick={handleSubmit}>Leave New Feedback</button>
            </div>
        </>
    )
}

export default ThankYou;