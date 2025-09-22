import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <div className="bg-phonepe-purple text-white p-4 flex justify-around font-semibold shadow-md">
      <Link to="/home" className="hover:text-gray-200">Home</Link>
      <Link to="/transaction" className="hover:text-gray-200">Transactions</Link>
      <Link to="/recharge" className="hover:text-gray-200">Recharge</Link>
      <Link to="/bill" className="hover:text-gray-200">Bill Pay</Link>
      <Link to="/merchant" className="hover:text-gray-200">Merchant Pay</Link>
      <Link to="/rewards" className="hover:text-gray-200">Rewards</Link>
    </div>
  );
}

export default Header