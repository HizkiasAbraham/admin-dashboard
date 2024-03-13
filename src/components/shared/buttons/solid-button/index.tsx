import { SolidButtonInput } from './types';

export function SolidButton(props: SolidButtonInput) {
  const { bg, children, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`bg-${bg || 'white-smoke'} rounded-xl md:min-w-16`}
    >
      <div className="p-2 text-black font-medium text-sm">{children}</div>
    </button>
  );
}
