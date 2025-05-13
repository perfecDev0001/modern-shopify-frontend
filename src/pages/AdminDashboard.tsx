import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  ShoppingBag, 
  Users, 
  TrendingUp,
  Package,
  ShoppingCart,
  BarChart2,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import StatCard from '../components/admin/StatCard';
import SalesChart from '../components/admin/SalesChart';
import CategoryPieChart from '../components/admin/CategoryPieChart';
import RecentOrders from '../components/admin/RecentOrders';
import TopProducts from '../components/admin/TopProducts';
import { formatCurrency } from '../lib/utils';
import { salesData, categorySales, topSellingProducts } from '../data/analytics';

const AdminDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  // Calculate total revenue from the last 30 days
  const totalRevenue = salesData.reduce((sum, day) => sum + day.revenue, 0);
  
  // Calculate total orders from the last 30 days
  const totalOrders = salesData.reduce((sum, day) => sum + day.orders, 0);
  
  // Calculate average order value
  const averageOrderValue = totalRevenue / totalOrders;
  
  // Calculate total products sold (sum of top products sales as an example)
  const totalProductsSold = topSellingProducts.reduce((sum, product) => sum + product.sales, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-brand-600" />
            <span className="text-xl font-bold text-gray-900">ModernShop</span>
          </Link>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            <li>
              <Link
                to="/admin"
                className="flex items-center space-x-3 px-4 py-3 rounded-md bg-brand-50 text-brand-700"
              >
                <BarChart2 className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/orders"
                className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/products"
                className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <Package className="h-5 w-5" />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/customers"
                className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <Users className="h-5 w-5" />
                <span>Customers</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/analytics"
                className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <TrendingUp className="h-5 w-5" />
                <span>Analytics</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Link to="/" className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100">
            <LogOut className="h-5 w-5" />
            <span>Back to Store</span>
          </Link>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6 text-brand-600" />
                <span className="text-xl font-bold text-gray-900">ModernShop</span>
              </Link>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <nav className="flex-1 p-4">
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/admin"
                    className="flex items-center space-x-3 px-4 py-3 rounded-md bg-brand-50 text-brand-700"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <BarChart2 className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/orders"
                    className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Orders</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/products"
                    className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Package className="h-5 w-5" />
                    <span>Products</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/customers"
                    className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Users className="h-5 w-5" />
                    <span>Customers</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/analytics"
                    className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <TrendingUp className="h-5 w-5" />
                    <span>Analytics</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/settings"
                    className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="p-4 border-t border-gray-200">
              <Link 
                to="/" 
                className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setSidebarOpen(false)}
              >
                <LogOut className="h-5 w-5" />
                <span>Back to Store</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
            <button
              className="md:hidden text-gray-500"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 md:ml-0 ml-4">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Link to="/admin/settings">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Total Revenue"
              value={formatCurrency(totalRevenue)}
              description="Last 30 days"
              icon={<DollarSign className="h-6 w-6" />}
              trend={{ value: 12.5, isPositive: true }}
            />
            <StatCard
              title="Orders"
              value={totalOrders.toString()}
              description="Last 30 days"
              icon={<ShoppingCart className="h-6 w-6" />}
              trend={{ value: 8.2, isPositive: true }}
            />
            <StatCard
              title="Average Order Value"
              value={formatCurrency(averageOrderValue)}
              description="Last 30 days"
              icon={<TrendingUp className="h-6 w-6" />}
              trend={{ value: 3.1, isPositive: true }}
            />
            <StatCard
              title="Products Sold"
              value={totalProductsSold.toString()}
              description="Last 30 days"
              icon={<Package className="h-6 w-6" />}
              trend={{ value: 5.4, isPositive: true }}
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <SalesChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <CategoryPieChart />
              </CardContent>
            </Card>
          </div>

          {/* Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <Link to="/admin/orders">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </CardHeader>
              <CardContent>
                <RecentOrders />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Top Selling Products</CardTitle>
                <Link to="/admin/products">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </CardHeader>
              <CardContent>
                <TopProducts />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;