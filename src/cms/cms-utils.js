if (typeof window !== 'undefined') {

    // add admin.css
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    link.href = pathname + 'admin.css';
    document.head.appendChild(link)

    if (process.env.NETLIFY_SITE_URL) {
        window.localStorage.setItem(
            'netlifySiteURL', process.env.NETLIFY_SITE_URL
        )
    }

    // Log netlifySiteURL if editing on localhost
    if (
        window.location.hostname === 'localhost' &&
        window.localStorage.getItem('netlifySiteURL')
    ) { 
        console.log(
            `%cnetlifySiteURL: ${window.localStorage.getItem('netlifySiteURL')}`,
            'color: hotpink; font-size: 15px'
        )
    }
}