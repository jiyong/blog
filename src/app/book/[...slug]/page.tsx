import { allBooks } from "content-collections"
import type { Metadata } from "next"
import { absoluteUrl, formatDate } from "@/lib/utils"
import { notFound } from "next/navigation"
import { getTableOfContents } from "@/lib/toc"
import { DashboardTableOfContents } from "@/components/toc"
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import count from 'word-count'
import { components } from "@/components/mdx-components"
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import 'highlight.js/styles/github-dark.min.css'
import GiscusComments from "@/components/giscus-comments"
import { GoToTop } from "@/components/go-to-top"
import 'katex/dist/katex.min.css';
import { config } from "@/lib/config";

type BooksPageProps = {
  params: Promise<{slug: string[]}>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const options = {
  mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [
        rehypeKatex,
        rehypeHighlight,
        rehypeSlug
      ],
  }
}

async function getBooksFromParams(slugs: string[]) {
  const slug = slugs?.join("/") || ""
  const book = allBooks.find((book: any) => book.slug === slug)

  if (!book) {
    return null
  }

  return book
}

export async function generateMetadata({ params }: BooksPageProps): Promise<Metadata> {
  const { slug } = await params
  const book = await getBooksFromParams(slug)

  if (!book) {
    return {}
  }

  return {
    title: book.title,
    description: book.title,
    keywords: book.keywords,
    openGraph: {
      title: book.title,
      description: book.title,
      type: config.seo.openGraph.type,
      url: absoluteUrl("/" + book.slug),
      images: [
        {
          url: config.site.image
        },
      ],
    },
    twitter: {
      card: config.seo.twitter.card,
      title: book.title,
      description: book.title,
      images: [
        {
          url: config.site.image
        },
      ],
      creator: config.seo.twitter.creator,
    },
  }
}

export async function generateStaticParams(): Promise<string[]> {
  // @ts-ignore
  return allBooks.map((book: any) => ({
    slug: book.slug.split('/'),
  }))
}

export default async function BookPage(props: BooksPageProps) {
  const { slug } = await props.params;
  const book = await getBooksFromParams(slug)

  if (!book) {
    notFound()
  }

  const toc = await getTableOfContents(book.content)

  return (
    <main className="relative py-6 max-w-full md:max-w-6xl mx-auto lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="max-w-4xl mx-auto w-full px-6">
        <div className="my-8">
          <h1 className="text-[32px] font-bold">{book.title}</h1>
        </div>

        <div className="my-4">
          <p className="text-sm">
            {formatDate(book.date)} · {count(book.content)} 字
          </p>
        </div>

        <div className="">
          <MDXRemote source={book.content} components={components} options={options} />
        </div>

        <GiscusComments />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-6 h-[calc(100vh-3.5rem)]">
          <div className="h-full overflow-auto pb-10 flex flex-col justify-between mt-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <DashboardTableOfContents toc={toc} />
            <GoToTop />
          </div>
        </div>
      </div>
    </main>
  );
}
