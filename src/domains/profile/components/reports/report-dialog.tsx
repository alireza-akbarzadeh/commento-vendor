import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components";

type ReportDialogProps = {
  title: string;
  descrption: string;
};

export const ReportDialog = (props: ReportDialogProps) => {
  const { title, descrption } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="text"
          className="text-info-main"
          iconOnly
          icon="eye"
          size="medium"
        />
      </DialogTrigger>
      <DialogContent className="max-w-[532px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="pt-8 text-textAndIcon-darker text-bodylarge">
            {descrption}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
