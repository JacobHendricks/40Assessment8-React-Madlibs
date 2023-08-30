const Story = ({ id, story, words }) => {
  // function generate () {
  //   for (let {key, val} in prompts) {

  //   }
  // }
  return (
    <div>
      {/* {id}
      {story}
      {words.place} */}
      <p>
        Once upon a time in a long-ago {words.place}, there lived a large {words.adjective} {words.noun}. It loved to {words.verb} {words.plural_noun}.
      </p>
    </div>

  )
}

export default Story;