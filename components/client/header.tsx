import Image from 'next/image';

export default function Header() {
  return (
    <div className="invisible md:visible border-x-0 border-inactive border-b-2">
      <div className="m-4 flex">
        <div className="flex flex-auto justify-start gap-4">
          <div>Dashboard</div>
          <div>Projects</div>
        </div>
        <div className="flex flex-auto justify-center">
          <Image alt="" width={120} height={20} src={'/images/logo.png'} />
        </div>
        <div className="flex flex-auto justify-end gap-4">
          <div>Notifications</div>
          <div>Profile</div>
        </div>
      </div>
    </div>
  );
}
