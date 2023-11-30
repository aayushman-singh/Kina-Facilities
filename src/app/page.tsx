/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable padded-blocks */
/* eslint-disable @typescript-eslint/space-before-function-paren */
import Nav from '@/components/Nav'
import Layout from '@/app/layout'
import Welcome_hero from '@/components/Welcome_hero'
import Grid from '@/components/Grid'
import Transition from '@/components/Transition'

export default function Home() {

  return (
    <Layout>
      <div>
        <Nav/>
      </div>
      <div>
        <Welcome_hero/>
      </div>
      <div>
        <Transition/>
      </div>
      <div>
        <Grid/>
      </div>
    </Layout>
  )
}
