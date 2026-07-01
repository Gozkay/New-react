import { useState, useEffect } from "react";
function SetWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (<>
        <p>Window Width: {width}</p>
        <p>Window Height: {height}</p>    </>)
}
export default SetWidth;