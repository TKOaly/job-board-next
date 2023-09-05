import { ArrowTopRightOnSquareIcon, SparklesIcon } from "@heroicons/react/20/solid";
import { Company } from "@prisma/client";
import Link from "next/link";
import Card from "./Card";

export type Props = {
  companies: (Company & { _count: { employerPosts: number } })[],
};

export const CompanyList = ({ companies }: Props) => {
  return (
    <div className="space-y-5">
      {companies.map((company) => (
        <Card key={company.id}>
          <Link href={`/companies/${company.id}`}>
            <h1 className="text-xl font-bold">
              {company.name}
              {company.partner && (
                <span className="text-sm ml-2 rounded py-0.5 px-1.5 bg-yellow-100 text-yellow-700 inline-flex items-center gap-1">
                  <SparklesIcon className="h-4 w-4" />
                  Yhteistökumppani
                </span>
              )}
            </h1>
          </Link>
          {company.website && (
            <div className="my-3">
              <span className="text-xs text-gray-600 uppercase font-bold">Verkkosivut</span>
              <div suppressHydrationWarning>
                <Link href={company.website} className="flex items-center gap-1 text-blue-500">
                  {company.website}
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </Link></div>
            </div>
          )}
          <div className="my-3">
            <span className="text-xs text-gray-600 uppercase font-bold">Ilmoituksia</span>
            <div>
              {company._count.employerPosts} kpl
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};