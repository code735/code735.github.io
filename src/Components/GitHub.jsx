import React from "react";

const GitHub = () => {
  return (
    <div id="githubs">
      <div className="container react-activity-calendar">
        <h1 className="sub-title">GitHub React-Activity-Calendar</h1>
        <div className="github-list">
          <div className="github">
            <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=s17200&theme=radical" alt="streakstat" />
          </div>
          <div className="github" id="tops">
            <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=s17200&&theme=radical" alt="top_languages" />
          </div>
          <div className="github">
            <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=s17200&show_icons=true&theme=radical" alt="stat-card" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHub;