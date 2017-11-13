export class ConstantService {
  public static GITHUB_SEARCH = {
    REQUEST_DEFAULT_FOLLOWER_COUNT: 30,
    FOLLOWERS_PER_REQUEST: 100
  };

  /**
   * {
   *  LINK_HEADER_PAGINATION_REGEX splits the HTTP header's link field into the pagination groups(first, last, next, prev)
   *  LINK_EXTRACT_REGEX extracts the actual http link out of the pagination group
   *  RELATION_EXTRACT_REGEX extracts the pagination relation (i.e. rel="last")
   *  PAGE_EXTRACT_REGEX extracts the page number out of the link
   *
   */
  public static REGEX = {
    LINK_HEADER_PAGINATION_REGEX: /<[^>]*>\s*(\s*;\s*[^()<>@,;:"\/\[\]?={} \t]+=(([^()<>@,;:"\/\[\]?={} \t]+)|("[^"]*")))*(,|$)/g,
    LINK_EXTRACT_REGEX:/[^<>]+/,
    RELATION_EXTRACT_REGEX: /[^()<>@,;:"\/\[\]?={} \t]+\w+="\w+"/,
    PAGE_EXTRACT_REGEX: /(\d)+$/
  };

  public static PAGINATION_RELATIONS = {
    FIRST: 'rel="first"',
    LAST: 'rel="last"',
    NEXT: 'rel="next"',
    PREV: 'rel="prev"',
  };
}
