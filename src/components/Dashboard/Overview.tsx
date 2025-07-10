import React from 'react';
import { Users, Clock, TrendingUp, Award, Calendar, DollarSign } from 'lucide-react';
import MetricCard from '../Common/MetricCard';
import Chart from '../Common/Chart';

const Overview: React.FC = () => {
  // Mock data for the overview metrics
  const metrics = [
    {
      title: 'Total Employees',
      value: '1,247',
      change: '+12%',
      trend: 'up' as const,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Present Today',
      value: '1,156',
      change: '+5%',
      trend: 'up' as const,
      icon: Clock,
      color: 'green'
    },
    {
      title: 'Performance Score',
      value: '87.5%',
      change: '+3.2%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Training Completed',
      value: '342',
      change: '+18%',
      trend: 'up' as const,
      icon: Award,
      color: 'orange'
    }
  ];

  // Mock data for attendance chart
  const attendanceData = [
    { name: 'Mon', present: 1180, absent: 67 },
    { name: 'Tue', present: 1156, absent: 91 },
    { name: 'Wed', present: 1203, absent: 44 },
    { name: 'Thu', present: 1167, absent: 80 },
    { name: 'Fri', present: 1145, absent: 102 },
    { name: 'Sat', present: 892, absent: 355 },
    { name: 'Sun', present: 756, absent: 491 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening at your company today.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-600">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Attendance Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Weekly Attendance</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Present</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Absent</span>
              </div>
            </div>
          </div>
          <Chart
            data={attendanceData}
            type="bar"
            dataKeys={['present', 'absent']}
            colors={['#3B82F6', '#EF4444']}
            height={300}
          />
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activities</h3>
          <div className="space-y-4">
            {[
              {
                action: 'New employee onboarded',
                person: 'Sarah Johnson',
                time: '2 hours ago',
                type: 'success'
              },
              {
                action: 'Training session completed',
                person: 'Marketing Team',
                time: '4 hours ago',
                type: 'info'
              },
              {
                action: 'Performance review due',
                person: 'John Smith',
                time: '1 day ago',
                type: 'warning'
              },
              {
                action: 'Leave request approved',
                person: 'Emily Davis',
                time: '2 days ago',
                type: 'success'
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'warning' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-600">{activity.person}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: Users, label: 'Add Employee', color: 'blue' },
            { icon: Calendar, label: 'Schedule Meeting', color: 'green' },
            { icon: Award, label: 'Create Training', color: 'purple' },
            { icon: DollarSign, label: 'Process Payroll', color: 'yellow' },
            { icon: TrendingUp, label: 'View Reports', color: 'indigo' },
            { icon: Clock, label: 'Time Tracking', color: 'pink' }
          ].map((action, index) => (
            <button
              key={index}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-${action.color}-300 hover:bg-${action.color}-50 transition-all duration-200 group`}
            >
              <action.icon className={`w-6 h-6 text-gray-400 group-hover:text-${action.color}-500 mb-2`} />
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;