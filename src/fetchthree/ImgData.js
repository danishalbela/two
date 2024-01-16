import React from 'react'

function ImgData(props) {
    let {data} = props
    
  return (
    <div>
        {
            data.map(ele=>{
                return <img key={ele?.id} src={ele?.urls?.small}/>
            })
        }
    </div>
  )
}

export default ImgData