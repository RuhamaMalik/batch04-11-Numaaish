import React, { memo } from 'react'

const OtherComponent = () => {
    console.log("hello from OtherComponent");
  return (
    <div>OtherComponent</div>
  )
}

export default memo(OtherComponent)