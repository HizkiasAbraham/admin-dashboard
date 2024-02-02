import Header from '@/components/client/header';
import { BreadCrumb } from '@/components/shared/breadcrumb';

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
          <div className="flex-auto flex justify-end">End</div>
        </div>
        {children}
      </div>
    </>
  );
}
