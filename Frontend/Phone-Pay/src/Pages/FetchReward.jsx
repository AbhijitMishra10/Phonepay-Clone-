import React, { useEffect, useState } from "react";
import { fetchRewards } from "../services/api";

function Rewards() {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const getRewards = async () => {
      const { data } = await fetchRewards();
      setRewards(data);
    };
    getRewards();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-phonepe-purple mb-4">Your Rewards</h2>
      {rewards.length === 0 ? (
        <p>No rewards earned yet</p>
      ) : (
        <ul className="space-y-3">
          {rewards.map((r) => (
            <li key={r._id} className="bg-white shadow p-4 rounded flex justify-between">
              <span>
                {r.type === "merchant"
                  ? `Cashback on Merchant Payment`
                  : `Cashback on Bill Payment`}
              </span>
              <span className="font-bold text-green-600">+₹{r.cashback}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Rewards;
