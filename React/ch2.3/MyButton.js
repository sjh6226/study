function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        "button",
        { onClick: () => setIsClicked(!isClicked), },
        isClicked ? "클릭됨" : "클릭하세요"
    );
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton));