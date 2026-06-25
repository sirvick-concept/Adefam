import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard Overview" },
    { id: "courses", label: "My Courses" },
    { id: "materials", label: "Course Materials" },
    { id: "assignments", label: "Assignments" },
    { id: "results", label: "Results & Grades" },
    { id: "certificates", label: "Certificates" },
    { id: "profile", label: "Profile Settings" },
    { id: "notifications", label: "Notifications" },
    { id: "support", label: "Support" },
  ];

  return (
    <div className="py-15 min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-lg p-5 hidden md:block">

        {/* PROFILE SECTION */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/Tech.png"
            alt="Student Profile"
            className="w-20 h-20 rounded-full object-cover border-4 border-orange-500"
          />

          <h2 className="mt-3 font-bold text-gray-800">
            Student Name
          </h2>

          <p className="text-sm text-gray-500">
            student@email.com
          </p>
        </div>

        <h1 className="text-xl font-bold text-orange-600 mb-6">
          Adefam Infotech
        </h1>

        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                activeTab === item.id
                  ? "bg-orange-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleLogout}
          className="mt-10 w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-800"
        >
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1">

        {/* TOP BAR */}
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            Student Dashboard
          </h2>

          <button
            onClick={handleLogout}
            className="md:hidden bg-orange-600 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>

        {/* CONTENT AREA */}
        <div className="p-6">

          {/* DASHBOARD OVERVIEW */}
          {activeTab === "dashboard" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Welcome Back Student 👋
              </h2>

              <p className="text-gray-600 mb-6">
                Track your learning progress, assignments, and certificates.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl shadow">
                  <h3 className="font-bold text-orange-600">Courses</h3>
                  <p className="text-gray-600">3 Active Courses</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                  <h3 className="font-bold text-orange-600">Assignments</h3>
                  <p className="text-gray-600">2 Pending</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                  <h3 className="font-bold text-orange-600">Certificates</h3>
                  <p className="text-gray-600">1 Completed</p>
                </div>
              </div>
            </div>
          )}

          {/* COURSES */}
          {activeTab === "courses" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">My Courses</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl shadow">
                  Web Development
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                  UI/UX Design
                </div>
              </div>
            </div>
          )}

          {/* PROFILE */}
          {activeTab === "profile" && (
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-bold mb-4">
                Profile Settings
              </h2>

              <p className="text-gray-600">
                Update your personal details, email, and password here.
              </p>
            </div>
          )}

          {/* DEFAULT */}
          {![
            "dashboard",
            "courses",
            "profile"
          ].includes(activeTab) && (
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-bold capitalize">
                {activeTab}
              </h2>

              <p className="text-gray-600 mt-2">
                This section is under development.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;