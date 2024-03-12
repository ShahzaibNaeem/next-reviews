import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

export default async function PaginationBar({href, page, pageCount}) {
  return (
    <>
      <div className="flex gap-2 pb-2">
        <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
          <ChevronLeftIcon className="h-5 w-5" />
        </PaginationLink>
        <span>
          page {page} of {pageCount}
        </span>
        <PaginationLink
          href={`${href}?page=${page + 1}`}
          enabled={page < pageCount}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </PaginationLink>
      </div>
    </>
  );
}

function PaginationLink({href, enabled, children}) {
  if (!enabled) {
    return (
      <>
        <span className=" cursor-not-allowed px-2 text-slate-600 ">
          {children}
        </span>
      </>
    );
  }
  return (
    <>
      <Link
        href={href}
        className="border-2 rounded-lg px-2 hover:bg-white hover:border-black"
      >
        {children}
      </Link>
    </>
  );
}
