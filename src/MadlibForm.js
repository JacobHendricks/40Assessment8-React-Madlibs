import React, { useState } from "react";
// import uuid from "uuid/v4";

const MadlibForm = ({ submitWords }) => {
  const INITIAL_STATE = {
    place: "",
    noun: "",
    verb: "",
    adjective: "",
    plural_noun: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData, [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitWords({ ...formData });
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="place">Place</label>
      <input id="place" type="text" name="place" value={formData.place} onChange={handleChange}
      />
      <label htmlFor="noun">Noun</label>
      <input id="noun" type="text" name="noun" value={formData.noun} onChange={handleChange}
      />
      <label htmlFor="verb">Verb</label>
      <input id="verb" type="text" name="verb" value={formData.verb} onChange={handleChange}
      />
      <label htmlFor="adjective">Adjective</label>
      <input id="adjective" type="text" name="adjective" value={formData.adjective} onChange={handleChange}
      />
      <label htmlFor="plural_noun">Plural Noun</label>
      <input id="plural_noun" type="text" name="plural_noun" value={formData.plural_noun} onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )

}

export default MadlibForm;