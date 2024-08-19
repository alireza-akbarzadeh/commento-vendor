import { Button } from 'components';

export function TabsVisualizer() {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Button
          variant="text"
          className="text-labelLarge text-textAndIcon-light"
        >
          روزانه
        </Button>
        <Button
          variant="text"
          className="text-labelLarge text-textAndIcon-light"
        >
          هفتگی
        </Button>
        <Button
          variant="text"
          className="text-labelLarge text-textAndIcon-light"
        >
          ماهانه
        </Button>
        <Button
          variant="text"
          className="text-labelLarge text-textAndIcon-light"
        >
          ۳ ماهه
        </Button>
        <Button
          variant="text"
          className="text-labelLarge text-textAndIcon-light"
        >
          ۶ ماهه
        </Button>
        <div className="h-4 w-[3px] bg-border-light ml-4" />
        <Button
          variant="text"
          className="text-labelLarge text-textAndIcon-light"
        >
          تعداد کلیک
          <span className="block bg-primary-main m-1.5 rounded-full size-1.5 mr-1.5" />
        </Button>
        <Button
          variant="text"
          className="text-labelLarge text-textAndIcon-light"
        >
          تعداد کلیک
          <span className="block bg-info-light m-1.5 rounded-full size-1.5 mr-1.5" />
        </Button>
      </div>
      <p className="text-labelMedium text-textAndIcon-darker">
        تعداد کل کلیک ۱۲۳۴۶۷۳۲۵۱۶۷{' '}
      </p>
    </div>
  );
}
