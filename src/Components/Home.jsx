import React from "react";

const Home = ({ display }) => {
  return (
    <>
      <section className={`Main ${display}`}>
        <div className="info">
          <h1>Next generation digital banking!!!!</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button type="button">Request invite</button>
        </div>
        <div className="images"></div>
      </section>
    </>
  );
};

export default Home;
