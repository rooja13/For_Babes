import './letter.css'

function LoveLetter(){
    const CLIENT_ID='d6aa96b85d88460cb8bdd547cebce88c';
    const REDIRECT_URI ='http://localhost:3000';

    return(
        <>
        <div id='app'>
            <div id='heart-container'>
                <div id='heart-pattern'>
                    <div id='heart-overlay'>
                    </div>
                </div>
            </div>
            <div id='window-wrapper'>
                <div id='window'>
                    <div id='window-background'>
                        <div id='window-contents'>
                            <div id='window-message'>
                                <h1 class="sixty-four-font">Hi Baby &hearts;</h1>
                                <p class="sixty-four-font">Welcome to your web page!
                                     I wanted to make this for you to show how much I love you. 
                                     I hope ypu like it and be sure to press the buttons :&#41;
                                </p>
                            </div>
                            <div id='window-actions'>
                                <button type='button' class='window-action'>Change the Music</button>
                                <button type='button' class='window-action'>Open a Letter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default LoveLetter;