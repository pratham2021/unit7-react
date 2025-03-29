import "./Class.css";
import React, { useState, useEffect } from "react";

function Class(props) {

    const [classInfo, setClassInfo] = useState({});
    const url = "https://anteaterapi.com/v2/rest/courses/";
    const apiKey = "mEaX5T-3H1y6M7pT9UpQI9Se1dVpihZ2Oi4reZ9xT1I.sk.m5ms9v4v888u4mguoad65ud6";
    const graphQL = "https://anteaterapi.com/v2/graphql/";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url + props.name);
            const data = await response.json();
            setClassInfo(data);
            console.log(classInfo);
        }

        fetchData();
    }, [props.name]);
    
    let info;

    if (classInfo.id) {
        info = <div className="information">
            <p id="title">{classInfo.title}</p>
            <p id="department">{classInfo.department}</p>
            <p id="description">{classInfo.description}</p>
        </div>
    } else if (classInfo.error) {
        info = <p>Class Not Found</p>
    }
    else {
        info = <p>Loading...</p>
    }


    return (
        <div className="class">
            {props.name}
            <div>
                {info}
            </div>
        </div>
    )
}

export default Class;