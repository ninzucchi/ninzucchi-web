import Link from "next/link";

interface GridItemProps {
  title: string;
  link?: string;
  description: string;
  subtitle: string;
}

export function GridItem({
  title,
  link,
  description,
  subtitle,
}: GridItemProps) {
  return (
    <>
      <div className="col-span-2">
        {link ? (
          <Link href={link} className="hover:text-foreground">
            {title}
          </Link>
        ) : (
          <span>{title}</span>
        )}
      </div>
      <div className="col-span-3">
        <p>{description}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </>
  );
}
