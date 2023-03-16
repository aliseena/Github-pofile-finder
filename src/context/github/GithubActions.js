import axios from 'axios';
const GITHUB_TOKEN = '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';
const GITHUB_URL = 'https://api.github.com';

const config = {
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
};

// Get a list of users
export const searchUsers = async text => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await axios.get(`${GITHUB_URL}/search/users?${params}`, {
    config,
  });
  return response.data.items;
};

// Get a single user and user's repos
export const userDataAndRepos = async login => {
  const params = new URLSearchParams({
    sort: 'created',
    subject_type: 'repository',
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    axios.get(`${GITHUB_URL}/users/${login}`, { config }),
    axios.get(`${GITHUB_URL}/users/${login}/repos?${params}`, { config }),
  ]);
  return { user: user.data, repos: repos.data };
};
