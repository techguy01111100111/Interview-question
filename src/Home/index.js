import First from "./Components/first";
import Second from "./Components/second";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../global/getAPI";

async function fetchData(setSearch){
  const res = await fetch(API_GET_DATA);
  const { title } = await res.json();
  setSearch(title);
}

async function fetchSetData(search) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ search }),
  });
}

const Index = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [search, setSearch] = useState("");

  const submitData = useRef(false);

  useEffect(() => {
    if(!submitData){
      return;
    }
    fetchSetData(search).then((search) => (submitData.current = false));
  }, [title, year])

  useEffect(() =>{
    fetchData(setSearch);
  }, [title, year])

  return (
    <div>
      <First  setTitle={setTitle} setYear={setYear} submitData={submitData} setSearch={setSearch} />
      <Second search={search} submitData={submitData} title={title} year={year} />
    </div>
  );
};

export default Index;
