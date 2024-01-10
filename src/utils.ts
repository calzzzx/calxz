import { getEntryBySlug, CollectionEntry, getCollection } from 'astro:content'
import i18next from 'i18next'

export function getPath(url: string) {
  return new URL(url).pathname
}

export function getPathname(url: string) {
  let pathname = new URL(url).pathname
  if (pathname.includes('en')) {
    return pathname.slice(4)
  }
  return pathname.slice(1)
}

export function getLang() {
  return i18next.language == 'zh' ? 'en' : 'zh'
}

/**
 * 根据指定的语言和可选参数从集合中检索文章。
 * @param collection 要从中检索文章的集合。必须是 'blogs'、'stack' 或 'projects' 中的一个。
 * @param lang 文章的语言。必须是 'en' 或 'zh'。
 * @param limit 最多检索的文章数量。可选。
 * @param ignore 要忽略的文章的 slug。可选。
 * @returns 按编辑日期排序、按语言和可选参数过滤的文章数组。
 */
/**
 * Retrieves articles from a collection based on the specified language and optional parameters.
 * @param collection The collection to retrieve articles from. Must be one of 'blogs', 'stack', or 'projects'.
 * @param lang The language of the articles. Must be either 'en' or 'zh'.
 * @param limit The maximum number of articles to retrieve. Optional.
 * @param ignore The slug of an article to ignore. Optional.
 * @returns An array of articles sorted by edit date, filtered by language and optional parameters.
 */
export async function getArticles<T extends 'blogs' | 'stack' | 'projects'>(
  collection: T,
  lang: 'en' | 'zh',
  limit?: number,
  ignore?: string,
) {
  let collectionEntries = await getCollection(collection),
    sortedArticlesByLang = collectionEntries.filter(entry => entry.id.startsWith(lang))
  if (ignore)
    sortedArticlesByLang = sortedArticlesByLang.filter(entry => entry.slug != ignore)
  if (limit) return sortedArticlesByLang.slice(0, limit)
  else
    return sortedArticlesByLang.sort((a, b) => {
      return new Date(b.data.editDate) - new Date(a.data.editDate)
    }) as CollectionEntry<T>[]
}

export async function getArticlesByPublishDate<T extends 'blogs' | 'stack' | 'projects'>(
  collection: T,
  lang: 'en' | 'zh',
  limit?: number,
  ignore?: string,
) {
  let collectionEntries = await getCollection(collection),
    sortedArticlesByLang = collectionEntries.filter(entry => entry.id.startsWith(lang))
  if (ignore)
    sortedArticlesByLang = sortedArticlesByLang.filter(entry => entry.slug != ignore)
  if (limit) return sortedArticlesByLang.slice(0, limit)
  else
    return sortedArticlesByLang.sort((a, b) => {
      return new Date(b.data.publishDate) - new Date(a.data.publishDate)
    }) as CollectionEntry<T>[]
}
