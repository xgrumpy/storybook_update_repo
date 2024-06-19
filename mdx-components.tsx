import type { MDXComponents } from 'mdx/types'
// import Image, { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ color: '#5082F1', fontWeight: 'bold', fontSize: '2.1rem', margin: '0.88rem 0' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ color: '#5082F1', fontSize: '1.96rem', margin: '0.88rem 0' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ color: '#5082F1', fontSize: '1.7rem', margin: '0.66rem 0' }}>{children}</h3>,
    p: ({ children }) => <p style={{ color: '#030533', margin: '0.66rem 0 0.33rem 1rem' }}>{children}</p>,
    ...components,
  }
}
