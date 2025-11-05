import { useState } from 'react'
import FirstSection from '../components/projets/FirstSection'
import Tabs from '../components/projets/Tabs'
import ProjectList from '../components/projets/projectList'

const Projets = () => {

  const [project, setProject] = useState('')

  return (
    <div className='min-h-screen bg-white text-black pt-24 lg:pt-40 px-2 lg:px-8 pb-10'>
      <FirstSection />

      <Tabs
        selected={project}
        onChange={setProject}
      />

      <ProjectList selected={project} />
    </div>
  )
}

export default Projets