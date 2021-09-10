import { useState } from 'react';

const Second= ({ search }) => {

  return (
    <div className="allFirst">
      <p>Request: </p>
      <a href="http://www.omdbapi.com/"
onclick="location.href=this.href+'?t='+link+'?y='+linkYear;return false;">{search}</a>
    </div>
  );
};

export default Second;
