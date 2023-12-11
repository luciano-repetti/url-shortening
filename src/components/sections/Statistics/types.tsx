export interface UrlInfo {
    originalUrl: string;
    shortenedUrl: string;
    id: string;
  }
  
export interface UrlStorageProps {
    state: {
      shortUrls: UrlInfo[];
      setShortUrls: React.Dispatch<React.SetStateAction<UrlInfo[]>>;
    };
  }