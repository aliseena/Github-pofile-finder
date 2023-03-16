import { useContext } from 'react';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';

export default function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cold-2 ">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <div className="h-screen">{<Spinner />}</div>;
  }
}
