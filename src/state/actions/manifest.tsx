export interface IManifest {
  contentPath : string;
  version : string;
  name : string;
}

export function setManifest(data = {contentPath: '', version: ''}) : IManifest {
  return {
    name: 'manifest',
    ...data
  };
}

export function setComponentContent(data : any) {
  return {
    name: 'componentContent',
    ...data
  }
}
