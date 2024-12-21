import "./Dashbored.css";
import { FaHome, FaUser, FaShoppingCart, FaEnvelope, FaPlus, FaSignOutAlt, FaChartPie } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>Dream<span>House</span></h2>
        </div>
        <ul className="sidebar-menu">
          <li><FaHome /> Dashboard</li>
          <li><FaUser /> Customers</li>
          <li><FaShoppingCart /> Orders</li>
          <li><FaEnvelope /> Messages <span className="message-count">26</span></li>
          <li><FaChartPie /> Products</li>
          <li><FaPlus /> Add Product</li>
          <li><FaSignOutAlt /> Log Out</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <h1>Dashboard</h1>
          <div className="date-picker">
            <input type="date" />
          </div>
        </header>

        <section className="analytics">
          <div className="card">
            <h3>Total Sales</h3>
            <p className="value">$25,024</p>
            <p className="percentage">81% Last 24 Hours</p>
          </div>
          <div className="card">
            <h3>Total Expenses</h3>
            <p className="value">$14,160</p>
            <p className="percentage">62% Last 24 Hours</p>
          </div>
          <div className="card">
            <h3>Total Sales</h3>
            <p className="value">$10,864</p>
            <p className="percentage">44% Last 24 Hours</p>
          </div>
        </section>

        <section className="recent-orders">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Leather Jacket</td>
                <td>85631</td>
                <td>Due</td>
                <td className="status-pending">Pending</td>
              </tr>
              <tr>
                <td>Leather Jacket</td>
                <td>85631</td>
                <td>Due</td>
                <td className="status-pending">Pending</td>
              </tr>
              <tr>
                <td>Leather Jacket</td>
                <td>85631</td>
                <td>Refunded</td>
                <td className="status-declined">Declined</td>
              </tr>
              <tr>
                <td>Leather Jacket</td>
                <td>85631</td>
                <td>Due</td>
                <td className="status-delivered">Delivered</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="recent-updates">
          <h2>Recent Updates</h2>
          <div className="update">
            <p><strong>Mike Tyson</strong> received his order of Night Lion Tech GPS Drone. <span>2 minutes ago</span></p>
          </div>
          <div className="update">
            <p><strong>Mike Tyson</strong> received his order of Night Lion Tech GPS Drone. <span>2 minutes ago</span></p>
          </div>
        </section>

        <section className="sales-analytics">
          <h2>Sales Analytics</h2>
          <div className="card">
            <h3>Online Orders</h3>
            <p className="value">3849</p>
            <p className="percentage">+39% Last 24 Hours</p>
          </div>
          <div className="card">
            <h3>Offline Orders</h3>
            <p className="value">1100</p>
            <p className="percentage">-17% Last 24 Hours</p>
          </div>
          <div className="card">
            <h3>New Customers</h3>
            <p className="value">849</p>
            <p className="percentage">+25% Last 24 Hours</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
