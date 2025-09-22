import React from 'react'
import Header from './Pages/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
