import React from "react";
import CounterContext from "./context";

const counterState = () => {
  const [count, setCount] = React.useState(0);

  const update = ({children}) => {
    setCount(count + 1)
  }

  return (
    <CounterContext value = {{count, update}}>
      {children}
    </CounterContext>
  )

}

export default counterState;