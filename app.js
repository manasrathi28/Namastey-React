/*
<div=  id=parent>
    <div id=child>
        <h1>
        </h1>
    </div>
</div>

how do we make nested structure in react??

root.render(always a javascript object is paased as an argument)==>convert it into the html ehich the browser can understand 
*/

const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"This is the h1 tag "),React.createElement('h2',{},"This is the H2 tag!!")]))


const heading=React.createElement("h1",{id: "Heading", xyz:"abc"},"Hello World from React!");
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);