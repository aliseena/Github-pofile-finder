import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlerContext';
import { searchUsers } from '../../context/github/GithubActions';

export default function UserSearch() {
  const [text, setText] = useState('');
  const { users, clearUsers, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'error');
      return;
    } else {
      dispatch({ type: 'SET_LOADING' });
      const data = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: data });
      setText('');
    }
  };

  return (
    <div
      className={`grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md-grid-cols-2 mb-8 gap-8  ${
        users.length === 0 && 'h-screen'
      }`}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                value={text}
                onChange={handleChange}
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black outline-none focus:outline-none"
                placeholder="Search for the first name"
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn  btn-lg"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
            className="btn btn-outline btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
