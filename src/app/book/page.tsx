import { type Metadata } from "next";
import { allBooks } from "content-collections";
import Link from "next/link";
import count from 'word-count'
import { config } from "@/lib/config";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Books | ${config.site.title}`,
  description: `Books of ${config.site.title}`,
  keywords: `${config.site.title}, books, ${config.site.title} books, nextjs books template`,
};

export default function BookPage() {
  const books = allBooks.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {books.map((book: any) => (
          <article 
            key={book.slug} 
            className=""
          >
            <Link href={`/book/${book.slug}`}>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold underline underline-offset-4">
                    {book.title}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {formatDate(book.date)} · {count(book.content)} 字
                  </span>
                </div>
                <p className="text-gray-600 line-clamp-2">
                  {book.summary}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}


