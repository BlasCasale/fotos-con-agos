import { useState } from "react";
import PicturesListContainer from './components/PicturesListContainer/PicturesListContainer';

const App = () => {
    const [input, setInput] = useState("");
    const [answer, setAnswer] = useState(false);
    const gule = "gule";

    const changeState = () => setAnswer(!answer);

    const returnedHTML = () => < PicturesListContainer />;

    const returnedInput = () => {
        return (
            <section className="input-container">
                <h1>¿A qué comida somos adictos?</h1>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            </section>
        );
    };

    if (!answer) setTimeout(() => {
        if (input.toLowerCase() === gule) changeState();
    }, 1000);

    return (
        <>
            {
                !answer && returnedInput()
            }

            {
                answer && returnedHTML()
            }
        </>
    );
};

export default App;