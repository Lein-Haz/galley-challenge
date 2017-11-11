export class FollowerModel{
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
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
