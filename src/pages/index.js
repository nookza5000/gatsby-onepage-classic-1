import React, { useState, useRef, useEffect } from 'react';
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from '../images/logo.png'
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HomePage = ({ data }) => {
  const { site, mockup650x425, allFeatureMarkdown } = data

  const [collapse, setCollapse] = useState(true);
  const [path, setPath] = useState("main");

  const s1 = useRef(null)
  const s2 = useRef(null)
  const s3 = useRef(null)
  const s4 = useRef(null)
  const executeScroll = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })

  return (
    <Layout>
      <SEO title="Home" classNames="stretched" />
      <header id="header" className={`sticky-header`}>
        <div className="" id="header-wrap">
          <div className="container clearfix">
            <div id="primary-menu-trigger" onClick={() => setCollapse(!collapse)} onKeyDown={() => setCollapse(!collapse)} role="button" tabIndex="-1">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="row clearfix">
              <div className="col-lg-5 col-12">
                <div id="logo">
                  <Link className="brand-logo" to="/">
                    <img src={logo} alt={site.siteMetadata.title} />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <nav id="primary-menu">
                  <ul className={`one-page-menu  ${collapse ? '' : 'd-block'}`}>
                    <li className={path === "main" ? "current" : ""}>
                      <button className="button button-link" onClick={() => {executeScroll(s1); setPath("main");}}>
                        Home
                    </button>
                    </li>
                    <li className={path === "about" ? "current" : ""}>
                      <button className="button button-link" onClick={() => {executeScroll(s2); setPath("about");}}>
                        About
                    </button>
                    </li>
                    <li className={path === "service" ? "current" : ""}>
                      <button className="button button-link" onClick={() => {executeScroll(s3); setPath("service");}}>
                        Service
                    </button>
                    </li>
                    <li className={path === "contact" ? "current" : ""}>
                      <button className="button button-link" onClick={() =>{ executeScroll(s4); setPath("contact");}}>
                        Contact
                    </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="slider" style={{ background: '#222' }} ref={s1}>
        <div className="center dark pt-60 pb-60">
          <div className="divcenter" style={{ maxWidth: '400px' }}>
            <Img fluid={mockup650x425.childImageSharp.fluid} />
          </div>
          <h1 className="divcenter" style={{ maxWidth: '700px', fontSize: '40px' }}>
            LOREM IPSUM IS PLACEHOLDER
          </h1>
        </div>
      </section>
      <section className="pt-60 pt-20-xs pb-60 pb-20-xs" ref={s2}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 order-md-2 order-1">
              <Img fluid={mockup650x425.childImageSharp.fluid} />
            </div>
            <div className="col-lg-6 col-md-12 order-md-1 order-2">
              <div className="heading-block">
                <h2>PURPOSE AND USAGE</h2>
                <span className="before-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              </div>
              <p className="lead">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of
                Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-60 pt-20-xs pb-60 pb-20-xs" ref={s3}>
        <div className="center">
          <div className="container">
            <h2 className="divcenter font-body" style={{ maxWidth: '700px', fontSize: '40px' }}>
              Summing up, if the copy is diverting attention from the design it’s because it’s not up to task.
              </h2>
            <p className="lead divcenter" style={{ maxWidth: '750px' }}>
              Lorem Ipsum is a tool that can be useful, used intentionally it may help solve some problems. If you go about content strategy the wrong way, fix that problem.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-60 pb-60 pt-20-xs pb-20-xs">
        <div className="container center">
          <h2 className="divcenter nobottommargin" style={{ maxWidth: '700px' }}>
            What is Lorem Ipsum?
          </h2>
          <p className="lead divcenter" style={{ maxWidth: '800px' }}>
            Lorem Ipsum is a tool that can be useful, used intentionally it may help some problems.
          </p>
          <div className="row">
            {allFeatureMarkdown.edges.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div className="col-12 col-lg-4" key={node.fields.slug}>
                  <div className="card card-block_container text-center">
                    <Img className="card-img-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                    <div className="card-body">
                      <h5 className="card-title card-block__title ">
                        {title}
                      </h5>
                      <p className="card-text card-block__text" dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description
                      }} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="pt-60 pt-20-xs pb-60 pb-20-xs">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <Img fluid={mockup650x425.childImageSharp.fluid} />
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="heading-block">
                <h2>PURPOSE AND USAGE</h2>
                <span className="before-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              </div>
              <p className="lead">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of
                Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="center pt-60 pt-20-xs pb-60 pb-20-xs" ref={s4}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mt-2 mb-2" style={{ color: '#007bfd' }}>
                <FontAwesomeIcon icon={faFacebookMessenger} size="4x" />
              </div>
              <h2 className="divcenter" style={{ maxWidth: '700px', fontSize: '40px' }}>
                Stay Connected!
              </h2>
              <p className="lead divcenter" style={{ maxWidth: '750px' }}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out.
                  </p>
              <a href="https://m.me/whatsiteman" target="_blank" rel="noopener noreferrer"
                className="button button-border t600">
                Contact me!
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage

export const pageQuery =
  graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    },
    headerImg: file(relativePath: { eq: "header.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    mockup650x425: file(relativePath: { eq: "650x425.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    allFeatureMarkdown: allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
