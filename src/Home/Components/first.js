import { useState } from 'react';

const First = ({ setYear, setTitle, setSearch, submitData }) => {
  
  const [title1, setTitle1] = useState("");
  function titleChange(e) {
    setTitle1(e.target.value);
  }

  const [year1, setYear1] = useState("");
  function yearChange(e) {
    setYear1(e.target.value);
  }

  function resetAll(){
    setTitle1("");
    setYear1("");
    setSearch("");
  }

  function searchButton(){
    setYear(year1);
    setTitle(title1);
    setSearch("http://www.omdbapi.com/?t=" + title1 + "&y=" + year1);
    submitData.current = true
  }

  

  return (
    <div className="allFirst">
      <h1 className="byTitle">By Title</h1>
      <div className="firstDiv">

          <h2>Title:</h2>
        <input type="text" className="inputClass" value={title1} onChange={titleChange} />

          <h2>Year:</h2>
        <input className="inputClass" type="text" value={year1} onChange={yearChange} />

          <p>Plot:</p>
        <select name="plot" id="plot">
        <option value="short">short</option>
        <option value="full">full</option>
        </select>

          <p>Response:</p>
        <select name="response" id="response">
        <option value="XML">XML</option>
        <option value="JSON">JSON</option>
        </select>
        <button onClick={searchButton}>Search</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
};

export default First;
