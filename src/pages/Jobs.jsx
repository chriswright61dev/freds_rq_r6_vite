import JobsList from "../modules/jobs/JobsList";
import PageTop from "../components/PageTop/Pagetop";
function Jobs() {
  return (
    <div className="container">
      <PageTop />
      <div className="info_column">
        <JobsList />
      </div>
      <div className="info_column"> </div>
      <div className="info_column"> </div>
      <div className="info_column"> </div>
    </div>
  );
}

export default Jobs;
