import JobDetail from "../modules/jobs/JobDetail/JobDetail";
import JobsList from "../modules/jobs/JobsList";
import PageTop from "../components/PageTop/Pagetop";
function Job() {
  return (
    <div className="container">
      <PageTop />
      <div className="detail_column">
        <JobDetail />
      </div>
      <div className="info_column">
        <JobsList />
      </div>
      <div className="info_column"> </div>
    </div>
  );
}

export default Job;
