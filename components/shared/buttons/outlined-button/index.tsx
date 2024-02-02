import { OutlinedButtonInput } from './types';

export function OutlinedButton(props: OutlinedButtonInput) {
  const { color, children } = props;

  let className = '';

  return (
    <button
      className={`bg-white text-${color} border-${color} rounded-xl border`}
    >
      <div className="p-2">{children}</div>
    </button>
  );
}
