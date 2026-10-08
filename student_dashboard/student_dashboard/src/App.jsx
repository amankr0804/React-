import { useState } from 'react';
import Sidebar from './components/sidebar';
import StatCard from './components/statcard';
import './App.css';

export default function App() {
  const [student] = useState({
    name: "Aman Kumar",
    rollNo: "2400321540028",
    program: "B.Tech CSE (Data Science)",
    semester: 5,
    gpa: 8.7,
    attendance: 88,
  });

  const [courses] = useState([
    { id: 1, name: "Machine Learning", code: "CS501", attendance: "92%", grade: "A" },
    { id: 2, name: "Database Management Systems", code: "CS502", attendance: "85%", grade: "A+" },
    { id: 3, name: "Design & Analysis of Algorithms", code: "CS503", attendance: "87%", grade: "B+" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Welcome back, {student.name}</h1>
            <p className="dashboard-subtitle">{student.program} • Semester {student.semester}</p>
          </div>
          <span className="student-roll">
            Roll: {student.rollNo}
          </span>
        </header>

        <section className="stats-grid" aria-label="Academic summary">
          <StatCard title="Current GPA" value={student.gpa} subtitle="Scale 10.0" />
          <StatCard title="Overall Attendance" value={`${student.attendance}%`} subtitle="Minimum 75% required" />
          <StatCard title="Enrolled Courses" value={courses.length} subtitle="Active this term" />
        </section>

        <section className="courses-panel">
          <div className="courses-header">
            <h2 className="courses-title">Enrolled Courses</h2>
            <input
              type="text"
              placeholder="Filter courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="course-search"
              aria-label="Filter courses by name or code"
            />
          </div>

          <div className="courses-list">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <article key={course.id} className="course-row">
                  <div>
                    <h3 className="course-name">{course.name}</h3>
                    <p className="course-code">{course.code}</p>
                  </div>
                  <div className="course-results">
                    <p className="course-attendance">Attendance: {course.attendance}</p>
                    <p className="course-grade">Grade: {course.grade}</p>
                  </div>
                </article>
              ))
            ) : (
              <p className="empty-courses">No matching courses found.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}