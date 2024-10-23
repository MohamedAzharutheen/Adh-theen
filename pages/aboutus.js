import AboutBlog from '@/component/about-us/about-blog'
import HeroSec from '@/component/about-us/hero-sec'
import Layout from '@/component/layout'
import React from 'react'

export default function Aboutus() {
  return (
    <>
    <Layout>
        <HeroSec/>
        <AboutBlog/>
    </Layout>
    </>
  )
}
