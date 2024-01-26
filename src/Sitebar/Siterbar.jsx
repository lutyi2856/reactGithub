import "./sitebar.css";

const Sitebar = () => {
  return (
    <div className="sitebar">
      <nav className="sitebar-nav">
        <ul className="sitebar-list">
          <li className="sitebar-item">
            <a href="#" className="sitebar-link">
              Home
            </a>
          </li>
          <li className="sitebar-item">
            <a href="#" className="sitebar-link">
              Learn HTM
            </a>
          </li>
          <li className="sitebar-item">
            <a href="#" className="sitebar-link">
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sitebar;
