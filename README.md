# React-Hooks
React Hooks

1. #useVisible





## Usage
 #useVisible
 ```js
const { ref, isVisible, setIsVisible } = useVisible(false);

//return

<button  
onClick={(e) => setIsVisible(!isVisible)}>
Click me!
</button>

{isVisible && 
<div ref={ref}/> 
}
```