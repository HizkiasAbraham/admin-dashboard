import Header from '@/components/client/header';
import { BreadCrumb } from '@/components/shared/breadcrumb';
import { OutlinedButton } from '@/components/shared/buttons/outlined-button';
import { Icon } from '@/components/shared/icon';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="m-5">
        <div className="flex pb-2">
          <div className="flex-auto flex justify-start">
            <BreadCrumb paths={['Portifolio 1']} />
          </div>
          <div className="flex-auto flex justify-end aligin-center gap-4">
            <OutlinedButton color="inactive">
              <Icon.Search className="text-grey h-5 w-5" />
            </OutlinedButton>
            <OutlinedButton color="inactive">
              <Icon.Upload className="text-grey h-5 w-5" />
            </OutlinedButton>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
