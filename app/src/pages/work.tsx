import React from 'react'

const Work = () => {
    const electron = (window as any).electron;
  return (
    <div>
      work <br />
{electron.homedir()} <br />
{electron.architecture()} <br />
{electron.osVersion()} <br />

    </div>
  )
}

export default Work
