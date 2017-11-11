import {Injectable} from "@angular/core";
import {ConstantService} from "./constants";


interface PaginationObject{
  relation: string;
  link: string;
}

@Injectable()
export class FollowerService{

  public getNextFollowersUrl(headerLinkString: string): string{
    let paginationArray = this.parseHeaderLink(headerLinkString);
    return this.getNextLink(paginationArray);
  }

  /* Grr, remembered after I had finished this that I didn't need all the first, prev, next, last stuff. */
  private parseHeaderLink(headerLinkString: string): PaginationObject[]{
    let linkPaginationResults = headerLinkString.match(ConstantService.REGEX.LINK_HEADER_PAGINATION_REGEX);
    let paginationLinksArray = [];
    if(linkPaginationResults && Array.isArray(linkPaginationResults) && linkPaginationResults.length > 0){
      linkPaginationResults.forEach(linkPaginationString => {
        let link = linkPaginationString.match(ConstantService.REGEX.LINK_EXTRACT_REGEX);
        let relation = linkPaginationString.match(ConstantService.REGEX.RELATION_EXTRACT_REGEX);
        let paginationObject: PaginationObject = {
          relation: relation[0],
          link: link[0]
        };
        paginationLinksArray.push(paginationObject);
      });
    }
    return paginationLinksArray;
  }

  private getNextLink(paginationLinksArray: PaginationObject[]): string{
    let returnUrl = "";
    paginationLinksArray.forEach(paginationObject => {
      if(paginationObject.relation === ConstantService.PAGINATION_RELATIONS.NEXT){
        returnUrl = paginationObject.link;
      }
    });
    return returnUrl;
  }
}
