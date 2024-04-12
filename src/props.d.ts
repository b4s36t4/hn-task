interface IHeaderProps {
  className?: string;
}

interface IModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  headerTitle: string;
}
