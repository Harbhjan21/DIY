import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TranslateFont } from "../../../../../../../../redux/actions/pageActions";

const TranslateText = () => {
  const [item, setitem] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    console.log("in translation text");
    const load = async () => {
      setloading(true);
      var data = await fetch("http://localhost:3030/code");
      data = await data.json();
      if (!data.error) {
        setloading(false);
        setitem(data.code);
      } else {
        console.log(data.error);
      }
    };
    load();
  }, []);
  const dispatch = useDispatch();
  const handle = (e) => {
    dispatch(TranslateFont({ code: e.target.value }));
  };
  return (
    !loading && (
      <div style={{ marginRight: "10px" }}>
        <select id="language" onChange={handle}>
          {item.map((ele, index) => {
            if (!ele.lang.includes(";"))
              return (
                <option key={index} value={ele.lang}>
                  {ele.lang}
                </option>
              );
          })}
        </select>
      </div>
    )
  );
};

export default TranslateText;
