export interface imageProps {
  id: string;
  imageUrl: string;
  title: string;
  previewUrl: string;
  url: string;
}

export interface ItemProps {
  images: imageProps[];
  query?: string;
  started?: boolean;
}

export type RadioBtnProps = {
  id: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};
