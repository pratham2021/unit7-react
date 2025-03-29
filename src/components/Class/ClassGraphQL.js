import "./Class.css";
import React, { useState, useEffect } from "react";

function ClassGraphQL(props) {

    const [classInfo, setClassInfo] = useState({});
    const url = "https://anteaterapi.com/v2/graphql/";
    // const apiKey = "mEaX5T-3H1y6M7pT9UpQI9Se1dVpihZ2Oi4reZ9xT1I.sk.m5ms9v4v888u4mguoad65ud6";

    useEffect(() => {
        const fetchData = async () => {
            const query = `
                query {
                    course(id:"${props.name}") {
                        title
                        department
                        description
                    }
                }
            `

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({query}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
            setClassInfo(data.data.course);
        }
        fetchData();
    }, [props.name]);
    
    let info;

    if (classInfo) {
        info = <div className="information">
            <p id="title">{classInfo.title}</p>
            <p id="department">{classInfo.department}</p>
            <p id="description">{classInfo.description}</p>
        </div>
    } else if (classInfo === null) {
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

export default ClassGraphQL;