export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Text2 {
  content: string;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface RichText {
  type: string;
  text: Text2;
  annotations: Annotations;
  plain_text: string;
}

export interface Text {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

export interface Tags {
  id: string;
  type: string;
  multi_select: MultiSelect[];
}

export interface Text3 {
  content: string;
}

export interface Annotations2 {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Title2 {
  type: string;
  text: Text3;
  annotations: Annotations2;
  plain_text: string;
}

export interface Title {
  id: string;
  type: string;
  title: Title2[];
}

export interface Properties {
  text: Text;
  Tags: Tags;
  title: Title;
}

export interface Problem {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

export interface GetDatabaseResponse {
  object: string;
  results: Problem[];
  has_more: boolean;
  type: string;
}
