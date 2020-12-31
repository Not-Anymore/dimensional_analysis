import React from "react";

const Home = () => {
  return (
    <div>
      <h2>CSS Template using Flexbox</h2>
      <p>
        In this example, we have created a header, three unequal columns and a
        footer. On smaller screens, the columns will stack on top of each other.
        Resize the browser window to see the responsive effect.
      </p>
      <p>
        <strong>Note:</strong> Flexbox is not supported in Internet Explorer 10
        and earlier versions.
      </p>

      <div className="header">
        <h2>Header</h2>
      </div>

      <div className="row">
        <div className="column side">Column</div>
        <div className="column middle">Column</div>
      </div>

      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  );
};

export default Home;
