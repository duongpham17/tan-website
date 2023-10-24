import Head from 'next/head';

const defaultDescription = "";
const defaultKeywords = "";
const defaultOgTitle = "";

interface Props {
  title?: any,
  ogTitle?: string,
  description?: string,
  keywords?: string,
  image?: string,
};

export const Metadata = (
  { 
    title, 
    image, 
    ogTitle = defaultOgTitle, 
    description = defaultDescription, 
    keywords = defaultKeywords
  }: Props) => 
(        
  <Head>
    <title>{title ? `The Nailist | ${title}` : "The Nailist"}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content={description} />
    <meta name="og:title" content={ogTitle} key="og:title" />
    <meta property="og:url" content="https://www.exmple.co.uk" key="og:url"/>
    <meta property="og:type" content="website" key="og:type"/>
    <meta property="og:image" content={image || "/main.png"} key="ogimage"/>
    <meta property="og:description" content={description} />
    <meta name="keywords" content={keywords} />
  </Head>
)

export default Metadata;