export class ConstantService {
  public static GITHUB_SEARCH = {
    REQUEST_DEFAULT_FOLLOWER_COUNT: 30,
    FOLLOWERS_PER_REQUEST: 100
  };

  public static REGEX = {
    LINK_HEADER_PAGINATION_REGEX: /<[^>]*>\s*(\s*;\s*[^()<>@,;:"\/\[\]?={} \t]+=(([^()<>@,;:"\/\[\]?={} \t]+)|("[^"]*")))*(,|$)/g,
    LINK_EXTRACT_REGEX:/[^<>]+/,
    RELATION_EXTRACT_REGEX: /[^()<>@,;:"\/\[\]?={} \t]+\w+="\w+"/
  };

  public static PAGINATION_RELATIONS = {
    FIRST: 'rel="first"',
    LAST: 'rel="last"',
    NEXT: 'rel="next"',
    PREV: 'rel="prev"',
  };
}
