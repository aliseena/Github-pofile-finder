import { Link } from 'react-router-dom';

export default function UserItem({ user: { avatar_url, login } }) {
  return (
    <div className="car shadow-md compact side bg-orange-50 rounded">
      <div className="flex-row item-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            to={`/user/${login}`}
            className="text-base-content text-opacity-40"
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
