import styled from "styled-components";
import { getAllJobPostings } from "../actions";
import { connect } from "react-redux";
import PostModal from "./PostModal";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");
  const [showMyJobs, setShowMyJobs] = useState(false)
  const handleClick = (e) => {
    console.log("herrr");
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };
  console.log(props.userJobPostings);

  const history = useHistory();

  // const handleApply = (jobPostingId) => {
  //   history.push(`/job-posting/${jobPostingId}`);
  // };

  return (
    <Container>
      <button onClick={()=>setShowMyJobs(!showMyJobs)}>My Job Postings</button>
      <Sharebox>
        <div>
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoURL} referrerPolicy="no-referrer" />
          ) : (
            <img src="/images/user.svg" alt="" />
          )}
          <button onClick={handleClick}>Post Job</button>
        </div>
      </Sharebox>
      {!showMyJobs ?
       <div>
        <Articles>
          {props.jobPostings ? (
            props.jobPostings.map((job) => {
              return (
                <div key={job.id}>
                  <SharedActor>
                    <a>
                      <img src={job.photoURL} />
                      <div>
                        <span>{job.postTitle}</span>
                        <span>{job.displayName}</span>
                        <span>2023-02-24</span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/ellipsis.svg" />
                    </button>
                  </SharedActor>
                  <Description>{job.postDescription}</Description>
                  <SocialCounts>
                    <button>
                      <a>44 Applicants</a>
                    </button>
                  </SocialCounts>
                  <SocialActions>
                    {/* <button onClick={() => handleApply(job.id)}>

          </button> */}
                    <a href={`/job-posting/${job.id}`} target="_blank">
                      <button>
                        <img src="/images/apply.svg" />
                        <span>Apply!</span>
                      </button>
                    </a>
                  </SocialActions>
                </div>
              );
            })
          ) : (
            <>None</>
          )}
        </Articles>
      </div>
      :
      <div>
        <Articles>
          {props.jobPostings ? (
            props.userJobPostings.map((job) => {
              return (
                <div key={job.id}>
                  <SharedActor>
                    <a>
                      <img src={job.photoURL} />
                      <div>
                        <span>{job.postTitle}</span>
                        <span>{job.displayName}</span>
                        <span>2023-02-24</span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/ellipsis.svg" />
                    </button>
                  </SharedActor>
                  <Description>{job.postDescription}</Description>
                  <SocialCounts>
                    <button>
                      <a>44 Applicants</a>
                    </button>
                  </SocialCounts>
                  <SocialActions>
                    {/* <button onClick={() => handleApply(job.id)}>

          </button> */}
<a href={`/job-applications/job/${job.id}`} target="_blank">
  <button>
    
    <span>View Applications</span>
  </button>
</a>
                  </SocialActions>
                </div>
              );
            })
          ) : (
            <>None</>
          )}
        </Articles>
      </div>  }
      
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Sharebox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
  }
`;

const Articles = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SocialCounts = styled.div`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;

    @media (min-width: 468px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.userState.user,
    jobPostings: state.jobPostingsState.jobPostings,
    userJobPostings: state.jobPostingsState.userJobPostings
  };
};

const mapDispatchToProps = (dispatch) => ({
  // getAllJobPostings: () => dispatch(getAllJobPostings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
