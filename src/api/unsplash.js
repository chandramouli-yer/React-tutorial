import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID vV3_FHFynMdxrfqb4R-5346CqahxJN-F6FoBBMawNnI'
    }
})