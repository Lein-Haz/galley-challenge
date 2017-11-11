export class UserModel{
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;//user's profile url
  html_url: string;// user's profile url
  followers_url: string;
  following_url: string;//has param
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email?: string;
  hireable?: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
