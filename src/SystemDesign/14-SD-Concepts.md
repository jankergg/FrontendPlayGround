# 14 Front-End System Design Concepts

## Rendering

### Static Site Generation(SSG)

Use case:

- Doesn't change frequently or can be pre-built. (readonly online news website, doc sites)
- Doesn't relay heavily on user specific data, or generic contents(blogs, portfolios)
- Needs high performance and SEO(e.g. marketing/landing page).\

**Restrictions: SSG can't handle contens that needs up-to-time or can be tricker if dynamic content increases**

### Incremental Static Regeneration(ISR)

> ISG refers to a site built using incremental static regeneration(ISR), mainly associated with **Next.js**. it allows you to updated static content after deployment. without rebuilding the entire site.
>
> - Pages are prebuild at building time.\
> - Some page can be updated in the background on demand, incrementally.\
> - Benefits: avoids long build times for large sites and lets you serve fresh content without a full redeploy.\

**Bottleneck: on the server side if certain pages are re-generated very requently**

### Server Side Rendering (SSR)

Use cases:

- User specific contents, e.g. Dashboard, feed.
- Stock tricker,flights prices
- Realtime data fetching

### Client Side Rendering

> CSR still essential when the content is user-specific, **highly interactive**, or **not SEO critical**.

- User specific data -- can't pre-render UI for every user
- Highly interactive UI -- Client side interactive are fast, comparing with SSR
- Fast UX after initial load.
- Works with token-based auth(JWT, OAuth)
- Lower burdon to the backend, as CSR shifts computation to the client.

Uses CSR when local state management is nessisary.

### Performance Optimization

- React Dev tools, React profiler to identify which component re-renders frequently
- DataDog, Lighthouse, WebPageTest for page loading/rendering insights
- Reduce re-renders
- Split bundles/lazy loading
- Data caching(React Query/Redux, Zustand)
- GraphQL -- reducing data over-fetching, only grab what you actually needed
