import React from 'react';
import './App.css';
import Navbar from './components/Navbar';    // Correct import
import Textform from './components/Textform'; // Correct name

function App() {
  return (
    <>
      <Navbar title="TextUtils" />

      {/* Textform (Optional) */}
      <Textform />


      {/* Simple Login Box */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h4 className="text-center mb-3">Login</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
