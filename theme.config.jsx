const logo = (
  <svg height="40" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
    <defs>
      <style jsx>{`
            .cls-1 {
              'fill': '#fff',
            'stroke-width': '0px',
      }
      `}</style>
    </defs>
    <path className="cls-1" d="m954.85,1504.96c-22.39-8.3-44.37-18.01-66.09-28.5l212.15-577.37-577.52,212.2c-9.87-20.44-19.09-41.09-27.05-62.23-106.05-279.52-46.54-607.64,178.61-832.79,63.42-63.42,134.96-113.69,211.34-150.72-324.11,38.33-597.94,240.54-736.35,521.83-62.3,125.73-97.09,267.59-97.28,417.56.09,172.26,46.26,334.08,126.84,473.05,8.02,13.99,16.04,27.79,25,41.22,35.81,55.21,77.13,106.42,123.3,152.96,46.54,46.17,97.75,87.48,152.96,123.3,13.43,8.95,27.23,16.98,41.22,25,138.97,80.58,300.79,126.75,473.05,126.84,149.97-.19,291.83-34.98,417.56-97.28,281.58-138.5,483.78-412.71,522.02-737.09-37.12,76.48-87.48,148.3-151.09,211.9-224.03,224.03-550.09,284.1-828.68,180.1Z" fill="currentColor" />
    <path className="cls-1" d="m676.63,787.26s298.74-154.17,498.61-61.18c22.29,10.35,40.48,22.01,58.57,40.11,18.09,18.09,29.75,36.28,40.1,58.57,92.99,199.87-61.18,498.61-61.18,498.61,107.82,0,205.47-43.55,276.17-114.25,70.23-70.23,113.78-167.14,114.25-274.3l.09-37.59c102.32-84.41,186.54-189.89,246.04-310.02,29.56-59.6,53.07-123.02,69.76-189.34,3.08-11.66,5.78-23.5,8.3-35.35,13.25-62.86,20.15-128.15,19.96-195.3.09-10.35-.19-20.71-.74-30.97-.75-26.11-2.52-51.95-5.41-77.41-25.46-2.89-51.3-4.66-77.41-5.41-10.26-.56-20.61-.84-30.97-.74-67.15-.19-132.44,6.71-195.3,19.96-11.84,2.52-23.59,5.31-35.16,8.3-66.5,16.7-129.83,40.29-189.52,69.77-120.13,59.5-225.62,143.72-310.02,246.04l-37.59.09c-107.16.47-204.07,44.02-274.3,114.25-70.7,70.7-114.25,168.35-114.25,276.16Z" fill="currentColor" />
  </svg>
)

export default {
  logo,
  project: {
    link: 'https://github.com/moonbasehq'
  },
  docsRepositoryBase: "https://github.com/moonbasehq/docs",
  readMore: 'Read More →',
  postFooter: null,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  chat: {
    link: 'https://twitter.com/usemoonbase',
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    )
  },
  head: (
    <>
      <link rel="icon" href="/favicon-32x32.png" type="image/png" />
      <meta property="og:description" content="Observability tools for fast moving teams" />
      <meta property="og:url" content="https://beta.moonbasehq.com" />
      <meta property="og:site_name" content="Moonbase" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:url" content="https://d1g8kkebe2h8ce.cloudfront.net/ThumbnailBlack.png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:url" content="https://d1g8kkebe2h8ce.cloudfront.net/ThumbnailBlack.png" />
      <meta property="og:image:width" content="1800" />
      <meta property="og:image:height" content="1600" />
      <meta property="og:image:alt" content="MoonbaseHQ" />
      <meta property="og:type" content="website" />
      <title>Moonbase</title>
      <meta property="og:title" content="Moonbase"/>
    </>
  ),
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://beta.moonbasehq.com" target="_blank">
          Moonbase
        </a>
      </span>
    )
  }
}