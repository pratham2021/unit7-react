import "./Class.css";
import React, { useState, useEffect } from "react";

function Class(props) {

    const [classInfo, setClassInfo] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(process.env.URL + props.name);
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