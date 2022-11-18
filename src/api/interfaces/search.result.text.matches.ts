export interface SearchResultTextMatchesInner {
  objectUrl?: string;
  objectType?: string;
  property?: string;
  fragment?: string;
  matches?: Array<any>;
}

export interface SearchResultTextMatches
  extends Array<SearchResultTextMatchesInner> {}
