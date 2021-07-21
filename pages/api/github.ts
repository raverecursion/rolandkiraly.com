import { NextApiResponse, NextApiRequest } from 'next';

export interface repoType {
  id: string;
  name: string;
  html_url: string;
  created_at: string;
  pushed_at: string;
  language: string;
  description: string;
  stargazers_count: number;
  fork: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Basic ${process.env.GITHUB_ACCESS_TOKEN}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const userResponse = await fetch(`https://api.github.com/users/innellea`, requestOptions);
  const userReposResponse = await fetch(
    `https://api.github.com/users/innellea/repos?per_page=10`,
    requestOptions
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();

  const notForked = repositories.filter((repo: any) => !repo.fork);

  const stars =
    notForked.reduce((a: number, r: { stargazers_count: number }) => a + r.stargazers_count, 0) ||
    null;

  const sendRepos = notForked.map(
    ({
      id,
      name,
      html_url,
      created_at,
      pushed_at,
      language,
      description,
      fork,
      stargazers_count,
    }: repoType) => ({
      id,
      name,
      html_url,
      created_at,
      pushed_at,
      language,
      description,
      fork,
      stargazers_count,
    })
  );
  return res.status(200).json({
    followers: user.followers,
    repos: sendRepos,
    stars,
  });
}
