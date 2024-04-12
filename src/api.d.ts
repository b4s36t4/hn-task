interface IHit {
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string | number;
  points: number;
  story_id: number;
  title: string;
  updated_at: string;
  url: string;
}

interface ISearchResult {
  hits: IHit[];
}

interface INewsItem {
  author: string;
  created_at: string;
  created_at_i: number;
  id: number;
  parent_id: number;
  options: string[];
  points: null | number;
  story_id: number;
  text: string;
  title: string | null;
  type: "story" | "comment";
  url: string;
  children: INewsItem[];
}
