export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <p className="sidebar-brand">Student Portal</p>
        <nav className="sidebar-nav" aria-label="Main navigation">
          <a href="#dashboard" className="sidebar-link sidebar-link-active" aria-current="page">
            <svg className="sidebar-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="8" height="8" rx="1" />
              <rect x="13" y="3" width="8" height="5" rx="1" />
              <rect x="13" y="10" width="8" height="11" rx="1" />
              <rect x="3" y="13" width="8" height="8" rx="1" />
            </svg>
            Dashboard
          </a>
          <a href="#courses" className="sidebar-link">
            <svg className="sidebar-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
              <path d="M4 5.5v16M8 7h8M8 11h8" />
            </svg>
            Courses
          </a>
          <a href="#schedule" className="sidebar-link">
            <svg className="sidebar-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M16 3v4M8 3v4M3 10h18" />
            </svg>
            Schedule
          </a>
        </nav>
      </div>
      <a href="#settings" className="sidebar-link sidebar-settings">
        <svg className="sidebar-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 2Z" />
        </svg>
        Settings
      </a>
    </aside>
  );
}