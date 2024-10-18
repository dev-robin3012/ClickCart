import Link from "@/components/ui/link";
import { useSession } from "next-auth/react";

interface Props {
  href: string;
  className?: string;
  btnProps: React.ButtonHTMLAttributes<any>;
  isAuthorized: boolean;
}

export default function AuthMenu({
  isAuthorized,
  href,
  className,
  btnProps,
  children,
}: React.PropsWithChildren<Props>) {
  const { data } = useSession();
  console.log(data);

  return isAuthorized ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <button {...btnProps} className={className} />
  );
}
