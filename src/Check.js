import React, { useEffect, useState } from "react";

const Check = () => {
  const [content, setcontent] = useState({});
  const [loading, setloding] = useState(true);
  var API_KEY = "33414495-1f8e2ea8425398e91d3283ae7";
  var URL = `https://pixabay.com/api/?key=${API_KEY}`;

  useEffect(() => {
    const check = async () => {
      setloding(true);
      var data = await fetch(URL);
      data = await data.json();
      console.log(data);
      const limit = data.hits.slice(0, 5);
      setcontent(limit);
      console.log(limit);
      setloding(false);
    };
    check();
  }, []);

  return (
    <div>
      <h1>Images</h1>
      {!loading && (
        <div>
          {content.map((ele) => {
            return <img src={ele.previewURL} width="40px" height="40px" />;
          })}
        </div>
      )}
    </div>
  );
};

export default Check;
