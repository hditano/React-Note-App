import React from 'react';

export default function RenderStorage() {

    const getData = JSON.parse(localStorage.getItem('1'))
    const [localData, setLocalData] = React.useState(JSON.parse(localStorage.getItem('1')))


    console.log(localData)


    return (
        <div>
            {}
        </div>
    )
}