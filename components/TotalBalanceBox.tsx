'use client';

import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DonughtChart from "./DonughtChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return <section className="total-balance">
    <div className="total-balance-chart">
        <DonughtChart accounts={accounts}/>
    </div>
    
    <div className="flex flex-col gap-6">
        <h2 className="header-2">
            Bank Accounts: {totalBanks} 
        </h2>

        <div className="flex flex-col gap-2">
            <p className="total-balance-label">
                Total Current Balance
            </p>

            <div className="total-balance-amount flex-center gap-2">
                <AnimatedCounter 
                amount = {totalCurrentBalance}
                />
                {/* {formatAmount(totalCurrentBalance)} */}
            </div>
        </div>
    </div>
  </section>;
};

export default TotalBalanceBox;
