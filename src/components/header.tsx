import { Divider } from "@/components/ui/divider";
import { Logo } from "@/components/ui/logo";

export const Header = () => {
  return (
    <div className="max-w-full flex flex-col items-center pt-16">
      <Divider number={8} />
        <div className="w-full flex justify-center py-16 xl:py-24 px-4 sm:px-12">
          <Logo />
        </div>
      <Divider number={8} />
    </div>
  );
}
