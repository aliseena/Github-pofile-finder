import axios from 'axios';
const GITHUB_TOKEN = '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';
const GITHUB_URL = 'https://api.github.com';

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Get a list of users
export const searchUsers = async text => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${params}`);
  console.log('response:', response);
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
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);
  return { user: user.data, repos: repos.data };
};
