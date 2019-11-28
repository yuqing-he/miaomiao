export default {
    path : '/movie',
    component : () => import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : () => import('@/components/Movie/City')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/Movie/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/Movie/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Movie/Search')
        },
        {
            path : 'detail/1/:movieId',
            components : {
                default : ()=> import('@/components/Movie/NowPlaying'),
                detail : ()=> import('@/views/Movie/detail')
            },
            props : {
                detail : true
            }
        },
        {
            path : 'detail/2/:movieId',
            components : {
                default : ()=> import('@/components/Movie/ComingSoon'),
                detail : ()=> import('@/views/Movie/detail')
            },
            props : {
                detail : true
            }
        },
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}