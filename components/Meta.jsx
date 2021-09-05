import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            {/* <link rel='icon' href='/favicon.ico' /> */}
            <link rel='icon' href='/logo.png' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Portfolio',
    keywords: 'portfolio, lorik, aliu',
    description: 'Portfolio about my skills and projects I have made'
}

export default Meta
