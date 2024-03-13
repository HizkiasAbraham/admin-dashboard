import { Icon } from '../icon';
import { BreadcrumbInput } from './types';
export function BreadCrumb(props: BreadcrumbInput) {
  const { paths } = props;
  const lastItem = paths?.pop();
  return (
    <div className="flex text-xl font-bold gap-2">
      <p>Dashboard</p>
      {paths?.length ? (
        paths.map((pathName) => (
          <>
            <Icon.ArrowRight className="h-5 w-5 text-green font-bold text-xl mt-1" />
            <p>{pathName}</p>
          </>
        ))
      ) : (
        <></>
      )}
      {lastItem && (
        <>
          <Icon.ArrowRight className="h-5 w-5 text-green font-bold mt-1" />
          <p className="text-grey">{lastItem}</p>
        </>
      )}
    </div>
  );
}
