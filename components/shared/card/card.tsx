import { CardInput, CardHeadingInput } from './types';
import { Icon } from '@/components/shared/icon';

export function Card(props: CardInput) {
  const { children } = props;

  return (
    <div className="rounded-lg bg-white border-light-grey shadow">
      <div className="m-2 p-3">{children}</div>
    </div>
  );
}

export function CardHeading(props: CardHeadingInput) {
  const { icon, title, children } = props;
  const HeadingIcon = icon ? Icon[icon] : Icon.ArrowRight;

  return (
    <div className="mt-1 mt-1 flex">
      <div className="flex-auto flex justify-start gap-1">
        {title && (
          <div className="flex gap-1 items-center">
            <p className="uppercase font-semibold text-sm text-grey">{title}</p>
            <HeadingIcon className="text-green w-5 h-5" />
          </div>
        )}
      </div>
      <div className="flex-auto flex justify-end gap-2">{children}</div>
    </div>
  );
}

export function CardContent(props: CardInput) {
  const { children } = props;
  return <div className="mt-1 mt-1">{children}</div>;
}
