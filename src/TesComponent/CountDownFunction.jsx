import Button from "./Button";

export const incrementCount = (count, setCount) => {
    setCount(count + 1);
  };
  
  export const decrementCount = (count, setCount) => {
    setCount(count - 1);
  };

export const CountdownDisplay = ({count}) => {
    return(
        <div>
            <h2> Countdown = {count} </h2>
        </div>
    )
}