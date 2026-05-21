import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

type Props = {
  action: () => void;
  description: string;
  title: string;
  icon: React.ReactNode;
  actionLabel?: string;
};

export default function Error({
  action,
  description,
  title,
  icon,
  actionLabel,
}: Props) {
  return (
    <Alert variant="destructive">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      <AlertAction>
        <Button onClick={action} className="text-sm">
          {icon} {actionLabel || "Try Again"}
        </Button>
      </AlertAction>
    </Alert>
  );
}
