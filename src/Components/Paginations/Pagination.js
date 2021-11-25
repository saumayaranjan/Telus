import React from 'react'

const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers = []
    for(let i = 1 ; i <= Math.ceil(totalPosts / postsPerPage) ; i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination d-flex justify-content-center">
                {pageNumbers.map(ele => {
                    return (
                        <li key={ele} className="page-item" style={{padding : "0 7px 0 7px"}}>
                            <a onClick={()=>paginate(ele)} className="page-link"
                                style={{borderRadius:"17px",background:"#b434eb",color:"#fff",cursor:"pointer"}}
                            
                            
                            
                            >{ele}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Pagination
