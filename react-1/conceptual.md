### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a Front End Framework using JavaScript.  It is most useful when you want to make reusable "components" (any part of a website that will be repeated multiple times)

- What is Babel?
  Babel is a JavaScript compiler to convert JS into backwards compatible code that can be run on older environments. 

- What is JSX?
  JSX is JavaScript XML.  It allows us to write HTML in React.  It converts HTML tags into React elements.

- How is a Component created in React?
  A component is a function (or class) that is typically put in its own JS file.  The output that is returned from the function is then rendered into the "root" div on the index.html file.  

- What are some difference between state and props?
  Props are for configuring your component. They are immutable. They can be strings or the

- What does "downward data flow" refer to in React?
  This refers to a common pattern in React that follows this flow:
   - A parent component defines a function
   - The function is passed as a prop to a child component
   - The child component invokes the prop
   - The parent function is called, usually setting new state
   - The parent component is re-rendered along with its children

- What is a controlled component?
  A component that is controlled by React state.  Mutable state is kept in the state of components, and only updated with the function returned to useState().

- What is an uncontrolled component?
  A component that React is not in control of the form state.  The form data is handled by the dom.  Examples of this are selecting a file input or integrating a React app with non React code.
  
- What is the purpose of the `key` prop when rendering a list of components?
  Keys help React identify which items have changed, are added, or removed.  They should always be unique and not change.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  It is a bad idea if the order of the array may change or items can be deleted.  It will cause performance problems or bugs.

- Describe useEffect.  What use cases is it used for in React components?
  A built in hook for "side efects". Fetching data, starting a timer, and manually changing the DOM are all side effects.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  A built in hook in React. It can be use dto get access to the DOM element. Mutating the ref does not trigger a re-render.

- When would you use a ref? When wouldn't you use one?
  Common applications of useRef are accessing an underlying DOM element and setting up or clearing timers. It should not be used to make changes in the DOM for any elements that React has control over (can use state for).

- What is a custom hook in React? When would you want to write one?
  A JS function that typically uses built in hooks. You can make hooks to abstract logic, handle repeated tasks, or generate your own JSX.  You would want to use a custom hook for things that are repeated over and over again, or to simplify a long/messy component.
