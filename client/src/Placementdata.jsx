import React from "react";
 // Import CSS file for styling

const TrainingPage = () => {
  return (
    <div className="training-page">
      <h1>Welcome to Our Training Resources Page!</h1>

      {/* Training Statistics */}
      <section className="training-section">
        <h2>Training Statistics</h2>
        <p>
          Here you can find statistics related to our training programs,
          including placement rates, success stories, satisfaction ratings, and
          more.
        </p>
      </section>

      {/* Placement Materials */}
      <section className="training-section">
        <h2>Placement Materials</h2>
        <p>
          Access materials such as resume templates, interview tips,
          company-specific preparation guides, sample cover letters, and
          portfolio building resources to excel in placements.
        </p>
      </section>

      {/* Latest Technology Videos */}
      <section className="training-section">
        <h2>Latest Technology Videos</h2>
        <p>
          Stay updated with the latest trends and technologies through our
          curated collection of informative videos, covering topics such as
          artificial intelligence, machine learning, web development, cloud
          computing, and more.
        </p>
      </section>

      {/* Additional Resources */}
      <section className="training-section">
        <h2>Additional Resources</h2>
        <p>
          Explore additional resources, such as blog posts, articles,
          recommended books, online courses, and industry reports, to enhance
          your learning experience and stay ahead in your career.
        </p>
      </section>
    </div>
  );
};

export default TrainingPage;
