import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Movies = () => {
    const [data, setData] = useState(null);
    let count = 0;
    let arr = [];
    let flag;
    const getData = () => {
        axios.get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
            .then((response) => {
                // debugger

                function myFunction() {
                    setTimeout(function () {
                        console.log("12345", response)
                        const myData = response.data
                        console.log(myData.entries);
                        setData(myData.entries.sort((a, b) => a.title.localeCompare(b.title)));
                    }, 1000);
                }
                myFunction();
            })
            .catch((err) => {
                console.log("error", err);
                flag = true;
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {
                data == null ? <h2>Data is Loading....</h2> : data.map((fetchdata, index) => {
                    return (
                        (count < 21&&fetchdata.programType=='movie'&&fetchdata.releaseYear >= 2010) ? <div style={{ height: 180, width: 120, margin: '8px', paddingTop: 10, paddingBottom: 60 }}>{ <img src={fetchdata.images["Poster Art"].url}
                            style={{ height: 180, width: 120 }} /> }
                          <h4><span>{arr = fetchdata.title}{console.log(count = count + 1)}</span></h4> :
                            
                        </div> : null

                    )


                })
            }
        </div>
    )
}

export default Movies
