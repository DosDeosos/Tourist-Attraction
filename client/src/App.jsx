import "./App.css";
import Travellocation from "./components/travellocation";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [location, setlocation] = useState([]);
  const [searchbox, setsearchbox] = useState("");

  const clicktaghandler = (tag) => {
    setsearchbox(tag);
    document.getElementById("searchbox").value = tag;
  };

  let timeout = null;
  const updatesearchbox = () => {
    const value = document.getElementById("searchbox").value;
    console.log(value);
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      setsearchbox(value);
    }, 1000);
  };

  const getLocation = async () => {
    try {
      const result = await axios.get(
        "http://localhost:4001/trips?keywords=" + searchbox
      );
      console.log(result);
      setlocation(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, [searchbox]);

  return (
    <div className="App">
      <div className="text-center text-blue-700 text-[20px] mt-[20px]">
        เที่ยวไหนดี
      </div>
      <div className="mx-auto w-[80%] m-[16px]">
        <div className="font-thin text-[12px]">ค้นหาที่เที่ยว</div>

        {/* ช่อง Search ทำยังไงให้รอซักแปบนึงแล้วค่อยส่ง request ไป (debounce) */}

        <input
          onChange={(event) => setsearchbox(event.target.value)}
          value={searchbox}
          id="searchbox"
          className="text-center w-full border-b-2 outline-0 focus:border-b-blue-300 my-[10px] text-[14px]"
          placeholder="หาที่เที่ยวแล้วไปกัน"
        />
      </div>
      {location.map((data, index) => {
        return (
          <Travellocation
            key={index}
            traveldata={data}
            onclicktag={clicktaghandler}
          ></Travellocation>
        );
      })}
    </div>
  );
}

export default App;
