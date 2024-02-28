import bg from "@/public/images/auth-background.png";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex justify-center">
        <div className="w-full h-screen md:w-1/2 flex flex-col">
          <div className="flex-1">
            <div className="flex flex-1 cursor-pointer mt-8 p-4">
              <Image alt="" width={150} height={380} src={"/images/logo.png"} />
            </div>
          </div>
          <div className="flex-1 p-4">{children}</div>
          <div className="flex-1 flex flex-col justify-end">
            <div className="p-4 pb-8">
              <div className="flex justify-center md:justify-start text-grey font-medium text-sm">
                <div className="flex gap-2">
                  <div>
                    <a href="">Privacy Policy</a>
                  </div>
                  <div>|</div>
                  <div>
                    <a href="">Terms of Use</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex-1 md:h-screen bg-cover bg-center invisible md:visible"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
    </div>
  );
}
