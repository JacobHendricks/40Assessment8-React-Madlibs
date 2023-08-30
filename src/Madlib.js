import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import Story from "./Story";
import { v4 as uuid } from 'uuid';

const Madlib = () => {
  const INITIAL_STATE = [
    { id: 1,
      story: "Once upon a time in a long-ago {place}, there lived a large {adjective} {noun}. It loved to {verb} {plural_noun}.",
      words: {
        "place": "forest",
        "noun": "dog",
        "verb": "eat",
        "adjective": "red",
        "plural_noun": "donkeys"
      }
    }
  ]

  const [prompts, setPrompts] = useState(INITIAL_STATE);

  const [showStory, setShowStory] = useState(true)

  const submitWords = (formData) => {
    setPrompts(prompts => [...prompts], prompts[0].words = formData, prompts[0].id = uuid());
    setShowStory(false);
  }

  return (
    <div>
      <h1>Madlib!</h1>
        { showStory 
          ? <MadlibForm submitWords={submitWords}/>
          : <div>
            <Story key={prompts[0].id} id={prompts[0].id} story={prompts[0].story} words={prompts[0].words}/> 
            <button onClick={() => setShowStory(showStory => !showStory)}>Restart</button>
          </div>}
    </div>
  )
}

export default Madlib;