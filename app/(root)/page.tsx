import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const logginIn = { firstName: "Bhuvnesh" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={logginIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1200.45}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;

// import TailwindTest from '../../components/TailwindTest';

// function App() {
//   return <TailwindTest />;
// }

// export default App;
