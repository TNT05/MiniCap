import { SET_JOB_POSTINGS } from "../actions/actionType";

const INITIAL_STATE ={
  jobPostings:[
  { id: 1, postTitle: 'Job 1', displayName: 'John Doe', photoURL: '/images/user1.jpg', postDescription: 'Description for job 1' },
  { id: 2, postTitle: 'Job 2', displayName: 'Jane Doe', photoURL: '/images/user2.jpg', postDescription: 'Description for job 2' }]
  }

const jobPostingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case SET_JOB_POSTINGS:
      console.log(action)
      return {
        ...state,
        jobPostings:action.jobPostings
      }
    default: 
      return state;
  }
}

export default jobPostingsReducer