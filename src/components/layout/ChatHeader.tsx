interface ChatHeaderProps {
  title: string;
}

export const ChatHeader = ({ title }: ChatHeaderProps) => {
  return <div>{title}</div>;
};
