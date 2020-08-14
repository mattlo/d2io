export interface IManifest {
  data : any
  name : string;
}

export function setProfile(data ?: any) : IManifest {
  return {
    name: 'profile',
    ...data
  };
}
