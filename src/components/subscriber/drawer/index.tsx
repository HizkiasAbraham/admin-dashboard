import { DrawerProps } from "./type";

export default function Drawer(props: DrawerProps) {
  const { children, isOpen } = props;
  return (
    <main
      className={
        "md:hidden fixed w-full overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg bg-green left-0 right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="w-full h-full overflow-y-hidden">{children}</div>
      </section>
    </main>
  );
}
